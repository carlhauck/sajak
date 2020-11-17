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
  top: 0.5rem;
  right: 0.6rem;
  text-align: right;
}

h4 {
  margin: 0;
}

.score {
  font-family: "archiabold";
  font-size: 1.1em;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #ffffff;
  color: #99814c;
}

@media (min-width: 300px) {
  .score {
    font-size: 1.2em;
  }
  .top-right {
    position: absolute;
    top: 0.6rem;
    right: 0.8rem;
    text-align: right;
  }
}

@media (min-width: 350px) {
  .score {
    font-size: 1.5em;
    -webkit-text-stroke-width: 0.2px;
  }
  .top-right {
    position: absolute;
    top: 1rem;
    right: 1.4rem;
    text-align: right;
  }
}
</style>