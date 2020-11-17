<template>
  <div>
    <button v-if="currentWord !== '' && blankCount === 0 && wrongCount < 6" v-on:click="getNewWord" class="btn-next-mobile">Next Word</button>
    <button v-if="blankCount > 0 && wrongCount === 6" v-on:click="setScore(); getNewWord();" class="btn-new-mobile">New Game</button>
  </div>
</template>

<script>
export default {
  props: ["blankCount", "wrongCount", "currentWord"],
  methods: {
    setScore: function () {
      this.$emit("setScore");
    },
    getNewWord: function () {
      this.$emit("getNewWord");
    },
  },
};
</script>

<style scoped>
button.btn-next-mobile {
  margin-top: 0.35em;
  margin-left: auto;
  margin-right: auto;
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
  margin-top: 6px;
  margin-left: auto;
  margin-right: auto;
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.05em;
  font-size: 1em;
  height: 45px;
  padding-left: 0.65em;
  padding-right: 0.65em;
  border: 1px solid #777777;
  border-radius: 14px;
  background-color: #929292;
  color: white;
  z-index: 4;
  white-space: nowrap;
}
button.btn-new-mobile:active {
  background-color: #a3a3a3;
}
</style>