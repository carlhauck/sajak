<template>
  <p v-if="definition === 'loading new word'" class="definition loading disable-dbl-tap-zoom">{{ definition }}</p>
  <p v-else class="definition disable-dbl-tap-zoom">{{ definition }}</p>
</template>

<script>
export default {
  props: ["definition"],
};
</script>

<style scoped>
p.definition {
  font-size: 0.85em;
  margin-top: 0.25em;
  margin-bottom: 0.65em;
}

.loading {
  color: rgb(153, 124, 108);
  animation: loading ease 2.5s;
  -webkit-animation: loading ease 2.5s;
  -moz-animation: loading ease 2.5s;
  -o-animation: loading ease 2.5s;
  -ms-animation: loading ease 2.5s;
  animation-iteration-count: infinite;
}
@keyframes loading {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes loading {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes loading {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes loading {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-ms-keyframes loading {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (min-width: 350px) {
  p.definition {
    font-size: 0.95em;
    margin-top: 0.35em;
    margin-bottom: 0.7em;
  }
}

@media (min-width: 576px) {
  p.definition {
    font-size: 1em;
    margin-top: 0.7em;
  }
}
</style>