<template>
  <div class="menu">
    <MenuPainting
      v-on:openAbout="toggleAbout" />
    <MenuTitle />
    <AboutModal
      v-show="aboutVisible"
      @close="toggleAbout" />
  </div>
</template>

<script>
import axios from "axios";
import MenuPainting from "./../components/MenuPainting";
import MenuTitle from "./../components/MenuTitle";
import AboutModal from "./../components/AboutModal";
export default {
  data: function () {
    return {
      aboutVisible: false,
    };
  },
  components: {
    MenuPainting,
    MenuTitle,
    AboutModal,
  },
  beforeCreate: function () {
    document.body.className = "menu";
  },
  methods: {
    toggleAbout: function () {
      console.log(this.aboutVisible);
      this.aboutVisible = !this.aboutVisible;
      console.log(this.aboutVisible);
    },
  },
};
</script>

<style scoped>
</style>