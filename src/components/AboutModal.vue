<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            <Header style="margin: 0;" />
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            I'm the default body!
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              mane menu
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import Header from "./../components/Header";
export default {
  name: "AboutModal",
  components: {
    Header,
  },
  props: ["aboutVisible"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 80vh;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  align-items: center;
  justify-content: center;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: center;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  margin: 1.5em 2em;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  margin-top: 0.3em;
  margin-left: auto;
  margin-right: auto;
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.02em;
  font-size: 1em;
  height: 45px;
  padding-left: 0.65em;
  padding-right: 0.65em;
  border: 2px solid #6e8548;
  border-radius: 14px;
  background-color: #95aa72;
  color: white;
  z-index: 4;
  white-space: nowrap;
}
.btn-green:hover {
  background-color: #a0b47e;
  cursor: pointer;
}
button.btn-next-mobile:active {
  background-color: #a0b47e;
}
</style>