<template>
  <div class="login__container">
    <form @submit.prevent="loginUser">
      <div class="container">
        <label for="email"><b>Email</b></label>
        <input
          v-model="email"
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />
        <label for="psw"><b>Password</b></label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <button class="login__button" type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
        <router-link to="/register"
          ><span class="login__container-register-link"
            >Not Registred?<a href="#">Register</a></span
          ></router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import { axiosApi } from '@/axios/axios'
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      email: '',
      password: '',
      user: ''
    }
  },
  methods: {
    ...mapMutations('Toast', ['addToast']),
    loginUser() {
      axiosApi
        .post('/auth/login', {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.$store
            .dispatch('Auth/login', {
              token: response.data.data.token,
              user: response.data.data.user,
            })
            .then(() => {
            this.$router.push('ui');
            this.addToast({
              message: `Witaj użytkowniku ${this.email}`,
            });
          });
        })
        .catch((error) => {
          const errors = error.response?.data.message
          if (errors === undefined) {
            return this.addToast({
              message: 'Wystąpił błąd :( Przepraszamy, spróbuj ponownie później.',
            });
          }
          this.addToast({
              message: errors,
            });
        })
    },
  },
}
</script>

<style lang="scss">
.login__container {
  padding-top: 2%;
  &-register-link {
    display: flex;
    align-self: flex-end;
    gap: 10px;
    color: white;
  }
}
form {
  border: 3px solid #f1f1f1;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.login__button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
  color: black;
}
span.psw a {
  padding-left: 10px;
}

@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
