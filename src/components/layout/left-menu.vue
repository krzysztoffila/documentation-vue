<template>
  <aside class="left-menu p-3">
    <ul class="left-menu__list">
      <li class="left-menu__list__link"><a href="#">Artykuł 1</a></li>
      <li class="left-menu__list__link"><a href="#">Artykuł 2</a></li>
      <li class="left-menu__list__link"><a href="#">Artykuł 3</a></li>
      <li class="left-menu__list__link"><a href="#">Artykuł 4</a></li>
      <li class="left-menu__list__link"><a href="#">Artykuł 5</a></li>
    </ul>
  </aside>
</template>

<script>
export default {};
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
  color: #6c757d;
  &:hover {
    color: #212529;
  }
}
</style>
