<template>
  <div class="menu">
    <MenuPainting
      v-on:openAbout="toggleAbout"
      v-on:openScores="toggleScores" />
    <MenuTitle />
    <AboutModal
      v-show="aboutVisible"
      @closeAbout="toggleAbout" />
    <ScoresModal
      v-show="scoresVisible"
      @closeScores="toggleScores" />
  </div>
</template>

<script>
import axios from "axios";
import MenuPainting from "./../components/MenuPainting";
import MenuTitle from "./../components/MenuTitle";
import AboutModal from "./../components/AboutModal";
import ScoresModal from "./../components/ScoresModal";
export default {
  data: function () {
    return {
      aboutVisible: false,
      scoresVisible: false,
    };
  },
  components: {
    MenuPainting,
    MenuTitle,
    AboutModal,
    ScoresModal,
  },
  beforeCreate: function () {
    document.body.className = "menu";
  },
  mounted: function () {
    this.$ga.page("/");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  },
  methods: {
    toggleAbout: function () {
      this.aboutVisible = !this.aboutVisible;
    },
    toggleScores: function () {
      this.scoresVisible = !this.scoresVisible;
    },
  },
};
</script>

<style scoped>
</style>