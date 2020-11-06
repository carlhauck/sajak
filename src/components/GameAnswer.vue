<template>
  <div class="bottom">
    <h2 class="answer" v-if="blankCount > 0 && wrongCount === 6">{{ currentWord }}</h2>
  </div>
</template>

<script>
export default {
  props: ["blankCount", "wrongCount", "currentWord"],
};
</script>

<style scoped>
.bottom {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.answer {
  font-family: "basier_square_monobold_italic";
  font-size: 3.3em;
  letter-spacing: 0.12em;
  color: #ffffff;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #5f5f5f;
}

@media (min-width: 1200px) {
  .answer {
    font-size: 4em;
    -webkit-text-stroke-width: 1.5px;
  }
}
</style>