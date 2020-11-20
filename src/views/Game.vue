<template>
  <div class="game">
    <div class="container text-center">
      <ImageContainer
        v-bind:blankCount="blankCount"
        v-bind:wrongCount="wrongCount"
        v-bind:score="score"
        v-bind:wrongGuesses="wrongGuesses"
        v-bind:currentWord="currentWord"
        v-bind:isMobile="isMobile"
        v-bind:newScoreVisible="newScoreVisible"
        v-on:clearScore="clearScore"
        v-on:setScore="setScore"
        v-on:getNewWord="getNewWord"
        v-on:outOfTime="outOfTime" />
      <Puzzle
        v-bind:blankCount="blankCount"
        v-bind:wrongCount="wrongCount"
        v-bind:puzzle="puzzle" />
      <Definition
        v-bind:definition="definition" />
      <MobileNextButton
        v-bind:blankCount="blankCount"
        v-bind:wrongCount="wrongCount"
        v-bind:currentWord="currentWord"
        v-if="isMobile"
        v-on:clearScore="clearScore"
        v-on:setScore="setScore"
        v-on:getNewWord="getNewWord" />
      <MobileKeyboard
        :currentWord="currentWord"
        v-if="isMobile"
        v-on:guessLetterMobile="guessLetterMobile" />
      <NewScoreModal
        v-if="newScoreVisible"
        v-bind:newScoreVisible="newScoreVisible"
        v-bind:score="score"
        v-on:closeNewScore="toggleNewScore" />
      <audio class="whinny-cooper-good" src="./../assets/horse-whinny-good.mp3"></audio>
      <audio class="whinny-cooper-bad" src="./../assets/horse-whinny-bad.mp3"></audio>
      <audio class="last-straw" src="./../assets/horse-whoa-bad.mp3"></audio>
    </div>
  </div>
</template>

<style scoped>

body {
  touch-action: pan-y;
}

.container {
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .container {
    overflow-y: hidden;
  }
}

@media (min-width: 992px) {
  .game {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }
}
</style>

<script>
import axios from "axios";
import VueCryptojs from "vue-cryptojs";
import ImageContainer from "./../components/ImageContainer";
import Puzzle from "./../components/Puzzle";
import Definition from "./../components/Definition";
import MobileNextButton from "./../components/MobileNextButton";
import NewScoreModal from "./../components/NewScoreModal";
import MobileKeyboard from "./../components/MobileKeyboard";
export default {
  components: {
    ImageContainer,
    Puzzle,
    Definition,
    MobileNextButton,
    NewScoreModal,
    MobileKeyboard,
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
      scoreToBeat: null,
      newScoreVisible: false,
    };
  },
  beforeCreate: function () {
    document.body.className = "game";
  },
  created: function () {
    this.setScore();
    this.getNewWord();
    axios.get("/api/high_scores").then((response) => {
      this.scoreToBeat = response.data[9].score;
    });
  },
  mounted: function () {
    if (!this.isMobile) {
      window.addEventListener("keydown", this.guessLetter);
    }
    this.$ga.page("/play");

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });

    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vw", `${vw}px`);
    window.addEventListener("resize", () => {
      let vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty("--vw", `${vw}px`);
    });
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
    clearScore: function () {
      this.score = 0;
    },
    setScore: function () {
      if (!this.score) {
        if (localStorage.getItem("sajak")) {
          let storage = localStorage.getItem("sajak");
          let decryptedScore = this.CryptoJS.AES.decrypt(
            storage,
            `${process.env.VUE_APP_CRYPTO_KEY}`
          ).toString(this.CryptoJS.enc.Utf8);
          this.score = Number(decryptedScore);
          this.$ga.event("localstorage", "get", "score", this.score);
        } else {
          this.score = 0;
        }
      }
    },
    getNewWord: function () {
      this.wrongGuesses = [];
      axios
        .get(
          `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20adjective%2C%20verb&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=10&api_key=${process.env.VUE_APP_WORDNIK_API_KEY}`
        )
        .then((response) => {
          if (response.data.word.match(/[^a-zA-Z]/)) {
            this.definition = "loading new word";
            console.log(
              `Word (${response.data.word}) contained special character. Getting new word.`
            );
            setTimeout(() => this.getNewWord(), 5000);
            this.$ga.event("word", "bad", "special-character");
          } else {
            this.currentWord = response.data.word.toLowerCase();
            this.puzzle = Array(response.data.word.length).fill("_");
            axios
              .get(
                `https://api.wordnik.com/v4/word.json/${response.data.word}/definitions?limit=5&includeRelated=false&useCanonical=false&includeTags=false&api_key=${process.env.VUE_APP_WORDNIK_API_KEY}`
              )
              .then((response) => {
                this.definition = this.prepDefinition(response.data[0].text);
                setTimeout(() => localStorage.removeItem("sajak"), 2000);
                this.$ga.event("word", "good");
              })
              .catch(() => {
                this.definition = "loading new word";
                console.log("Word didn't have a definition. Getting new word.");
                this.storeScore();
                setTimeout(() => this.getNewWord(), 5000);
                this.$ga.event("word", "bad", "no-definition");
              });
          }
        })
        .catch(() => {
          this.definition = "loading new word";
          console.log("429");
          this.storeScore();
        });
    },
    storeScore: function () {
      let score = JSON.stringify(this.score);
      let encryptedScore = this.CryptoJS.AES.encrypt(
        score,
        `${process.env.VUE_APP_CRYPTO_KEY}`
      ).toString();
      localStorage.setItem("sajak", `${encryptedScore}`);
      this.$ga.event("localstorage", "set", "score", this.score);
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
      if (
        e.which >= 65 &&
        e.which <= 90 &&
        !this.newScoreVisible &&
        this.wrongCount !== 6
      ) {
        // a-z
        const letter = e.key.toLowerCase();
        if (this.currentWord.includes(letter)) {
          if (!this.puzzle.includes(letter)) {
            Promise.resolve(this.getIndices(letter)).then(
              this.addLetter(letter)
            );
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
      }
    },
    guessLetterMobile: function (ltr) {
      const letter = ltr.toLowerCase();
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
    outOfTime: function () {
      let guessesLeft = 6 - this.wrongGuesses.length;
      let dashArray = Array(guessesLeft).fill("-");
      this.wrongGuesses = this.wrongGuesses.concat(dashArray);
      this.playNay();
      this.loseGame();
    },
    winRound: function () {
      this.playYay();
    },
    loseGame: function () {
      localStorage.removeItem("sajak");
      this.$ga.event("game", "end", "score", this.score);
      if (this.score > this.scoreToBeat) {
        this.toggleNewScore();
        this.$ga.event("game", "end", "high-score", this.score);
      }
    },
    toggleNewScore: function () {
      this.newScoreVisible = !this.newScoreVisible;
    },
  },
};
</script>