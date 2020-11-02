<template>
  <div class="menu">
    <!-- <SajakCutout /> -->
    <MenuPainting />
    <MenuTitle />
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import MenuPainting from "./../components/MenuPainting";
// import SajakCutout from "./../components/SajakCutout";
import MenuTitle from "./../components/MenuTitle";
// import ImageContainer from "./../components/ImageContainer";
// import Puzzle from "./../components/Puzzle";
// import Definition from "./../components/Definition";
// import Button from "./../components/Button";
export default {
  components: {
    MenuPainting,
    // SajakCutout,
    MenuTitle,
  },
  data: function () {
    return {};
  },
  created: function () {
    // this.getNewWord();
  },
  mounted: function () {
    // window.addEventListener("keydown", this.guessLetter);
  },
  methods: {},
};
</script>

<style>
</style>