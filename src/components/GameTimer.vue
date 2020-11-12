<template>
  <div class="bottom-right">
    <h4 class="timer">{{ timeLeft }}</h4>
  </div>
</template>

<script>
export default {
  props: ["blankCount", "wrongCount", "currentWord"],
  data: function () {
    return {
      timeLeft: 60,
      counting: false,
      timer: new this.clockTimer(
        function () {
          this.timeLeft--;
          if (
            this.timeLeft <= 0 ||
            this.blankCount === 0 ||
            this.wrongCount === 6
          ) {
            this.timer.stop();
            this.counting = false;
            console.log(this.counting);
            console.log("stopped counting");
          }
        }.bind(this),
        1000
      ),
    };
  },
  watch: {
    currentWord: function () {
      this.timeLeft = 60;
      this.timer.start();
    },
  },
  methods: {
    clockTimer: function (fn, t) {
      var timerObj = setInterval(fn, t);

      this.stop = function () {
        if (timerObj) {
          clearInterval(timerObj);
          timerObj = null;
        }
        return this;
      };

      // start timer using current settings (if it's not already running)
      this.start = function () {
        if (!timerObj) {
          this.stop();
          timerObj = setInterval(fn, t);
        }
        return this;
      };

      // start with new or original interval, stop current interval
      this.reset = function (newT = t) {
        t = newT;
        return this.stop().start();
      };
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