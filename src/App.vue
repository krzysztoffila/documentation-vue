<template>
  <div id="app">
    <header>
      <nav-component />
    </header>
    <main>
      <left-menu />
      <router-view />
      <right-menu />
    </main>
  </div>
</template>
<script>
import NavComponent from "@/components/layout/nav-component.vue";
import LeftMenu from "@/components/layout/left-menu.vue";
import RightMenu from "@/components/layout/right-menu.vue";

export default {
  components: {
    NavComponent,
    LeftMenu,
    RightMenu,
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
