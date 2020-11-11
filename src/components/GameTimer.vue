<template>
  <div class="bottom-right">
    <h4 class="timer">{{ timer }}</h4>
  </div>
</template>

<script>
export default {
  props: ["blankCount", "wrongCount", "currentWord"],
  data: function () {
    return {
      timer: 60,
      counting: false,
    };
  },
  watch: {
    currentWord: function () {
      if (!this.counting) {
        this.countDown();
      }
    },
  },
  methods: {
    countDown: function () {
      // if (this.counting) {
      //   clearInterval(countdown);
      // }
      if (this.timer < 60) {
        this.timer = 60;
      }
      this.counting = true;
      console.log(this.counting);
      clearInterval(countdown);
      let countdown = setInterval(
        function () {
          this.timer--;
          if (
            this.timer <= 0 ||
            this.blankCount === 0 ||
            this.wrongCount === 6
          ) {
            clearInterval(countdown);
            this.counting = false;
            console.log(this.counting);
          }
        }.bind(this),
        1000
      );
    },
  },
};
</script>

<style scoped>
.bottom-right {
  position: absolute;
  bottom: 0.5rem;
  right: 0.6rem;
  text-align: right;
}

h4 {
  margin: 0;
}

.timer {
  font-family: "archiabold";
  font-size: 1.1em;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #eeeded;
  color: #924646;
}

@media (min-width: 300px) {
  .timer {
    font-size: 1.2em;
  }
  .bottom-right {
    position: absolute;
    bottom: 1rem;
    right: 1.2rem;
    text-align: right;
  }
}

@media (min-width: 350px) {
  .timer {
    font-size: 2.2em;
  }
}
</style>