<template>
  <div class="img-container disable-dbl-tap-zoom">
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
      :blankCount="blankCount"
      :wrongCount="wrongCount"
      :wrongGuesses="wrongGuesses" />
    <GameScore
      :score="score" />
    <GameAnswer
      :blankCount="blankCount"
      :wrongCount="wrongCount"
      :currentWord="currentWord" />
    <GameBrands
      :brands="brands" />
    <GameTimer
      :blankCount="blankCount"
      :wrongCount="wrongCount"
      :currentWord="currentWord"
      @outOfTime="outOfTime" />
    <NextButton
      :blankCount="blankCount"
      :brandCount="brandCount"
      :currentWord="currentWord"
      :newScoreVisible="newScoreVisible"
      :wrongCount="wrongCount"
      v-if="!isMobile"
      @clearBrands="clearBrands"
      @clearScore="clearScore"
      @setScore="setScore"
      @getNewWord="getNewWord" />
  </div>
</template>

<script>
import GameNeighs from "./../components/GameNeighs";
import GameScore from "./../components/GameScore";
import GameAnswer from "./../components/GameAnswer";
import GameBrands from "./../components/GameBrands";
import GameTimer from "./../components/GameTimer";
import NextButton from "./../components/NextButton";
export default {
  components: {
    GameNeighs,
    GameScore,
    GameAnswer,
    GameBrands,
    GameTimer,
    NextButton,
  },
  props: [
    "blankCount",
    "brands",
    "brandCount",
    "currentWord",
    "isMobile",
    "newScoreVisible",
    "score",
    "wrongCount",
    "wrongGuesses",
  ],
  methods: {
    clearBrands: function () {
      this.$emit("clearBrands");
    },
    clearScore: function () {
      this.$emit("clearScore");
    },
    getNewWord: function () {
      this.$emit("getNewWord");
    },
    outOfTime: function () {
      this.$emit("outOfTime");
    },
    setScore: function () {
      console.log("emit from image container component");
      this.$emit("setScore");
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