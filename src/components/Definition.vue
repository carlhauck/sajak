<template>
  <p v-if="definition === 'loading new word'" class="definition loading">{{ definition }}</p>
  <p v-else class="definition">{{ definition }}</p>
</template>

<script>
export default {
  props: ["definition"],
  methods: {},
};
</script>

<style>
.definition {
  margin-top: 1.4em;
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
</style>