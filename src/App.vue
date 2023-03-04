<template>
  <div id="#app">
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
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
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
main {
  display: flex;
  justify-content: space-between;
}
</style>
