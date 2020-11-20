<template>
  <div class="keyboard-container text-center">
    <div class="key-row">
      <KeyboardButton
        v-for="keyboardKey in topRowKeys"
        :key="keyboardKey.id"
        :keyboardKey="keyboardKey"
        :currentWord="currentWord"
        v-on:guessLetterMobile="guessLetterMobile" />
    </div>
    <div class="key-row">
      <KeyboardButton
        v-for="keyboardKey in midRowKeys"
        :key="keyboardKey.id"
        :keyboardKey="keyboardKey"
        :currentWord="currentWord"
        v-on:guessLetterMobile="guessLetterMobile" />
    </div>
    <div class="key-row">
      <KeyboardButton
        v-for="keyboardKey in bottomRowKeys"
        :key="keyboardKey.id"
        :keyboardKey="keyboardKey"
        :currentWord="currentWord"
        v-on:guessLetterMobile="guessLetterMobile" />
    </div>
  </div>
</template>

<script>
import KeyboardButton from "./../components/KeyboardButton";
export default {
  props: ["currentWord"],
  components: {
    KeyboardButton,
  },
  data: function () {
    return {
      topRowKeys: [
        {
          id: 1,
          name: "q",
        },
        {
          id: 2,
          name: "w",
        },
        {
          id: 3,
          name: "e",
        },
        {
          id: 4,
          name: "r",
        },
        {
          id: 5,
          name: "t",
        },
        {
          id: 6,
          name: "y",
        },
        {
          id: 7,
          name: "u",
        },
        {
          id: 8,
          name: "i",
        },
        {
          id: 9,
          name: "o",
        },
        {
          id: 10,
          name: "p",
        },
      ],
      midRowKeys: [
        {
          id: 1,
          name: "a",
        },
        {
          id: 2,
          name: "s",
        },
        {
          id: 3,
          name: "d",
        },
        {
          id: 4,
          name: "f",
        },
        {
          id: 5,
          name: "g",
        },
        {
          id: 6,
          name: "h",
        },
        {
          id: 7,
          name: "j",
        },
        {
          id: 8,
          name: "k",
        },
        {
          id: 9,
          name: "l",
        },
      ],
      bottomRowKeys: [
        {
          id: 1,
          name: "z",
        },
        {
          id: 2,
          name: "x",
        },
        {
          id: 3,
          name: "c",
        },
        {
          id: 4,
          name: "v",
        },
        {
          id: 5,
          name: "b",
        },
        {
          id: 6,
          name: "n",
        },
        {
          id: 7,
          name: "m",
        },
      ],
    };
  },
  methods: {
    guessLetterMobile: function (ltr) {
      console.log(ltr);
      this.$emit("guessLetterMobile", ltr);
    },
  },
};
</script>

<style scoped>
.keyboard-container {
  justify-content: center;
  align-items: center;
  /* width: calc(100vw - (100vw - 100%)); */
  width: 100vw;
  width: calc(var(--vw, 1vw) * 100);
}
.key-row {
  display: inline-block;
  width: 100vw;
  width: calc(var(--vw, 1vw) * 100);
  /* width: calc(100vw - (100vw - 100%)); */
  justify-content: center;
  margin-right: -1.4vw;
  margin-right: calc(var(--vw, 1vw) * -1.4);
}
</style>