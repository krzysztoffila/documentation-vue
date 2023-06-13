<template>
  <aside class="topnav left-menu p-3" id="myTopnav">
    <ul class="left-menu__list">
      <li class="left-menu__list__link"><a href="#">Article 1</a></li>
      <li class="left-menu__list__link"><a href="#">Article 2</a></li>
      <li class="left-menu__list__link"><a href="#">Article 3</a></li>
      <li class="left-menu__list__link"><a href="#">Article 4</a></li>
      <li class="left-menu__list__link"><a href="#">Article 5</a></li>
    </ul>
    <ul class="left-menu__toolbar">
      <li>
        <a href="javascript:void(0);" class="icon" @click="showList">
          <b-icon icon="menu-up" aria-hidden="true"></b-icon>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  methods: {
    showList() {
      let x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
  },
};
</script>

<style lang="scss">
.left-menu {
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
    display: none;
  }
  .left-menu__toolbar .icon {
    float: right;
    display: block;
  }
}
</style>
