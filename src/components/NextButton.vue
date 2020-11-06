<template>
  <div>
    <button v-if="currentWord !== '' && blankCount === 0 && wrongCount < 6" v-on:click="getNewWord" class="btn-next">Next Word</button>
    <button v-if="blankCount > 0 && wrongCount === 6" v-on:click="getNewWord" class="btn-new">New Game</button>
  </div>
</template>

<script>
export default {
  props: ["blankCount", "wrongCount", "currentWord"],
  mounted: function () {
    window.addEventListener("keydown", this.onSpaceKeydown);
  },
  methods: {
    getNewWord: function () {
      this.$emit("getNewWord");
    },
    onSpaceKeydown: function (e) {
      if (
        (e.which === 32 &&
          this.currentWord !== "" &&
          this.blankCount === 0 &&
          this.wrongCount < 6) ||
        (this.blankCount > 0 && this.wrongCount === 6)
      ) {
        event.preventDefault();
        this.$emit("getNewWord");
      }
    },
  },
};
</script>

<style>
button.btn-next {
  position: absolute;
  left: 1.2rem;
  bottom: 1.1rem;
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.05em;
  font-size: 1.25em;
  padding: 0.65em 0.8em;
  border: 3px solid #6e8548;
  border-radius: 18px;
  background-color: rgba(241, 245, 247, 0.8);
  color: #7d8d62;
  z-index: 4;
  white-space: nowrap;
}
button.btn-next:hover {
  background-color: rgba(241, 245, 247, 0.87);
  border: 3px solid #6e8548;
  cursor: pointer;
}

button.btn-new {
  position: absolute;
  left: 1.2rem;
  bottom: 1.1rem;
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.05em;
  font-size: 1.25em;
  padding: 0.65em 0.8em;
  border: 3px solid #777777;
  border-radius: 18px;
  background-color: rgba(241, 245, 247, 0.8);
  color: #777777;
  z-index: 4;
  white-space: nowrap;
}
button.btn-new:hover {
  background-color: rgba(241, 245, 247, 0.87);
  border: 3px solid #777777;
  cursor: pointer;
}
</style>