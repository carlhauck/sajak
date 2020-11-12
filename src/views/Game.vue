<template>
  <div class="game">
    <div class="container text-center">
      <Header
        v-if="isMobile" />
      <ImageContainer
        v-bind:blankCount="blankCount"
        v-bind:wrongCount="wrongCount"
        v-bind:score="score"
        v-bind:wrongGuesses="wrongGuesses"
        v-bind:currentWord="currentWord"
        v-bind:isMobile="isMobile"
        v-on:setScore="setScore"
        v-on:getNewWord="getNewWord" />
      <Puzzle
        v-bind:blankCount="blankCount"
        v-bind:wrongCount="wrongCount"
        v-bind:puzzle="puzzle" />
      <Definition
        v-bind:definition="definition" />
      <MobileInput
        v-bind:blankCount="blankCount"
        v-bind:wrongCount="wrongCount"
        v-if="isMobile"
        v-on:guessLetterMobile="guessLetterMobile" />
      <MobileNextButton
        v-bind:blankCount="blankCount"
        v-bind:wrongCount="wrongCount"
        v-bind:currentWord="currentWord"
        v-if="isMobile"
        v-on:setScore="setScore"
        v-on:getNewWord="getNewWord" />
      <audio class="whinny-cooper-good" src="./../assets/horse-whinny-good.mp3"></audio>
      <audio class="whinny-cooper-bad" src="./../assets/horse-snort.mp3"></audio>
      <audio class="last-straw" src="./../assets/horse-whoa-bad.mp3"></audio>
    </div>
  </div>
</template>

<style scoped>
.game {
  align-items: center;
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
</style>

<script>
import axios from "axios";
import VueCryptojs from "vue-cryptojs";
import Header from "./../components/Header";
import ImageContainer from "./../components/ImageContainer";
import Puzzle from "./../components/Puzzle";
import Definition from "./../components/Definition";
import MobileInput from "./../components/MobileInput";
import MobileNextButton from "./../components/MobileNextButton";
export default {
  components: {
    Header,
    ImageContainer,
    Puzzle,
    Definition,
    MobileInput,
    MobileNextButton,
  },
  data: function () {
    return {
      currentWord: "",
      definition: "",
      puzzle: [],
      wrongGuesses: [],
      indices: [],
      score: 0,
      color: "orange",
      scrabblePoints: {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
        l: 1,
        n: 1,
        s: 1,
        t: 1,
        r: 1,
        d: 2,
        g: 2,
        b: 3,
        c: 3,
        m: 3,
        p: 3,
        f: 4,
        h: 4,
        v: 4,
        w: 4,
        y: 4,
        k: 5,
        j: 8,
        x: 8,
        q: 10,
        z: 10,
      },
    };
  },
  beforeCreate: function () {
    document.body.className = "game";
  },
  created: function () {
    this.getNewWord();
    this.setScore();
  },
  mounted: function () {
    if (!this.isMobile) {
      window.addEventListener("keydown", this.guessLetter);
    }
  },
  computed: {
    blankCount: function () {
      return this.puzzle.reduce((n, x) => n + (x === "_"), 0);
    },
    wrongCount: function () {
      return this.wrongGuesses.length;
    },
    isMobile: function () {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    setScore: function () {
      if (localStorage.getItem("sajak")) {
        let storage = localStorage.getItem("sajak");
        let decryptedScore = this.CryptoJS.AES.decrypt(
          storage,
          `${process.env.VUE_APP_CRYPTO_KEY}`
        ).toString(this.CryptoJS.enc.Utf8);
        this.score = Number(decryptedScore);
      } else {
        this.score = 0;
      }
    },
    getNewWord: function () {
      this.wrongGuesses = [];
      axios
        .get(
          `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20adjective%2C%20verb&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=10&api_key=${process.env.VUE_APP_WORDNIK_API_KEY}`
        )
        .then((response) => {
          if (response.data.word.includes("-")) {
            this.definition = "loading new word";
            console.log("Word contained hyphen. Getting new word.");
            setTimeout(() => this.getNewWord(), 5000);
          } else {
            this.currentWord = response.data.word.toLowerCase();
            this.puzzle = Array(response.data.word.length).fill("_");
            axios
              .get(
                `https://api.wordnik.com/v4/word.json/${response.data.word}/definitions?limit=5&includeRelated=false&useCanonical=false&includeTags=false&api_key=${process.env.VUE_APP_WORDNIK_API_KEY}`
              )
              .then((response) => {
                this.definition = this.prepDefinition(response.data[0].text);
              })
              .catch(() => {
                this.definition = "loading new word";
                console.log("Word didn't have a definition. Getting new word.");
                setTimeout(() => this.getNewWord(), 5000);
              });
          }
        });
    },
    prepDefinition: function (def) {
      console.log(def);
      if (def.includes(".")) {
        const periodIndex = def.indexOf(".") || def.length + 1;
        return def.slice(0, periodIndex).replace(/(<([^>]+)>)/gi, "");
      } else {
        return def.replace(/(<([^>]+)>)/gi, "");
      }
    },
    guessLetter: function (e) {
      if (e.which >= 65 && e.which <= 90) {
        // a-z
        if (this.currentWord.includes(e.key)) {
          if (!this.puzzle.includes(e.key)) {
            Promise.resolve(this.getIndices(e.key)).then(this.addLetter(e.key));
            this.score += this.indices.length * this.scrabblePoints[e.key];
            if (this.blankCount === 0 && this.wrongCount < 6) {
              this.winRound();
            }
          }
        } else if (!this.wrongGuesses.includes(e.key)) {
          this.tallyWrong(e.key);
          if (this.blankCount > 0 && this.wrongCount === 6) {
            this.loseGame();
          }
        }
      }
    },
    guessLetterMobile: function (letter) {
      if (this.currentWord.includes(letter)) {
        if (!this.puzzle.includes(letter)) {
          Promise.resolve(this.getIndices(letter)).then(this.addLetter(letter));
          this.score += this.indices.length * this.scrabblePoints[letter];
          if (this.blankCount === 0 && this.wrongCount < 6) {
            this.winRound();
          }
        }
      } else if (!this.wrongGuesses.includes(letter)) {
        this.tallyWrong(letter);
        if (this.blankCount > 0 && this.wrongCount === 6) {
          this.loseGame();
        }
      }
    },
    getIndices: function (key) {
      this.indices = [];
      for (let i = 0; i < this.currentWord.length; i++) {
        if (this.currentWord[i] === key) {
          this.indices.push(i);
        }
      }
    },
    addLetter: function (key) {
      this.indices.forEach((i) => {
        this.puzzle.splice(i, 1, key);
      });
    },
    tallyWrong: function (key) {
      this.wrongGuesses.push(key);
      this.playNeigh();
    },
    playNeigh: function () {
      if (this.wrongCount === 6) {
        let audio = document.querySelector("audio.last-straw");
        if (!audio) return; // stop function from running altogether
        audio.currentTime = 0; // rewind to the start if clip is already playing
        audio.play();
      } else {
        let audio = document.querySelector("audio.whinny-cooper-bad");
        if (!audio) return; // stop function from running altogether
        audio.currentTime = 0; // rewind to the start if clip is already playing
        audio.play();
      }
    },
    playYay: function () {
      const audio = document.querySelector("audio.whinny-cooper-good");
      audio.play();
    },
    winRound: function () {
      this.playYay();
      let score = JSON.stringify(this.score);
      let encryptedScore = this.CryptoJS.AES.encrypt(
        score,
        `${process.env.VUE_APP_CRYPTO_KEY}`
      ).toString();
      localStorage.setItem("sajak", `${encryptedScore}`);
    },
    loseGame: function () {
      localStorage.removeItem("sajak");
    },
  },
};
</script>

<style scoped>
</style>