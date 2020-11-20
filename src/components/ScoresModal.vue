<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div class="modal"
        @click="close"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            <h1 class="page-title">high horses</h1>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <div v-for="(highScore, index) in highScores" class="row">
              <div class="column left">{{ index + 1 }}</div>
              <div class="column middle">{{ highScore.player }}</div>
              <div class="column right">{{ highScore.score }}</div>
            </div>
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
import axios from "axios";
export default {
  name: "ScoresModal",
  props: ["scoresVisible"],
  data: function () {
    return {
      highScores: [],
    };
  },
  created: function () {
    axios.get("/api/high_scores").then((response) => {
      this.highScores = response.data;
    });
  },
  methods: {
    close() {
      this.$emit("closeScores");
    },
  },
};
</script>

<style scoped>
.page-title {
  font-family: "archiabold";
  font-size: 1.75em;
}

.column {
  float: left;
  padding: 10px;
}

.left,
.right {
  width: 22%;
}

.middle {
  width: 56%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

p {
  margin: 1.2em 0;
}

a {
  color: #7d915b;
  text-decoration: none;
}

a:hover {
  color: #95aa72;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 2px 2px 20px 1px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  width: 96vw;
  max-height: 96vh;
  max-height: calc(var(--vh, 1vh) * 96);
}

.modal-header,
.modal-footer {
  display: flex;
}

.modal-header {
  margin-top: 1.5em;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
}

.modal-footer {
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 1.5em;
}

.modal-body {
  position: relative;
  margin: 0 1.3em;
  font-size: 0.85em;
  text-align: center;
}

.btn-green {
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

@media (min-width: 300px) {
  .page-title {
    font-size: 1.9em;
  }
}

@media (min-width: 350px) {
  .page-title {
    font-size: 2.2em;
  }
  .modal-body {
    margin: 0 1.6em;
    font-size: 0.95em;
  }
}

@media (min-width: 576px) {
  .page-title {
    font-size: 3em;
  }
  .modal {
    width: 80vw;
    max-height: 95vh;
    max-height: calc(var(--vh, 1vh) * 95);
  }
  .modal-body {
    margin: 0 3em;
    font-size: 1em;
  }
}

@media (min-width: 768px) {
  .modal {
    width: 70vw;
    max-height: 90vh;
  }
}

@media (min-width: 992px) {
  .modal {
    width: 60vw;
    max-height: 85vh;
  }
}

@media (min-width: 1200px) {
  .modal {
    width: 50vw;
    max-height: 85vh;
  }
}
</style>