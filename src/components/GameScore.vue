<template>
  <div class="top-right">
    <h4 class="score">score: {{ score }}</h4>
  </div>
</template>

<script>
export default {
  props: ["score"],
};
</script>

<style scoped>
.top-right {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  text-align: right;
}

h4 {
  margin: 0;
}

.score {
  font-family: "archiabold";
  font-size: 1.2em;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #ffffff;
  color: #99814c;
}

@media (min-width: 350px) {
  .score {
    font-size: 1.5em;
  }
}
</style>