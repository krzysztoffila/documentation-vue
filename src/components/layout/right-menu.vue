<template>
  <aside class="right-menu p-3" :class="{ 'right-menu--show': showAside }">
    <ul class="right-menu__list">
      <li class="right-menu__list__link">
        <a href="#">Podpunkt artykułu 1</a>
      </li>
      <li class="right-menu__list__link">
        <a href="#">Podpunkt artykułu 2</a>
      </li>
      <li class="right-menu__list__link">
        <a href="#">Podpunkt artykułu 3</a>
      </li>
      <li class="right-menu__list__link">
        <a href="#">Podpunkt artykułu 4</a>
      </li>
      <li class="right-menu__list__link">
        <a href="#">Podpunkt artykułu 5</a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState("RightMenu", ["showAside"]),
  },
  methods: {
    ...mapMutations("RightMenu", { toggleShowAside: "toggleShowRightAside" }),
  },
};
</script>

<style lang="scss">
.right-menu {
  width: 20%;
  display: flex;
  align-items: right;
}
.right-menu__list {
  width: 100%;
  list-style-type: none;
}
.right-menu__list__link {
  padding: 5px 0;
}
.right-menu__list__link a {
  font-size: 12px;
  padding-left: 5px;
  text-decoration: none;
  color: #b3bcc3;
  text-underline-offset: 5px;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
}
@media screen and (max-width: 992px) {
  .right-menu__list {
    font-size: 12px;
    width: 120px;
    position: fixed;
    top: 107px;
    right: -100%;
    background-color: #343a40;
    transition: 0.7s all;
  }
  .responsive .right-menu__list {
    right: 0;
  }
  .right-menu__container {
    width: 20%;
  }
}
</style>
