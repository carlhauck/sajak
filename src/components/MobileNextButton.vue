<template>
  <div>
    <button
      v-if="currentWord !== '' && blankCount === 0 && wrongCount < 6"
      @click="getNewWord"
      class="btn-next-mobile">
      Next Word
    </button>
    <button
      v-if="blankCount > 0 && wrongCount === 6"
      @click="clearScore(); setScore(); getNewWord();"
      class="btn-new-mobile">
      New Game
    </button>
  </div>
</template>

<script>
export default {
  props: ["blankCount", "wrongCount", "currentWord"],
  methods: {
    clearScore: function () {
      this.$emit("clearScore");
    },
    getNewWord: function () {
      this.$emit("getNewWord");
    },
    setScore: function () {
      this.$emit("setScore");
    },
  },
};
</script>

<style scoped>
button.btn-next-mobile {
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.03em;
  font-size: 1em;
  height: 45px;
  padding-left: 0.65em;
  padding-right: 0.65em;
  border: 2px solid #6e8548;
  border-radius: 14px;
  background-color: #95aa72;
  color: white;
  z-index: 4;
  white-space: nowrap;
}
button.btn-next-mobile:active {
  background-color: #a9bd87;
}
/* Add active for button press feedback on phones? */
button.btn-new-mobile {
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.05em;
  font-size: 1em;
  height: 45px;
  padding-left: 0.65em;
  padding-right: 0.65em;
  border: 2px solid #777777;
  border-radius: 14px;
  background-color: #9c9c9c;
  color: white;
  z-index: 4;
  white-space: nowrap;
}
button.btn-new-mobile:active {
  background-color: #a3a3a3;
}
</style>