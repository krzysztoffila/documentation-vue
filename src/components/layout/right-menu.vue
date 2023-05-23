<template>
  <aside class="right-menu p-3">
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
export default {};
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
  font-size: 14px;
  padding-left: 5px;
  text-decoration: none;
  color: #b3bcc3;
  text-underline-offset: 5px;
  &:hover {
    color: #fff;
    text-decoration: underline;
    transition: 0.2s all;
  }
}
</style>
