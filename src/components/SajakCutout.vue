<template>
  <img id="sajak" src="./../assets/sajak-menu-cutout.png" alt="sajak">
</template>

<style scoped>
#sajak {
  position: absolute;
  height: 70vh;
  z-index: 2;
  animation: linear infinite alternate;
  -webkit-animation: linear infinite alternate;
  animation-name: run;
  -webkit-animation-name: run;
  animation-duration: 3s;
  -webkit-animation-duration: 3s;
  animation-iteration-count: 1;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

@keyframes run {
  0% {
    left: 100%;
    transform: translateX(-50%);
    top: 80%;
    transform: translateY(-50%);
  }
  100% {
    left: 60%;
    transform: translateX(-50%);
    top: 80%;
    transform: translateY(-50%);
  }
}

@-webkit-keyframes run {
  0% {
    right: 0;
  }
  50% {
    right: 100%;
  }
  100% {
    right: 0;
  }
}
</style>