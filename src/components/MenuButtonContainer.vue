<template>
  <div class="menu-btn-container text-center">
    <MenuButton
      v-for="button in buttons"
      :key="button.id"
      :button="button"
      v-on:openAbout="openAbout" />
  </div>
</template>

<script>
import MenuButton from "./../components/MenuButton";
// import MenuScores from "./../components/MenuScores";
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
          name: "wtf",
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
    // MenuScores,
  },
  methods: {
    openAbout: function () {
      this.$emit("openAbout");
    },
  },
};
</script>

<style>
.menu-btn-container {
  position: absolute;
  bottom: 14%;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  z-index: 4;
  width: 220px;
}
</style>