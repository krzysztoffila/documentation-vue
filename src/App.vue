<template>
  <div id="#app">
    <header>
      <nav-component />
      <aside-togglers />
      <Toast />
    </header>
    <main>
      <left-menu />
      <router-view />
      <right-menu />
    </main>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import NavComponent from '@/components/layout/nav-component.vue'
import LeftMenu from '@/components/layout/left-menu.vue'
import RightMenu from '@/components/layout/right-menu.vue'
import AsideTogglers from '@/components/layout/aside-togglers.vue'
import Toast from '@/components/toast/toast-component.vue'

export default {
  components: {
    NavComponent,
    AsideTogglers,
    LeftMenu,
    RightMenu,
    Toast,
  },
  created() {
    this.$router.push('ui')
    this.$store.dispatch('Auth/autoLogin')
  },
}
</script>

<style lang="scss">
main {
  // colors: #242424;
  // colors: #2f2f2f;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.87);
  background-color: #1a1a1a;
}
button{
  display: flex;
}
</style>
