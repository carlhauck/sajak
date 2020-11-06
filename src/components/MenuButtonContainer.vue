<template>
  <div class="menu-btn-container text-center">
    <MenuButton />
    <!-- <MenuButton /> -->
    <!-- <MenuButton /> -->
  </div>
</template>

<script>
import MenuButton from "./../components/MenuButton";
export default {
  components: {
    MenuButton,
  },
  methods: {},
};
</script>

<style>
.menu-btn-container {
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  z-index: 4;
}
</style>