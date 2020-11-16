<template>
  <div class="menu-btn-container text-center">
    <MenuButton
      v-for="button in buttons"
      :key="button.id"
      :button="button"
      v-on:openAbout="openAbout"
      v-on:openScores="openScores" />
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
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  z-index: 4;
  width: 65%;
}
@media (min-width: 300px) {
  .menu-btn-container {
    width: 180px;
    bottom: 17%;
  }
}

@media (min-width: 350px) {
  .menu-btn-container {
    width: 220px;
    bottom: 16%;
  }
}

@media (min-width: 400px) {
  .menu-btn-container {
    width: 220px;
    bottom: 19%;
  }
}

@media (min-width: 576px) {
  .menu-btn-container {
    bottom: 14%;
  }
}
</style>