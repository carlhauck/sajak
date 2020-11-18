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
    <GameNeighs
      v-bind:blankCount="blankCount"
      v-bind:wrongCount="wrongCount"
      v-bind:wrongGuesses="wrongGuesses" />
    <GameScore
      v-bind:score="score" />
    <GameAnswer
      v-bind:blankCount="blankCount"
      v-bind:wrongCount="wrongCount"
      v-bind:currentWord="currentWord" />
    <GameTimer
      v-bind:blankCount="blankCount"
      v-bind:wrongCount="wrongCount"
      v-bind:currentWord="currentWord"
      v-on:outOfTime="outOfTime" />
    <NextButton
      v-bind:blankCount="blankCount"
      v-bind:wrongCount="wrongCount"
      v-bind:currentWord="currentWord"
      v-bind:newScoreVisible="newScoreVisible"
      v-if="!isMobile"
      v-on:clearScore="clearScore"
      v-on:setScore="setScore"
      v-on:getNewWord="getNewWord" />
  </div>
</template>

<script>
import GameNeighs from "./../components/GameNeighs";
import GameScore from "./../components/GameScore";
import GameAnswer from "./../components/GameAnswer";
import GameTimer from "./../components/GameTimer";
import NextButton from "./../components/NextButton";
export default {
  components: {
    GameNeighs,
    GameScore,
    GameAnswer,
    GameTimer,
    NextButton,
  },
  props: [
    "blankCount",
    "wrongCount",
    "score",
    "wrongGuesses",
    "currentWord",
    "isMobile",
    "newScoreVisible",
  ],
  methods: {
    clearScore: function () {
      this.$emit("clearScore");
    },
    setScore: function () {
      console.log("emit from image container component");
      this.$emit("setScore");
    },
    getNewWord: function () {
      this.$emit("getNewWord");
    },
    outOfTime: function () {
      this.$emit("outOfTime");
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
  display: block;
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
    height: 76vh;
    width: 105.89vh;
  }
  img {
    height: 100%;
    width: 100%;
  }
}
</style>