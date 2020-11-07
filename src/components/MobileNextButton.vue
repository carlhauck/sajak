<template>
  <div>
    <button v-if="currentWord !== '' && blankCount === 0 && wrongCount < 6" v-on:click="getNewWord" class="btn-next-mobile">Next Word</button>
    <button v-if="blankCount > 0 && wrongCount === 6" v-on:click="getNewWord" class="btn-new-mobile">New Game</button>
  </div>
</template>

<script>
export default {
  props: ["blankCount", "wrongCount", "currentWord"],
  methods: {
    getNewWord: function () {
      this.$emit("getNewWord");
    },
  },
};
</script>

<style scoped>
button.btn-next-mobile {
  margin: 0 auto;
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.05em;
  font-size: 1.1em;
  height: 45px;
  padding-left: 0.65em;
  padding-right: 0.65em;
  border: 2px solid #6e8548;
  border-radius: 14px;
  background-color: rgba(241, 245, 247, 0.8);
  color: #7d8d62;
  z-index: 4;
  white-space: nowrap;
}
button.btn-next-mobile:hover {
  background-color: rgba(241, 245, 247, 0.87);
  border: 3px solid #6e8548;
  cursor: pointer;
}
/* Add active for button press feedback on phones? */
button.btn-new-mobile {
  margin: 0 auto;
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.05em;
  font-size: 1.1em;
  height: 45px;
  padding-left: 0.65em;
  padding-right: 0.65em;
  border: 2px solid #777777;
  border-radius: 14px;
  background-color: rgba(241, 245, 247, 0.8);
  color: #777777;
  z-index: 4;
  white-space: nowrap;
}
button.btn-new-mobile:hover {
  background-color: rgba(241, 245, 247, 0.87);
  border: 3px solid #777777;
  cursor: pointer;
}
</style>