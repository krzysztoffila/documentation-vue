<template>
  <aside class="right-menu p-3 right-menu--show">
    <b-sidebar
      id="sidebar-2"
      title="Subsection"
      bg-variant="dark"
      text-variant="light"
      right
      shadow
    >
      <div class="px-3 py-2 d-lg-none">
        <subsection-list :show="true" />
      </div>
    </b-sidebar>
    <div class="px-3 py-2 d-none d-sm-block">
      <subsection-list :show="true" />
    </div>
  </aside>
</template>

<script>
import SubsectionList from "@/components/articles/subsection-list.vue";

export default {
  components: {
    SubsectionList,
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background-color: #343a40;
    transition: 0.7s all;
  }
}
</style>
