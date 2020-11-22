<template>
  <div class="toppish-right">
    <h4 class="brand"> {{ brands.join(" ") }} </h4>
  </div>
</template>

<script>
export default {
  props: ["brands"],
};
</script>

<style scoped>
.toppish-right {
  position: absolute;
  top: 1.7rem;
  right: 0.6rem;
  text-align: right;
  margin-right: 0.05rem;
}

h4 {
  margin: 0;
}

.brand {
  font-family: "fingerpaint", "archiabold";
  font-size: 1.2em;
  -webkit-text-stroke-width: 0.01px;
  -webkit-text-stroke-color: #d88761;
  color: #b65426;
  letter-spacing: 0.1rem;
}

@media (min-width: 300px) {
  .brand {
    font-size: 1.3em;
  }
  .toppish-right {
    position: absolute;
    top: 1.8rem;
    right: 0.8rem;
    text-align: right;
  }
}

@media (min-width: 350px) {
  .brand {
    font-size: 1.6em;
    /* -webkit-text-stroke-width: 0.01px; */
  }
  .toppish-right {
    position: absolute;
    top: 2.2rem;
    right: 0.8rem;
    text-align: right;
    margin-right: 0.1rem;
  }
}

@media (min-width: 576px) {
  .brand {
    font-size: 1.8em;
    /* -webkit-text-stroke-width: 0.01px; */
  }
  .toppish-right {
    position: absolute;
    top: 2.6rem;
    right: 1.4rem;
    text-align: right;
    margin-right: 0.1rem;
  }
}
</style>