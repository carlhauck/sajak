<template>
  <div>
    <router-link to="/play">
      <button>Play</button>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style>
button {
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 32%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.05em;
  font-size: 1.9em;
  padding: 0.75em 1.2em;
  border: 4px solid rgba(222, 234, 238, 0.85);
  border-radius: 18px;
  background-color: rgba(222, 234, 238, 0.15);
  color: white;
  z-index: 4;
}
button:hover {
  background-color: rgba(222, 234, 238, 0.3);
  border: 4px solid rgba(222, 234, 238, 1);
  cursor: pointer;
}
</style>