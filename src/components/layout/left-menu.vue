<template>
  <aside
    class="topnav left-menu p-3"
    id="myTopnav"
    :class="{ responsive: showAside }"
  >
    <ul class="left-menu__list">
      <li class="left-menu__list__link"><a href="#">Article 1</a></li>
      <li class="left-menu__list__link"><a href="#">Article 2</a></li>
      <li class="left-menu__list__link"><a href="#">Article 3</a></li>
      <li class="left-menu__list__link"><a href="#">Article 4</a></li>
      <li class="left-menu__list__link"><a href="#">Article 5</a></li>
    </ul>
  </aside>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState("LeftMenu", ["showAside"]),
  },
  methods: {
    ...mapMutations("LeftMenu", { toggleShowAside: "toggleShowAside" }),
  },
};
</script>

<style lang="scss">
.left-menu {
  position: relative;
  width: 20%;
  display: flex;
  align-items: left;
}
.left-menu__list {
  width: 100%;
  list-style-type: none;
  letter-spacing: 1px;
}
.left-menu__list__link {
  padding: 5px 0;
}
.left-menu__list__link a {
  text-decoration: none;
  color: #b3bcc3;
  &:hover {
    color: #fff;
  }
}
.left-menu__toolbar {
  list-style-type: none;
}
.icon {
  display: none;
}
@media screen and (max-width: 992px) {
  .left-menu__list {
    font-size: 12px;
    width: 120px;
    position: fixed;
    top: 107px;
    left: -100%;
    background-color: #343a40;
    transition: 0.7s all;
  }
  .responsive .left-menu__list {
    left: 0;
  }
  .left-menu__container {
    width: 20%;
  }
  .left-menu__toolbar .icon {
    float: right;
    display: block;
  }
}
</style>
