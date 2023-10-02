<template>
  <ul class="right-menu__list">
    <li class="right-menu__list__link">
      <a href="#">Subsection article 1</a>
    </li>
    <li class="right-menu__list__link">
      <a href="#">Subsection article 2</a>
    </li>
    <li class="right-menu__list__link">
      <a href="#">Subsection article 3</a>
    </li>
    <li class="right-menu__list__link">
      <a href="#">Subsection article 4</a>
    </li>
    <li class="right-menu__list__link">
      <a href="#">Subsection article 5</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SubsectionList",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style></style>
