<template>
  <div>
    <input type="text" maxlength="1" v-if="blankCount > 0 && wrongCount < 6" v-model="mobileInput" v-on:input="guessLetter()" />
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
      this.$emit("guessLetterMobile", this.mobileInput);
      setTimeout(this.resetInput, 500);
    },
    resetInput: function () {
      this.mobileInput = "";
    },
  },
};
</script>

<style>
input {
  width: 80px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid rgb(194, 194, 194);
  font-family: "basier_square_monomedium";
  font-size: 1.5em;
  text-align: center;
  color: #99814c;
}
</style>