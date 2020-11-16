<template>
  <div>
    <a v-if="button.name === 'play'" :href="`/${button.route}`">
      <button class="btn-menu">{{ button.name }}</button>
    </a>
    <button v-if="button.name === 'wut'" @click="openAbout()" class="btn-menu">{{ button.name }}</button>
    <button v-if="button.name === 'scores'" @click="openScores()" class="btn-menu">{{ button.name }}</button>
  </div>
</template>

<script>
export default {
  props: ["button"],
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
a {
  text-decoration: none !important;
}

button.btn-menu {
  display: block;
  margin-bottom: 0.6em;
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.05em;
  font-size: 1.5em;
  width: 100%;
  height: 65px;
  border: 4px solid rgba(255, 255, 255, 0.85);
  border-radius: 18px;
  background-color: rgba(222, 234, 238, 0.15);
  color: white;
}
button.btn-menu:hover {
  background-color: rgba(222, 234, 238, 0.3);
  border: 4px solid rgb(255, 255, 255);
  cursor: pointer;
}

@media (min-width: 300px) {
  button.btn-menu {
    font-size: 1.5em;
  }
}

@media (min-width: 350px) {
  button.btn-menu {
    font-size: 1.7em;
  }
}
</style>