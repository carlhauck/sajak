<template>
  <div class="game">
    <div class="container text-center disable-dbl-tap-zoom">
      <ImageContainer
        :blankCount="blankCount"
        :brandCount="brandCount"
        :brands="brands"
        :currentWord="currentWord"
        :isMobile="isMobile"
        :newScoreVisible="newScoreVisible"
        :score="score"
        :wrongCount="wrongCount"
        :wrongGuesses="wrongGuesses"
        @clearBrands="clearBrands"
        @clearScore="clearScore"
        @setScore="setScore"
        @getNewWord="getNewWord"
        @outOfTime="outOfTime" />
      <Puzzle
        :blankCount="blankCount"
        :wrongCount="wrongCount"
        :puzzle="puzzle" />
      <Definition
        :definition="definition" />
      <MobileNextButton
        v-if="isMobile"
        :blankCount="blankCount"
        :brandCount="brandCount"
        :currentWord="currentWord"
        :wrongCount="wrongCount"
        @clearBrands="clearBrands"
        @clearScore="clearScore"
        @setScore="setScore"
        @getNewWord="getNewWord" />
      <MobileKeyboard
        v-if="isMobile && wrongCount < 6 && blankCount > 0 && definition !== 'loading new word'"
        :currentWord="currentWord"
        @guessLetterMobile="guessLetterMobile" />
      <NewScoreModal
        v-if="newScoreVisible"
        :newScoreVisible="newScoreVisible"
        :score="score"
        @closeNewScore="toggleNewScore" />
      <audio class="whinny-cooper-good" src="./../assets/horse-whinny-good.mp3"></audio>
      <audio class="whinny-cooper-bad" src="./../assets/horse-whinny-bad.mp3"></audio>
      <audio class="last-straw" src="./../assets/horse-whoa-bad.mp3"></audio>
    </div>
  </div>
</template>

<style scoped>
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

@media (min-width: 768px) and (orientation: landscape) {
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

/* iPad */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
  .game {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .container {
    position: relative;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    overflow-y: hidden;
  }
}

/* iPad Pro */
@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
  .game {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .container {
    position: relative;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    overflow-y: hidden;
  }
}

@media (min-width: 1200px) {
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
      brands: [],
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

    document.addEventListener(
      "touchmove",
      function (event) {
        if (event.scale !== 1) {
          event.preventDefault();
        }
      },
      { passive: false }
    );

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
    brandCount: function () {
      return this.brands.length;
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
    wrongCount: function () {
      return this.wrongGuesses.length;
    },
  },
  methods: {
    addLetter: function (key) {
      this.indices.forEach((i) => {
        this.puzzle.splice(i, 1, key);
      });
    },
    clearScore: function () {
      this.score = 0;
    },
    clearBrands: function () {
      this.brands = [];
    },
    getCorrectIndices: function (key) {
      this.indices = [];
      for (let i = 0; i < this.currentWord.length; i++) {
        if (this.currentWord[i] === key) {
          this.indices.push(i);
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
            setTimeout(() => this.getNewWord(), 3000);
            this.$ga.event("wordnik", "bad-get", "special-character");
          } else {
            this.currentWord = response.data.word.toLowerCase();
            this.puzzle = Array(response.data.word.length).fill("_");
            axios
              .get(
                `https://api.wordnik.com/v4/word.json/${response.data.word}/definitions?limit=5&includeRelated=false&useCanonical=false&includeTags=false&api_key=${process.env.VUE_APP_WORDNIK_API_KEY}`
              )
              .then((response) => {
                if (response.data[0].text.toLowerCase().includes("plural")) {
                  this.definition = "loading new word";
                  console.log(
                    `Definition (${response.data[0].text}) contained the phrase 'plural form'. Too easy! Getting new word.`
                  );
                  setTimeout(() => this.getNewWord(), 3000);
                  this.$ga.event("wordnik", "bad-get", "plural form");
                } else if (response.data[0].text.includes("participle")) {
                  this.definition = "loading new word";
                  console.log(
                    `Definition (${response.data[0].text}) contained the phrase 'participle'. Too easy! Getting new word.`
                  );
                  setTimeout(() => this.getNewWord(), 3000);
                  this.$ga.event("wordnik", "bad-get", "participle");
                } else {
                  this.definition = this.prepDefinition(response.data[0].text);
                  setTimeout(() => localStorage.removeItem("sajak"), 2000);
                  this.$ga.event("wordnik", "good-get");
                }
              })
              .catch(() => {
                this.definition = "loading new word";
                console.log("Word didn't have a definition. Getting new word.");
                this.storeScore();
                setTimeout(() => this.getNewWord(), 3000);
                this.$ga.event("wordnik", "bad-get", "no-definition");
              });
          }
        })
        .catch(() => {
          this.definition = "loading new word";
          this.storeScore();
          setTimeout(() => this.getNewWord(), 10000);
          this.$ga.event("wordnik", "bad-get", "429");
        });
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
        if (this.definition !== "loading new word") {
          if (this.currentWord.includes(letter)) {
            if (!this.puzzle.includes(letter)) {
              Promise.resolve(this.getCorrectIndices(letter)).then(
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
              this.loseRound();
            }
          }
        }
      }
    },
    guessLetterMobile: function (ltr) {
      const letter = ltr.toLowerCase();
      if (this.currentWord.includes(letter)) {
        if (!this.puzzle.includes(letter)) {
          Promise.resolve(this.getCorrectIndices(letter)).then(
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
          this.loseRound();
          this.$ga.event("round", "loss", "guesses");
        }
      }
    },
    loseGame: function () {
      localStorage.removeItem("sajak");
      this.$ga.event("game", "end", "score", this.score);
      if (this.score > this.scoreToBeat) {
        this.toggleNewScore();
        this.$ga.event("game", "end", "high-score", this.score);
      }
    },
    async loseRound() {
      await this.brands.push("X");
      if (this.brandCount === 3) {
        this.loseGame();
      }
    },
    outOfTime: function () {
      let guessesLeft = 6 - this.wrongGuesses.length;
      let dashArray = Array(guessesLeft).fill("-");
      this.wrongGuesses = this.wrongGuesses.concat(dashArray);
      this.playNay();
      this.loseRound();
      this.$ga.event("round", "loss", "time");
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
    prepDefinition: function (def) {
      console.log(def);
      if (def.includes(".")) {
        const periodIndex = def.indexOf(".") || def.length + 1;
        return def.slice(0, periodIndex).replace(/(<([^>]+)>)/gi, "");
      } else {
        return def.replace(/(<([^>]+)>)/gi, "");
      }
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
    storeScore: function () {
      let score = JSON.stringify(this.score);
      let encryptedScore = this.CryptoJS.AES.encrypt(
        score,
        `${process.env.VUE_APP_CRYPTO_KEY}`
      ).toString();
      localStorage.setItem("sajak", `${encryptedScore}`);
      this.$ga.event("localstorage", "set", "score", this.score);
    },
    tallyWrong: function (key) {
      this.wrongGuesses.push(key);
      this.playNeigh();
    },
    toggleNewScore: function () {
      this.newScoreVisible = !this.newScoreVisible;
    },
    winRound: function () {
      this.playYay();
      this.$ga.event("round", "win");
    },
  },
};
</script>