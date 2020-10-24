<template>
  <div class="home">
    <div class="container text-center">
      <h1 class="page-title">sajak horseman</h1>
      <img v-show="countPuzzle() > 0 && wrongCount == 0" src="./../assets/horse-portrait-painting-0.png" alt="sajak horseman">
      <img v-show="countPuzzle() > 0 && wrongCount == 1" src="./../assets/horse-portrait-painting-1.png" alt="sajak horseman">
      <img v-show="countPuzzle() > 0 && wrongCount == 2" src="./../assets/horse-portrait-painting-2.png" alt="sajak horseman">
      <img v-show="countPuzzle() > 0 && wrongCount == 3" src="./../assets/horse-portrait-painting-3.png" alt="sajak horseman">
      <img v-show="countPuzzle() > 0 && wrongCount == 4" src="./../assets/horse-portrait-painting-4.png" alt="sajak horseman">
      <img v-show="countPuzzle() > 0 && wrongCount == 5" src="./../assets/horse-portrait-painting-5.png" alt="sajak horseman">
      <!-- Lose -->
      <img v-show="countPuzzle() > 0 && wrongCount == 6" src="./../assets/horse-portrait-painting-fail.png" alt="sajak horseman">
      <!-- Win -->
      <img v-show="countPuzzle() == 0 && wrongCount < 6" src="./../assets/horse-portrait-painting-6.png" alt="sajak horseman">
      <h1 class="puzzle" v-if="countPuzzle() > 0 && wrongCount < 6">{{ puzzle.join("") }}</h1>
      <h1 class="puzzle win" v-if="countPuzzle() === 0 && wrongCount < 6">{{ puzzle.join("") }}</h1>
      <h1 class="puzzle loss" v-if="countPuzzle() > 0 && wrongCount == 6">{{ puzzle.join("") }}</h1>
      <h4>score: {{ score }}</h4>
      <p v-if="countPuzzle() > 0 && wrongCount < 6">neigh: {{ wrong.join(" ") }}</p>
      <h2 v-if="countPuzzle() > 0 && wrongCount === 6">{{ wordOfDay }}</h2>
      <p v-if="(countPuzzle() === 0 && wrongCount < 6) || (countPuzzle() > 0 && wrongCount == 6)">{{ definition.toLowerCase() }}</p>
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
      wordOfDay: "",
      definition: "",
      puzzle: [],
      wrongCount: 0,
      wrong: ["🐴", "🐴", "🐴", "🐴", "🐴", "🐴"],
      indices: [],
      score: 0,
    };
  },
  created: function () {
    const date = new Date(Date.now());
    axios
      .get(
        `https://api.wordnik.com/v4/words.json/wordOfTheDay?date=${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}&api_key=${process.env.VUE_APP_WORDNIK_API_KEY}`
      )
      .then((response) => {
        console.log(date);
        console.log(date.getFullYear());
        console.log(date.getMonth());
        console.log(date.getDate());
        this.wordOfDay = response.data.word;
        this.definition = response.data.definitions[0].text;
        this.puzzle = Array(response.data.word.length).fill("_");
      });
  },
  mounted: function () {
    window.addEventListener("keydown", this.guessLetter);
  },
  methods: {
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
      if (e.which >= 65 && e.which <= 90) {
        if (this.wordOfDay.includes(e.key)) {
          Promise.resolve(this.getIndices(e.key)).then(this.addLetter(e.key));
          this.score += this.indices.length;
          if (this.countPuzzle() === 0 && this.wrongCount < 6) {
            this.winGame();
          }
        } else if (!this.wrong.includes(e.key)) {
          this.tallyWrong(e.key);
        }
      }
    },
    getIndices: function (key) {
      this.indices = [];
      for (let i = 0; i < this.wordOfDay.length; i++) {
        if (this.wordOfDay[i] === key) {
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
      this.wrong.splice(this.wrongCount - 1, 1, key);
    },
    winGame: function () {
      // this.score += this.wordOfDay.length;
    },
  },
};
</script>