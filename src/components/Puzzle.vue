<template>
  <div>
    <h1 class="puzzle" v-if="blankCount > 0 && wrongCount < 6">{{ puzzle.join("") }}</h1>
    <h1 class="puzzle win" v-if="blankCount === 0 && wrongCount < 6">{{ puzzle.join("") }}</h1>
    <h1 class="puzzle loss" v-if="blankCount > 0 && wrongCount == 6">{{ puzzle.join("") }}</h1>
  </div>
</template>

<script>
export default {
  props: ["blankCount", "wrongCount", "puzzle"],
  methods: {},
};
</script>

<style>
.puzzle {
  font-family: "basier_square_monomedium";
  letter-spacing: 0.6em;
}

h1.puzzle {
  font-size: 1.4em;
}

.win {
  color: rgb(78, 117, 78);
}
.loss {
  color: #9c4444;
}

@media (min-width: 768px) {
  .puzzle {
    letter-spacing: 0.75em;
  }
  h1.puzzle {
    font-size: 2em;
  }
}
</style>