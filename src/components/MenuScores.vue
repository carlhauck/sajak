<template>
  <div class="menu-scores">
    <div class="flex-grid">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <!-- <h2>high scores</h2>
    <p>carl 412</p>
    <p>doug42 401</p>
    <p>matt 306</p>
    <p>doug42 299</p>
    <p>matt 105</p> -->
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
.flex-grid {
  display: flex;
}
.col {
  flex: 1;
}

.menu-scores {
  display: block;
  font-family: "archiasemibold";
  text-transform: lowercase;
  line-height: 1em;
  width: 100%;
  border: 4px solid rgba(255, 255, 255, 0.85);
  border-radius: 18px;
  background-color: rgba(222, 234, 238, 0.15);
  color: white;
}

h2 {
  font-size: 2em;
  margin-block-start: 0.7em;
  margin-block-end: 0.65em;
}

p {
  font-size: 1em;
  margin-block-start: 0.8em;
  margin-block-end: 0.8em;
}
</style>