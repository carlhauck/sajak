<template>
  <div class="menu">
    <!-- <SajakCutout /> -->
    <MenuPainting />
    <MenuTitle />
  </div>
</template>

<script>
import axios from "axios";
import MenuPainting from "./../components/MenuPainting";
import MenuTitle from "./../components/MenuTitle";
export default {
  components: {
    MenuPainting,
    MenuTitle,
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