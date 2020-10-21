<template>
  <div class="home">
    <h1>{{ wordOfDay }}</h1>
    <p>{{ definition }}</p>
    <p>{{ puzzle }}</p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      wordOfDay: null,
      definition: null,
      puzzle: null,
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
        this.puzzle = "_ ".repeat(response.data.word.length);
      });
  },
  methods: {},
};
</script>