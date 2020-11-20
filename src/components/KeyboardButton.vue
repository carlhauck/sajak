<template>
  <span>
    <button @click="guessLetterMobile(); isPressed = true" v-bind:class="{ 'keyboard-key': !isPressed,'keyboard-key-pressed': isPressed }">{{ keyboardKey.name }}</button>
  </span>
</template>

<script>
export default {
  props: ["keyboardKey", "currentWord"],
  data: function () {
    return {
      isPressed: false,
    };
  },
  watch: {
    currentWord: function () {
      this.isPressed = false;
    },
  },
  methods: {
    guessLetterMobile: function () {
      this.$emit("guessLetterMobile", this.keyboardKey.name);
    },
  },
};
</script>

<style scoped>
.keyboard-key {
  display: inline-block;
  padding: 0;
  margin-top: 0.6em;
  margin-right: 1.2vw;
  margin-right: calc(var(--vw, 1vw) * 1.2);
  font-family: "archiamedium";
  text-transform: lowercase;
  font-size: 1em;
  text-align: center;
  /* width: 7.9vw;
  width: calc(var(--vw, 1vw) * 7.9); */
  width: 8.2%;
  height: 36px;
  border: 1px solid #9c9c9c;
  border-radius: 4px;
  background-color: rgb(236, 236, 236);
  color: #464646;
}
.keyboard-key-pressed {
  display: inline-block;
  padding: 0;
  margin-top: 0.6em;
  margin-right: 1.2vw;
  margin-right: calc(var(--vw, 1vw) * 1.2);font-family: "archiamedium";
  text-transform: lowercase;
  font-size: 1em;
  text-align: center;
  /* width: 7.9vw;
  width: calc(var(--vw, 1vw) * 7.9); */
  width: 8.2%;
  height: 36px;
  border-radius: 4px;
  color: #464646;
  z-index: -1;
  background-color: rgb(185, 185, 185);
  border: 1px solid #9c9c9c;
}

@media (min-width: 300px) {
  /* button.btn-menu {
    font-size: 1.5em;
  } */
}

@media (min-width: 350px) {
  .keyboard-key {
    height: 42px;
  }
  .keyboard-key-pressed {
    height: 44px;
  }
}
</style>