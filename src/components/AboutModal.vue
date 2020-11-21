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
            <Header />
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <p>Sajak Horseman is a Hangman-inspired word game that puts Pat Sajak's head onto a horse's body. Why? Because it makes more sense than punishing a stick figure for your linguistic ineptitude, and because Pat Sajak's head on a horse's body—while mildly disturbing—doesn't evoke America's legacy of racial terror.</p>

            <p>You get 60 seconds per word. Simply type the letters you wish to guess. Correct letters are rewarded with their Scrabble score values (thanks, Hasbro!). After you successfully complete a word, hit the space bar to receive your next word.</p>

            <p>Incorrect guesses appear in the upper-left corner of the screen. If time runs out or you rack up more than 5 incorrect guesses on a word, you receive a brand (just under your score, where it really hurts). Once you've been branded 3 times, you lose and Vanna White will promptly put you out to pasture.</p>

            <p>Each word is 5-10 characters in length; there are no hyphens or accented characters. Words and definitions are drawn randomly from <a href="https://www.wordnik.com/about" target="_blank">Wordnik</a>, so blame them if you get a crappy one. Or just don't donate to their 501(c)(3).</p>

            <p>Bugs? Suggestions? <a href="https://carlhauck.github.io/" target="_blank">Email me</a>. Screenshots help.</p>

            <p>Otherwise, giddy-up and get guessin'!</p>
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
      this.$emit("closeAbout");
    },
  },
};
</script>

<style scoped>
p {
  margin: 1.2em 0;
}

a {
  color: #778b54;
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
  width: 96vw;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  max-height: 96vh;
  max-height: calc(var(--vh, 1vh) * 96);
  border-radius: 12px;
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
  margin-top: 0.5em;
  margin-bottom: 2em;
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

@media (min-width: 350px) {
  .modal-body {
    margin: 0 1.6em;
    font-size: 0.95em;
  }
}

@media (min-width: 576px) {
  .modal {
    width: 90vw;
    max-height: 95vh;
    max-height: calc(var(--vh, 1vh) * 95);
  }
  .modal-body {
    margin: 0 3em;
    font-size: 1em;
  }
  .modal-footer {
    margin-bottom: 1.5em;
  }
}

@media (min-width: 768px) {
  .modal {
    width: 85vw;
    max-height: 90vh;
  }
}

@media (min-width: 992px) {
  p {
    margin: 1.1em 0;
  }
  .modal {
    width: 75vw;
    max-height: 88vh;
  }
  .modal-header {
    margin-bottom: 0;
  }
}

@media (min-width: 1200px) {
  .modal {
    width: 65vw;
    max-height: 88vh;
  }
}
</style>