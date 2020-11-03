<template>
  <div>
    <button v-if="blankCount === 0 && wrongCount < 6" v-on:click="getNewWord" class="btn-next">Next Word</button>
    <button v-if="blankCount > 0 && wrongCount == 6" v-on:click="getNewWord" class="btn-next">New Game</button>
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
/* button {
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
} */

button.btn-next {
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 27%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.05em;
  font-size: 1.25em;
  padding: 0.7em 1em;
  border: 3px solid #7d8d62;
  border-radius: 18px;
  background-color: rgba(241, 245, 247, 0.7);
  color: #7d8d62;
  z-index: 4;
  white-space: nowrap;
}
button.btn-next:hover {
  background-color: rgba(241, 245, 247, 0.75);
  border: 3px solid #7d8d62;
  cursor: pointer;
}
</style>