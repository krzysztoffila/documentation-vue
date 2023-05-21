<template>
  <div class="related m-3">
    <h3>Related</h3>
    <ul class="related__list m-1">
      <li class="related__link"><a href="#">Related 1</a></li>
      <li><a href="#">Related 2</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style lang="scss">
ul li a {
  color: #cbc3c3;
  &:hover {
    color: #fff;
  }
}
.related__list li {
  margin-left: 20px;
  padding: 5px;
}
</style>
