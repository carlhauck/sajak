<template>
  <div class="menu-btn-container text-center">
    <MenuButton
      v-for="button in buttons"
      :key="button.id"
      :button="button"
      @openAbout="openAbout"
      @openScores="openScores" />
  </div>
</template>

<script>
import MenuButton from "./../components/MenuButton";
export default {
  data: function () {
    return {
      buttons: [
        {
          id: 1,
          name: "play",
          route: "play",
        },
        {
          id: 2,
          name: "wut",
          route: "about",
        },
        {
          id: 3,
          name: "scores",
        },
      ],
    };
  },
  components: {
    MenuButton,
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

<style>
.menu-btn-container {
  position: relative;
  margin: 0.9em auto 0 auto;
  z-index: 4;
  width: 65%;
}
@media (min-width: 300px) {
  .menu-btn-container {
    width: 180px;
  }
}

@media (min-width: 350px) {
  .menu-btn-container {
    width: 220px;
  }
}
</style>