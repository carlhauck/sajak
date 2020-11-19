<template>
  <div>
    <input type="text" maxlength="1" v-if="blankCount > 0 && wrongCount < 6" v-model="mobileInput" v-on:input="guessLetter()" autofocus />
  </div>
</template>

<script>
export default {
  props: ["blankCount", "wrongCount"],
  data: function () {
    return {
      mobileInput: "",
    };
  },
  methods: {
    guessLetter: function () {
      if (this.mobileInput.match(/[a-zA-Z]/)) {
        this.$emit("guessLetterMobile", this.mobileInput);
      }
      setTimeout(this.resetInput, 250);
    },
    resetInput: function () {
      this.mobileInput = "";
    },
  },
};
</script>

<style scoped>
input {
  margin-top: 4px;
  width: 80px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgb(194, 194, 194);
  font-family: "basier_square_monomedium";
  font-size: 1.5em;
  text-align: center;
  color: #99814c;
}
</style>