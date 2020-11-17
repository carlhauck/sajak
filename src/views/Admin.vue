<template>
  <div class="admin">
    <div class="d-flex flex-row justify-content-center align-items-center">
      <div class="p-4">
        <form v-on:submit.prevent="validateBeforeSubmit">
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
    </div>
  </div>
</template>

<style scoped>
.d-flex {
  height: 100vh;
}
.btn-primary {
  font-size: 0.9em;
  font-weight: 500;
  background: transparent;
  color: #ff492c;
  border: 2px solid #ff492c;
  padding: 8px 35px;
  border-radius: 12px;
}
.btn-primary:hover {
  background: #482d81;
  color: #ffffff;
  border: 2px solid #482d81;
  padding: 8px 35px;
  border-radius: 80px;
}
h5 {
  font-weight: 400;
  margin-bottom: 1.2em;
}
input {
  width: 250px;
  font-weight: 200;
  text-align: center;
  margin-bottom: 1.2em;
  border-radius: 12px;
}
.text-danger {
  font-size: 0.8em;
  font-weight: 300;
  text-align: center;
  margin-top: -0.8em;
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
    };
  },
  created: function () {},
  methods: {
    validateBeforeSubmit() {
      if (this.password === "tempsajak") {
        this.error = false;
        console.log("Helllllllo!");
        this.$router.push("/");
      } else {
        this.error = true;
      }
    },
    getHighScores() {},
  },
};
</script>
