<template>
  <div class="title-container text-center">
    <h1 class="menu-title">sajak horseman</h1>
  </div>
</template>

<style scoped>
.title-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: top;
  height: 100vh;
  resize: vertical;
  overflow: auto;
  width: 100%;
}

.menu-title {
  font-family: "archiabold";
  font-size: 3em;
  color: white;
  z-index: 1;
  margin-top: 15vh;
  margin-top: calc(var(--vh, 1vh) * 15);
}

@media (min-width: 350px) {
  .menu-title {
    font-size: 4em;
    /* margin-top: 2em; */
    margin-top: 16vh;
    margin-top: calc(var(--vh, 1vh) * 16);
  }
}

@media (min-width: 576px) {
  .menu-title {
    font-size: 5.5em;
    margin-top: 1.2em;
  }
}

@media (min-width: 768px) {
  .menu-title {
    font-size: 5.5em;
    margin-top: 2.5em;
  }
}

@media (min-width: 992px) {
  .menu-title {
    font-size: 7em;
    margin-top: 1.85em;
  }
}

@media (min-width: 1200px) {
  .menu-title {
    font-size: 8em;
    margin-top: 1.5em;
  }
}
</style>