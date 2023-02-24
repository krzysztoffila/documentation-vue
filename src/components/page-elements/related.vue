<template>
  <div class="related">
    <h3>Related</h3>
    <ul class="related__list">
      <li class="related__link"><a href="#">Related 1</a></li>
      <li><a href="#">Related 2</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // items to Array obiektów np.{title:String,(moze byc html-em) link:String - podpiety pod komponent router-link}
    items: Array,
  },
};
</script>

<style>
</style>
