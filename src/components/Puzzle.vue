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
  margin-right: -0.6em;
}

h1.puzzle {
  font-size: 1.25em;
  margin-top: 0.75em;
  margin-bottom: 0.6em;
}

.win {
  color: #6e8548;
}
.loss {
  color: #9c4444;
}

@media (min-width: 300px) {
  h1.puzzle {
    font-size: 1.35em;
  }
}

@media (min-width: 350px) {
  h1.puzzle {
    font-size: 1.65em;
  }
}

@media (min-width: 768px) {
  .puzzle {
    letter-spacing: 0.75em;
    margin-right: -0.75em;
  }
  h1.puzzle {
    font-size: 2em;
    margin-top: 0.55em;
    margin-bottom: 0.35em;
  }
}
</style>