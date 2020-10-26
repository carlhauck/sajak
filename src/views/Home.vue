<template>
  <div class="home">
    <div class="container text-center">
      <h1 class="page-title">sajak horseman</h1>
      <div class="img-container">
        <!-- new game -->
        <img v-show="countPuzzle() > 0 && wrongCount == 0" src="./../assets/horse-portrait-painting-0.png" alt="sajak horseman">
        <img v-show="countPuzzle() > 0 && wrongCount == 1" src="./../assets/horse-portrait-painting-1.png" alt="sajak horseman">
        <img v-show="countPuzzle() > 0 && wrongCount == 2" src="./../assets/horse-portrait-painting-2.png" alt="sajak horseman">
        <img v-show="countPuzzle() > 0 && wrongCount == 3" src="./../assets/horse-portrait-painting-3.png" alt="sajak horseman">
        <img v-show="countPuzzle() > 0 && wrongCount == 4" src="./../assets/horse-portrait-painting-4.png" alt="sajak horseman">
        <img v-show="countPuzzle() > 0 && wrongCount == 5" src="./../assets/horse-portrait-painting-5.png" alt="sajak horseman">
        <!-- loss -->
        <img v-show="countPuzzle() > 0 && wrongCount == 6" src="./../assets/horse-portrait-painting-fail.png" alt="sajak horseman">
        <!-- win -->
        <img v-show="countPuzzle() == 0 && wrongCount < 6" src="./../assets/horse-portrait-painting-6.png" alt="sajak horseman">
        <div class="top-left">
          <h4 class="neigh-score neigh" v-if="countPuzzle() > 0 && wrongCount < 6"> {{ wrong.join(" ") }} </h4>
        </div>
        <div class="top-right">
          <h4 class="neigh-score score">score: {{ score }}</h4>
        </div>
        <div class="bottom">
          <h2 class="neigh-score answer" v-if="countPuzzle() > 0 && wrongCount === 6">{{ currentWord }}</h2>
        </div>
      </div>
      <h1 class="puzzle" v-if="countPuzzle() > 0 && wrongCount < 6">{{ puzzle.join("") }}</h1>
      <h1 class="puzzle win" v-if="countPuzzle() === 0 && wrongCount < 6">{{ puzzle.join("") }}</h1>
      <h1 class="puzzle loss" v-if="countPuzzle() > 0 && wrongCount == 6">{{ puzzle.join("") }}</h1>
      <p>{{ definition.toLowerCase() }}</p>
      <button v-if="countPuzzle() === 0 && wrongCount < 6" v-on:click="getNewWord">Next Word</button>
      <button v-if="countPuzzle() > 0 && wrongCount == 6" v-on:click="getNewWord">New Game</button>
      <audio class="whinny-cooper" src="./../assets/horse-whinny-3.mp3"></audio>
      <audio class="last-straw" src="./../assets/horse-neigh-3.mp3"></audio>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentWord: "",
      definition: "",
      puzzle: [],
      wrongCount: 0,
      wrong: [],
      indices: [],
      score: 0,
    };
  },
  created: function () {
    this.getNewWord();
  },
  mounted: function () {
    window.addEventListener("keydown", this.guessLetter);
  },
  methods: {
    getNewWord: function () {
      this.wrongCount = 0;
      this.wrong = [];
      axios
        .get(
          `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20adjective%2C%20verb&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=10&api_key=${process.env.VUE_APP_WORDNIK_API_KEY}`
        )
        .then((response) => {
          this.currentWord = response.data.word.toLowerCase();
          this.puzzle = Array(response.data.word.length).fill("_");
          axios
            .get(
              `https://api.wordnik.com/v4/word.json/${response.data.word}/definitions?limit=5&includeRelated=false&useCanonical=false&includeTags=false&api_key=${process.env.VUE_APP_WORDNIK_API_KEY}`
            )
            .then((response) => {
              let periodIndex = response.data[0].text.indexOf(".") || -1;
              console.log(response.data[0].text);
              let def = response.data[0].text
                .slice(0, periodIndex)
                .replace(/(<([^>]+)>)/gi, "");
              this.definition = def;
              if (localStorage.getItem("sajak-horseman") !== null) {
                this.score = parseInt(
                  localStorage.getItem("sajak-horseman").slice(3)
                );
              } else {
                this.score = 0;
              }
            });
        });
    },
    playNeigh: function () {
      if (this.wrongCount === 6) {
        let audio = document.querySelector("audio.last-straw");
        if (!audio) return; // stop function from running altogether
        audio.currentTime = 0; // rewind to the start if clip is already playing
        audio.play();
      } else {
        let audio = document.querySelector("audio.whinny-cooper");
        if (!audio) return; // stop function from running altogether
        audio.currentTime = 0; // rewind to the start if clip is already playing
        audio.play();
      }
    },
    countPuzzle: function () {
      return this.puzzle.reduce((n, x) => n + (x === "_"), 0);
    },
    guessLetter: function (e) {
      if ((e.which >= 65 && e.which <= 90) || e.which === 189) {
        // a-z + '-'
        if (this.currentWord.includes(e.key)) {
          if (!this.puzzle.includes(e.key)) {
            Promise.resolve(this.getIndices(e.key)).then(this.addLetter(e.key));
            this.score += this.indices.length;
            if (this.countPuzzle() === 0 && this.wrongCount < 6) {
              this.winGame();
            }
          }
        } else if (!this.wrong.includes(e.key)) {
          this.tallyWrong(e.key);
          if (this.countPuzzle() > 0 && this.wrongCount === 6) {
            this.loseGame();
          }
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
      this.wrongCount++;
      this.playNeigh();
      this.wrong.push(key);
    },
    winGame: function () {
      console.log("win");
      const gameScore = "312" + this.score;
      localStorage.setItem("sajak-horseman", `${gameScore}`);
    },
    loseGame: function () {
      localStorage.removeItem("sajak-horseman");
    },
  },
};
</script>