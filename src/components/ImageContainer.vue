<template>
  <div class="img-container">
    <!-- new game -->
    <img v-show="currentWord === ''" src="./../assets/horse-portrait-painting-0.png" alt="sajak horseman">
    <img v-show="blankCount > 0 && wrongCount == 0" src="./../assets/horse-portrait-painting-0.png" alt="sajak horseman">
    <img v-show="blankCount > 0 && wrongCount == 1" src="./../assets/horse-portrait-painting-1.png" alt="sajak horseman">
    <img v-show="blankCount > 0 && wrongCount == 2" src="./../assets/horse-portrait-painting-2.png" alt="sajak horseman">
    <img v-show="blankCount > 0 && wrongCount == 3" src="./../assets/horse-portrait-painting-3.png" alt="sajak horseman">
    <img v-show="blankCount > 0 && wrongCount == 4" src="./../assets/horse-portrait-painting-4.png" alt="sajak horseman">
    <img v-show="blankCount > 0 && wrongCount == 5" src="./../assets/horse-portrait-painting-5.png" alt="sajak horseman">
    <!-- loss -->
    <img v-show="blankCount > 0 && wrongCount == 6" src="./../assets/horse-portrait-painting-fail.png" alt="sajak horseman">
    <!-- win -->
    <img v-show="blankCount == 0 && wrongCount < 6 && currentWord != ''" src="./../assets/horse-portrait-painting-6.png" alt="sajak horseman">
    <div class="top-left">
      <h4 class="neigh-score neigh" v-if="blankCount > 0 && wrongCount < 6"> {{ wrongGuesses.join(" ") }} </h4>
    </div>
    <div class="top-right">
      <h4 class="neigh-score score">score: {{ score }}</h4>
    </div>
    <div class="bottom">
      <h2 class="neigh-score answer" v-if="blankCount > 0 && wrongCount === 6">{{ currentWord }}</h2>
    </div>
    <NextButton
      v-bind:blankCount="blankCount"
      v-bind:wrongCount="wrongCount"
      v-bind:currentWord="currentWord"
      v-on:getNewWord="getNewWord" />
  </div>
</template>

<script>
import NextButton from "./../components/NextButton";
export default {
  components: {
    NextButton,
  },
  props: ["blankCount", "wrongCount", "score", "wrongGuesses", "currentWord"],
  methods: {
    getNewWord: function () {
      this.$emit("getNewWord");
    },
  },
};
</script>

<style scoped>
.img-container {
  width: 100%;
  position: relative;
  margin: 0 auto;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

img {
  width: 100%;
  background-color: #ffffff;
}

.top-left {
  position: absolute;
  top: 1rem;
  left: 1.2rem;
  text-align: left;
}

.top-right {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  text-align: right;
}

.bottom {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.neigh-score {
  font-family: "archiabold";
  font-size: 1.5em;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #ffffff;
}

.neigh {
  color: #775343;
  letter-spacing: 0.15rem;
}

.score {
  color: #99814c;
}

h4 {
  margin: 0;
}

.answer {
  font-family: "basier_square_monobold_italic";
  font-size: 3.3em;
  letter-spacing: 0.12em;
  color: #ffffff;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #5f5f5f;
}

@media (min-width: 576px) {
  .img-container {
    width: 100%;
  }
  img {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .img-container {
    /* width: 700px; */
    height: 78vh;
    width: 108.68vh;
  }
  img {
    /* width: 700px; */
    height: 100%;
    width: 100%;
  }
}

@media (min-width: 1200px) {
  .answer {
    font-size: 4em;
    -webkit-text-stroke-width: 1.5px;
  }
}
</style>