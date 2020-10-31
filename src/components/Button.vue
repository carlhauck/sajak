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