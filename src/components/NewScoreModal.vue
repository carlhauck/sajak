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
            <h1 class="page-title">{{score}}</h1>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <div>
              <h4>Welcome to the winner's circle!</h4>
              <h4>Enter a player name to accompany your high score.</h4>
              <h4>Horse puns encouraged.</h4>
              <input v-model="playerName" type="text" maxlength="15" autofocus />
              <button v-if="!playerName" class="btn-green disabled" disabled>submit</button>
              <button v-else class="btn-green" @click="close(); postHighScore()">submit</button>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
export default {
  name: "NewScoreModal",
  props: ["newScoreVisible", "score"],
  data: function () {
    return {
      playerName: "",
    };
  },
  methods: {
    close() {
      this.$emit("closeNewScore");
    },
    postHighScore() {
      const params = {
        player: this.playerName,
        score: this.score,
      };
      axios
        .post("/api/high_scores", params)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<style scoped>
input {
  width: 210px;
  height: 40px;
  display: block;
  margin: 0 auto 0.75em auto;
  border: 1px solid gray;
  border-radius: 8px;
  margin-bottom: 1em;
  text-align: center;
  font-family: "archiabold";
  font-size: 1.3em;
  color: #99814c;
}

.page-title {
  font-family: "archiabold";
  font-size: 2.5em;
  margin: 0;
}

.column {
  float: left;
  padding: 10px;
}

.left,
.right {
  width: 25%;
}

.middle {
  width: 50%;
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
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 2px 20px 1px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 96vw;
  max-height: 98vh;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
}

.modal-header,
.modal-footer {
  display: flex;
}

.modal-header {
  margin-top: 1.5em;
  margin-bottom: -0.25em;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 1.5em;
  font-family: "archiasemibold";
  text-transform: lowercase;
  letter-spacing: 0.03em;
  font-size: 1em;
  height: 45px;
  padding-left: 0.85em;
  padding-right: 0.85em;
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

.btn-green.disabled,
.btn-green:hover.disabled {
  z-index: -1;
  cursor: not-allowed;
  background-color: #c1c4bd;
  border: 2px solid #b3b3b3;
}

@media (min-width: 300px) {
  .page-title {
    font-size: 3em;
  }
}

@media (min-width: 350px) {
  .page-title {
    font-size: 3.5em;
  }
  .modal {
    background: rgba(255, 255, 255, 0.95);
  }
  .modal-body {
    margin: 0 1.6em;
    font-size: 0.95em;
  }
}

@media (min-width: 576px) {
  .page-title {
    font-size: 4em;
  }
  .modal {
    background: rgba(255, 255, 255, 0.95);
    width: 80vw;
    max-height: 95vh;
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