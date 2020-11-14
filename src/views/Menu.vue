<template>
  <div class="menu">
    <MenuPainting />
    <MenuTitle />
    <MenuAbout v-if="aboutModal === true" />
  </div>
</template>

<script>
import axios from "axios";
import MenuPainting from "./../components/MenuPainting";
import MenuTitle from "./../components/MenuTitle";
import MenuAbout from "./../components/MenuAbout";
export default {
  data: function () {
    return {
      aboutModal: false,
    };
  },
  components: {
    MenuPainting,
    MenuTitle,
    MenuAbout,
  },
  beforeCreate: function () {
    document.body.className = "menu";
  },
  methods: {},
};
</script>

<style scoped>
</style>