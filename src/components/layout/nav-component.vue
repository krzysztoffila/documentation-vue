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
      <router-link class="nav__login-link" v-if="!isLogged" to="/login"
        ><b-icon
          class="nav__login-icon"
          icon="person-fill"
          height="20px"
        ></b-icon
        ><span class="nav__login-text">Login</span></router-link
      >

      <b-button
        v-else
        @click="logout"
        type="submit"
        size="sm"
        class="logout__btn"
        ><b-icon icon="arrow-bar-left"></b-icon>
        Logout
      </b-button>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("Auth", ["isLogged"]),
  },
  methods: {
    ...mapActions("Auth", ["logout"]),
  },
};
</script>

<style lang="scss">
.nav__login-link {
  border: 1px solid white;
  border-radius: 2px;
  padding: 0 10px;
}
.nav__login-icon,
.nav__login-text {
  color: #fff;
}
.logout__btn {
  display: flex;
  width: 80px;
}
</style>
