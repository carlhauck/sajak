<template>
  <div class="sajak-container">
    <img id="sajak" src="./../assets/sajak-menu-cutout.png" alt="sajak">
  </div>
</template>

<style scoped>
.sajak-container {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

#sajak {
  position: absolute;
  height: 70vh;
  /* max-height: 0; */
  overflow: hidden;
  left: 100%;
  transform: translateX(-50%);
  top: 80%;
  transform: translateY(-50%);
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
    max-height: 100vh;
    overflow: hidden;
    left: 100%;
    transform: translateX(-50%);
    top: 80%;
    transform: translateY(-50%);
  }
  100% {
    max-height: 100vh;
    overflow: hidden;
    left: 60%;
    transform: translateX(-50%);
    top: 80%;
    transform: translateY(-50%);
  }
}
</style>