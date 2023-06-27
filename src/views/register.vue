<template>
  <div class="register__container">
    <form>
      <div class="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label for="name"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="name" required />
        <label for="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />
        <label for="password"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          required
        />
        <label for="password-confirm"><b>Confirm Password</b></label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="password-confirm"
          id="password-confirm"
          required
        />
        <hr />
        <p>
          By creating an account you agree to our
          <a href="#">Terms & Privacy</a>.
        </p>
        <button type="submit" class="registerbtn">Register</button>
      </div>
      <div class="container signin">
        <p>
          Already have an account?
          <router-link to="/login"><a href="#">Sign in</a></router-link
          >.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios
      .post(
        "https://documentation-vue.projects.codennection.pl/api/auth/register"
      )
      .then((response) => {
        console.log(response);
      });
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.register__container {
  padding-top: 2%;
}
.container {
  padding: 16px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

a {
  color: dodgerblue;
}

.signin {
  text-align: center;
}
</style>