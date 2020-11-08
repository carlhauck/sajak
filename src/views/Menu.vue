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
  beforeCreate: function () {
    document.body.className = "menu";
  },
  methods: {},
};
</script>

<style scoped>
</style>