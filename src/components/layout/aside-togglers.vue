<template>
  <aside class="aside__tooglers__container" :class="{ responsive: showAside }">
    <b-icon
      class="aside__left__icon d-lg-none"
      @click="toggleShowAside"
      icon="list"
      aria-hidden="true"
    ></b-icon>
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
    background: #343a40;
    display: flex;
    justify-content: space-between;
  }
  .aside__left__icon {
    margin-left: 20px;
    color: white;
  }
  .aside__right__icon {
    margin-right: 20px;
    color: white;
  }
}
</style>
