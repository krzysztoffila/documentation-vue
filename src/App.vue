<template>
  <div id="#app">
    <header>
      <nav-component>
        <button-toggle />
      </nav-component>
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
import ButtonToggle from "./components/page-elements/button-toggle.vue";

export default {
  components: {
    NavComponent,
    LeftMenu,
    RightMenu,
    ButtonToggle,
  },
  created() {
    this.$router.push("ui");
  },
};
</script>

<style lang="scss">
main {
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.87);
  background-color: #1a1a1a;
}
</style>
