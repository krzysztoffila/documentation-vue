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
      <router-link to="/login"
        ><b-icon icon="person-circle" height="20px"></b-icon
        ><span>Login</span></router-link
      >
    </b-navbar>
  </div>
</template>

<script>
import Login from "@/views/login.vue";
export default {
  components: {
    Login,
  },
};
</script>

<style>
</style>
