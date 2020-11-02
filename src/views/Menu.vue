<template>
  <div class="menu">
    <!-- <SajakCutout /> -->
    <MenuPainting />
    <MenuTitle />
    <MenuButton />
  </div>
</template>

<script>
import axios from "axios";
import MenuPainting from "./../components/MenuPainting";
import MenuTitle from "./../components/MenuTitle";
import MenuButton from "./../components/MenuButton";
export default {
  components: {
    MenuPainting,
    MenuTitle,
    MenuButton,
  },
  data: function () {
    return {};
  },
  created: function () {
    // this.getNewWord();
  },
  mounted: function () {
    window.addEventListener("keydown", this.guessLetter);
  },
  methods: {},
};
</script>

<style scoped>
</style>