<template>
  <router-link to="/play">
    <button class="btn-play">play</button>
  </router-link>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
button {
  display: block; /* Why is this adding a purple underline to the text??? */
  text-decoration: none;
}
button.btn-play {
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.05em;
  font-size: 1.8em;
  padding: 0.55em 1.1em;
  border: 4px solid rgba(255, 255, 255, 0.85);
  border-radius: 18px;
  background-color: rgba(222, 234, 238, 0.15);
  color: white;
}
button.btn-play:hover {
  background-color: rgba(222, 234, 238, 0.3);
  border: 4px solid rgb(255, 255, 255);
  cursor: pointer;
}
</style>