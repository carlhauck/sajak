<template>
  <div class="admin">
    <div class="d-flex flex-row">
      <div class="p-4">
        <form @submit.prevent="validateBeforeSubmit">
          <div class="form-group text-center">
            <h5 class="text-center">Admin Login</h5>
            <input type="password" class="form-control password-field" placeholder="Input password" v-model.trim="password">
            <span class="error help-block" ></span>
          </div>
          <div class="text-danger" v-if="error"><p>Incorrect password.</p></div>
          <div class="text-center">
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div v-if="showScores">
        <div v-for="(highScore, index) in highScores" class="row">
          <div class="column">{{ index + 1 }}</div>
          <div class="column">{{ highScore.player }}</div>
          <div class="column">{{ highScore.score }}</div>
          <div class="column">
            <button @click="destroyHighScore(highScore, index)">Destroy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.d-flex {
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn-primary {
  font-size: 0.9em;
  font-weight: 500;
  background: transparent;
  color: #94722a;
  border: 2px solid #94722a;
  padding: 8px 35px;
  border-radius: 12px;
  margin-bottom: 1em;
}
.btn-primary:hover {
  background: #7c60b8;
  color: #ffffff;
  border: 2px solid #482d81;
  padding: 8px 35px;
  border-radius: 12px;
  cursor: pointer;
}
h5 {
  font-weight: 400;
  font-size: 1em;
  margin-bottom: 0.8em;
}
input {
  width: 220px;
  height: 2.75em;
  border: 1px solid gray;
  font-weight: 200;
  text-align: center;
  margin-bottom: 1.2em;
  border-radius: 8px;
}
.text-danger {
  color: #815a40;
  font-size: 0.8em;
  font-weight: 300;
  text-align: center;
  margin-top: -1.1em;
}

.column {
  float: left;
  padding: 10px;
  text-align: center;
  width: 25%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      error: null,
      password: null,
      highScores: [],
      showScores: false,
    };
  },
  created: function () {
    axios.get("/api/high_scores").then((response) => {
      this.highScores = response.data;
    });
  },
  methods: {
    destroyHighScore: function (highScore, index) {
      if (confirm("Are you sure you want to delete this score?")) {
        axios.delete(`api/high_scores/${highScore.id}`).then((response) => {
          this.highScores.splice(index, 1);
        });
      }
    },
    validateBeforeSubmit() {
      if (this.password === process.env.VUE_APP_ADMIN_KEY) {
        this.error = false;
        this.showScores = true;
      } else {
        this.error = true;
      }
    },
  },
};
</script>
