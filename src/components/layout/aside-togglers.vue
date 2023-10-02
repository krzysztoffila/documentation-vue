<template>
  <aside class="aside__tooglers__container" :class="{ responsive: showAside }">
    <b-button
      v-b-toggle.sidebar-1
      class="aside__left__icon d-lg-none"
      @click="toggleShowAside"
      icon="list"
      aria-hidden="true"
      ><b-icon icon="layout-text-sidebar-reverse" aria-hidden="true"></b-icon
    ></b-button>
    <b-icon
      class="aside__right__icon d-lg-none"
      @click="toggleShowRightAside"
      icon="three-dots"
      aria-hidden="true"
    ></b-icon>
  </aside>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState("LeftMenu", ["showAside"]),
    ...mapState("RightMenu", ["showAside"]),
  },
  methods: {
    ...mapMutations("LeftMenu", { toggleShowAside: "toggleShowAside" }),
    ...mapMutations("RightMenu", { toggleShowRightAside: "toggleShowAside" }),
  },
};
</script>

<style>
@media screen and (max-width: 992px) {
  .aside__tooglers__container {
    padding: 15px 0;
    background: #343a40;
    display: flex;
    justify-content: space-between;
  }
  .aside__left__icon {
    color: white;
  }
  .aside__right__icon {
    padding-right: 38px;
    color: white;
  }
}
</style>
