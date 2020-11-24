<template>
  <div class="title-container text-center">
    <h1 class="menu-title">sajak horseman</h1>
    <MenuButtonContainer
      @openAbout="openAbout"
      @openScores="openScores"
      :highScores="highScores" />
  </div>
</template>

<script>
import MenuButtonContainer from "./../components/MenuButtonContainer";
export default {
  props: ["highScores"],
  components: {
    MenuButtonContainer,
  },
  methods: {
    openAbout: function () {
      this.$emit("openAbout");
    },
    openScores: function () {
      this.$emit("openScores");
    },
  },
};
</script>

<style scoped>
.title-container {
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: top;
  resize: vertical;
  overflow: auto;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  top: 14vh;
  top: calc(var(--vh, 1vh) * 14);
}

.menu-title {
  font-family: "archiabold";
  font-size: 3em;
  color: white;
  z-index: 1;
}

@media (min-width: 350px) {
  .title-container {
    top: 16vh;
    top: calc(var(--vh, 1vh) * 16);
  }
  .menu-title {
    font-size: 4em;
  }
}

@media (min-width: 576px) {
  .title-container {
    top: 13vh;
    top: calc(var(--vh, 1vh) * 13);
  }
  .menu-title {
    font-size: 6em;
  }
}

@media (min-width: 768px) {
  .title-container {
    top: 1vh;
    top: calc(var(--vh, 1vh) * 1);
  }
  .menu-title {
    font-size: 6.5em;
    margin-top: 0.8em;
  }
}

@media (min-width: 992px) {
  .title-container {
    top: 16vh;
    top: calc(var(--vh, 1vh) * 16);
  }
  .menu-title {
    font-size: 7em;
    margin-bottom: -0.05em;
  }
}

@media (min-width: 1200px) {
  .menu-title {
    font-size: 8em;
    margin-top: 0.65em;
    margin-bottom: -0.1em;
  }
}
</style>