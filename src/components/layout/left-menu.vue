<template>
  <aside class="topnav left-menu p-3 left-menu--show" id="myTopnav">
    <b-sidebar
      id="sidebar-1"
      title="Articles"
      bg-variant="light"
      backdrop-variant="light"
      shadow
    >
      <div class="px-3 py-2 d-lg-none">
        <article-list :show="true" />
      </div>
    </b-sidebar>
    <div class="px-3 py-2 d-none d-sm-block">
      <article-list :show="true" />
    </div>
  </aside>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ArticleList from "@/components/articles/article-list.vue";

export default {
  components: {
    ArticleList,
  },
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

  .left-menu__list {
    width: 100%;
    list-style-type: none;
    letter-spacing: 1px;

    .left-menu__list__link {
      padding: 5px 0;

      a {
        text-decoration: none;
        color: #b3bcc3;

        &:hover {
          color: #fff;
        }
      }
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

      &.left-menu--show {
        left: 0;
      }
    }

    .left-menu__container {
      width: 20%;
    }

    .left-menu__toolbar .icon {
      float: right;
      display: block;
    }
  }
}
</style>
