<template>
  <div class="menu-bg">
    <img id="sajak" src="./../assets/sajak-menu-cutout.png" alt="sajak">
    <MenuButtonContainer />
  </div>
</template>

<script>
import axios from "axios";
import MenuButtonContainer from "./../components/MenuButtonContainer";
export default {
  components: {
    MenuButtonContainer,
  },
};
</script>

<style scoped>
.menu-bg {
  background: url("./../assets/newburyport-meadows-cropped.jpg") no-repeat
    center center;
  margin-left: -0.47em;
  margin-right: -0.47em;
  margin-top: -0.47em;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

#sajak {
  position: absolute;
  height: 70vh;
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
  animation-duration: 2.25s;
  -webkit-animation-duration: 2.25s;
  animation-iteration-count: 1;
  animation-delay: 1.5s;
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
    left: 35%;
    transform: translateX(-50%);
    top: 80%;
    transform: translateY(-50%);
  }
}

@-webkit-keyframes run {
  0% {
    left: 100%;
    transform: translateX(-50%);
    top: 80%;
    transform: translateY(-50%);
  }
  100% {
    left: 35%;
    transform: translateX(-50%);
    top: 80%;
    transform: translateY(-50%);
  }
}

@media (min-width: 576px) {
  #sajak {
    position: absolute;
    height: 70vh;
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
      left: 50%;
      transform: translateX(-50%);
      top: 80%;
      transform: translateY(-50%);
    }
  }

  @-webkit-keyframes run {
    0% {
      left: 100%;
      transform: translateX(-50%);
      top: 80%;
      transform: translateY(-50%);
    }
    100% {
      left: 50%;
      transform: translateX(-50%);
      top: 80%;
      transform: translateY(-50%);
    }
  }
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
  #sajak {
    position: absolute;
    height: 70vh;
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
}
</style>