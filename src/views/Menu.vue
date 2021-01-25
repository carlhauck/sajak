<template>
  <div class="menu">
    <MenuBackground />
    <MenuText
      @openAbout="toggleAbout"
      @openScores="toggleScores"
      :highScores="highScores" />
    <AboutModal
      v-show="aboutVisible"
      @closeAbout="toggleAbout" />
    <ScoresModal
      v-show="scoresVisible"
      :highScores="highScores"
      @closeScores="toggleScores" />
  </div>
</template>

<script>
import axios from "axios";
import MenuBackground from "./../components/MenuBackground";
import MenuText from "./../components/MenuText";
import AboutModal from "./../components/AboutModal";
import ScoresModal from "./../components/ScoresModal";
export default {
  data: function () {
    return {
      aboutVisible: false,
      scoresVisible: false,
      highScores: [],
    };
  },
  components: {
    MenuBackground,
    MenuText,
    AboutModal,
    ScoresModal,
  },
  created: function () {
    axios.get("/api/high_scores", { timeout: 4000 }).then((response) => {
      this.highScores = response.data;
      console.log(response.data);
    });
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