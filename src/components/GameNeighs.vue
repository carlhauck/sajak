<template>
  <div class="top-left">
    <h4 class="neigh" v-if="blankCount > 0 && wrongCount < 6"> {{ wrongGuesses.join(" ") }} </h4>
  </div>
</template>

<script>
export default {
  props: ["blankCount", "wrongCount", "wrongGuesses"],
};
</script>

<style scoped>
.top-left {
  position: absolute;
  top: 0.5rem;
  left: 0.6rem;
  text-align: left;
}

h4 {
  margin: 0;
}

.neigh {
  font-family: "archiabold";
  font-size: 1.1em;
  stroke-width: 0.2px;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #ffffff;
  color: #775343;
  letter-spacing: 0.15rem;
}

@media (min-width: 300px) {
  .neigh {
    font-size: 1.2em;
  }
  .top-left {
    position: absolute;
    top: 0.6rem;
    left: 0.8rem;
    text-align: left;
  }
}

@media (min-width: 350px) {
  .neigh {
    font-size: 1.5em;
  }
  .top-left {
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    text-align: left;
  }
}
</style>