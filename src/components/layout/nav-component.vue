<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <img class="logo" src="@/assets/logo.svg" alt="icon" height="45px" />
      <b-navbar-nav>
        <b-nav-item active href="#">Vue.js</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <button-toggle />
        <b-nav-item active href="#">Docs</b-nav-item>
        <b-nav-item active href="#">About</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import ButtonToggle from "@/components/page-elements/button-toggle.vue";
export default {
  components: {
    ButtonToggle,
  },
};
</script>

<style>
</style>
