<template>
  <div>
    <button>Play</button>
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
  bottom: 10%;
  font-family: "archiamedium";
  text-transform: lowercase;
  letter-spacing: 0.1em;
  font-size: 1.3em;
  padding: 1em 1.4em;
  border: 2px solid rgba(222, 234, 238, 0.85);
  border-radius: 10px;
  background-color: rgba(222, 234, 238, 0.3);
  color: white;
  z-index: 4;
}
button:hover {
  background-color: rgba(222, 234, 238, 0.5);
  border: 2px solid rgba(222, 234, 238, 1);
}
</style>