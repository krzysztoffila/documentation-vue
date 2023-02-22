<template>
  <div class="pagination p-3">
    <b-button class="pagination__right-button" variant="outline-primary">
      <b-icon icon="chevron-left"></b-icon> Poprzedni
    </b-button>
    <b-button class="pagination__left" variant="outline-primary">
      <b-icon icon="chevron-right"></b-icon> Następny
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    next: [Object, null],
    prev: [Object, null],
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: space-between;
}
</style>
