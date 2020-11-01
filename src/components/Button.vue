<template>
  <div>
    <button v-if="blankCount === 0 && wrongCount < 6" v-on:click="getNewWord">Next Word</button>
    <button v-if="blankCount > 0 && wrongCount == 6" v-on:click="getNewWord">New Game</button>
  </div>
</template>

<script>
export default {
  props: ["blankCount", "wrongCount"],
  methods: {
    getNewWord: function () {
      this.$emit("getNewWord");
    },
  },
};
</script>

<style>
button {
  font-family: "archiaregular";
  font-size: 0.9em;
  padding: 1em;
  border: 1px solid #464646;
  border-radius: 10px;
  background-color: rgb(222, 234, 238);
  color: #464646;
}
button:hover {
  background-color: rgb(208, 243, 255);
}
</style>