<template>
  <span>
    <button class="keyboard-key">{{ keyboardKey.name }}</button>
  </span>
</template>

<script>
export default {
  props: ["keyboardKey"],
  methods: {
    // openAbout: function () {
    //   this.$emit("openAbout");
    // },
    // openScores: function () {
    //   this.$emit("openScores");
    // },
  },
};
</script>

<style scoped>
/* a {
  text-decoration: none !important;
} */

.keyboard-key {
  display: inline-block;
  margin-top: 0.6em;
  margin-right: 0.3em;
  font-family: "archiamedium";
  text-transform: lowercase;
  font-size: 1em;
  text-align: center;
  width: 7.5vw;
  height: 35px;
  border: 1px solid #646464;
  border-radius: 4px;
  background-color: rgb(238, 238, 238);
  color: #464646;
}
.keyboard-key-pressed {
  background-color: rgba(222, 234, 238, 0.3);
  border: 4px solid rgb(255, 255, 255);
  cursor: pointer;
}

@media (min-width: 300px) {
  /* button.btn-menu {
    font-size: 1.5em;
  } */
}

@media (min-width: 350px) {
  /* button.btn-menu {
    font-size: 1.7em;
  } */
}
</style>