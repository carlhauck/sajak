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
  justify-content: center;
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
  margin-bottom: 2.8em;
}

@media (min-width: 350px) {
  .menu-title {
    font-size: 4em;
    margin-bottom: 2.6em;
  }
}

@media (min-width: 576px) {
  .menu-title {
    font-size: 6.5em;
    margin-bottom: 2.2em;
  }
}

@media (min-width: 768px) {
  .menu-title {
    font-size: 5.5em;
    margin-bottom: 1.3em;
  }
}

@media (min-width: 992px) {
  .menu-title {
    font-size: 7em;
  }
}

@media (min-width: 1200px) {
  .menu-title {
    font-size: 8em;
  }
}
</style>