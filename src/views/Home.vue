<template>
  <div class="home">
    <h1 class="page-title">sajak horseman</h1>
    <h2>{{ wordOfDay }}</h2>
    <p>{{ definition.toLowerCase() }}</p>
    <h1 class="puzzle">{{ puzzle.join("") }}</h1>
    <p>wrong guesses: {{ wrong.join(", ") }}</p>
    <p>wrong guesses remaining: {{ 6 - wrong.length }}</p>
  </div>
</template>

<style>
.puzzle {
  font-family: "basier_square_monomedium";
  letter-spacing: 0.75em;
}
.page-title {
  font-family: "archiabold";
  font-size: 3em;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      wordOfDay: "",
      definition: "",
      puzzle: [],
      wrong: [],
      indices: [],
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
    guessLetter: function (e) {
      if (e.which >= 65 && e.which <= 90) {
        if (this.wordOfDay.includes(e.key)) {
          Promise.resolve(this.getIndices(e.key)).then(this.addLetter(e.key));
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
      this.wrong.push(key);
    },
  },
};
</script>