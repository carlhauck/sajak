<template>
  <div class="home">
    <div class="container text-center">
      <Header />
      <ImageContainer
        v-bind:blankCount="blankCount"
        v-bind:wrongCount="wrongCount"
        v-bind:score="score"
        v-bind:wrong="wrong"
        v-bind:currentWord="currentWord" />
      <Puzzle
        v-bind:blankCount="blankCount"
        v-bind:wrongCount="wrongCount"
        v-bind:puzzle="puzzle" />
      <Definition
        v-bind:definition="definition" />
      <Button
        v-bind:blankCount="blankCount"
        v-bind:wrongCount="wrongCount"
        v-on:getNewWord="getNewWord" />
      <audio class="whinny-cooper" src="./../assets/horse-whinny-3.mp3"></audio>
      <audio class="last-straw" src="./../assets/horse-neigh-3.mp3"></audio>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Header from "./../components/Header";
import ImageContainer from "./../components/ImageContainer";
import Puzzle from "./../components/Puzzle";
import Definition from "./../components/Definition";
import Button from "./../components/Button";
export default {
  components: {
    Header,
    ImageContainer,
    Puzzle,
    Definition,
    Button,
  },
  data: function () {
    return {
      currentWord: "",
      definition: "",
      puzzle: [],
      wrong: [],
      indices: [],
      score: 0,
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
  created: function () {
    this.getNewWord();
  },
  mounted: function () {
    window.addEventListener("keydown", this.guessLetter);
  },
  computed: {
    blankCount: function () {
      return this.puzzle.reduce((n, x) => n + (x === "_"), 0);
    },
    wrongCount: function () {
      return this.wrong.length;
    },
  },
  methods: {
    getNewWord: function () {
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
              this.definition = response.data[0].text
                .slice(0, periodIndex)
                .replace(/(<([^>]+)>)/gi, "");
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
    guessLetter: function (e) {
      if ((e.which >= 65 && e.which <= 90) || e.which === 189) {
        // a-z + '-'
        if (this.currentWord.includes(e.key)) {
          if (!this.puzzle.includes(e.key)) {
            Promise.resolve(this.getIndices(e.key)).then(this.addLetter(e.key));
            this.score += this.indices.length * this.scrabblePoints[e.key];
            if (this.blankCount === 0 && this.wrongCount < 6) {
              this.winRound();
            }
          }
        } else if (!this.wrong.includes(e.key)) {
          this.tallyWrong(e.key);
          if (this.blankCount > 0 && this.wrongCount === 6) {
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
      this.wrong.push(key);
      this.playNeigh();
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
    winRound: function () {
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