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
      <router-link v-if="!isLogged" to="/login"
        ><b-icon
          class="nav__login-icon"
          icon="person-circle"
          height="20px"
        ></b-icon
        ><span class="nav__login-text">Login</span></router-link
      >
      <b-button v-else type="submit" size="sm" class="logout__btn"
        >Logout
      </b-button>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("Auth", ["isLogged"]),
  },
};
</script>

<style lang="scss">
.nav__login-icon,
.nav__login-text {
  color: #fff;
}
.logout__btn {
  display: inline-block;
  width: 70px;
}
</style>
