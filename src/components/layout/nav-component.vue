<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <img class="logo" src="@/assets/logo.svg" alt="icon" height="45px" />
      <b-navbar-nav>
        <b-nav-item active href="#">Vue.js</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item active href="#">Docs</b-nav-item>
        <b-nav-item active href="#">About</b-nav-item>
      </b-navbar-nav>
      <router-link v-if="isLogged" to="/login"
        ><b-icon class="login__icon" icon="person-circle" height="20px"></b-icon
        ><span class="login__text">Login</span></router-link
      >
      <b-button v-else type="submit" size="sm" class="logout__btn"
        >Logout
      </b-button>
    </b-navbar>
  </div>
</template>

<script>
import Login from "@/views/login.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("auth", ["isLogged"]),
  },
  components: {
    Login,
  },
};
</script>

<style lang="scss">
.login__icon,
.login__text {
  color: #fff;
}
.logout__btn {
  display: inline-block;
  width: 70px;
}
</style>
