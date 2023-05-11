<template>
  <div class="pagination p-3">
    <b-button
      v-if="prev"
      class="pagination__button--prev"
      variant="outline-dark"
    >
      <b-icon class="pagination__left-icon" icon="chevron-left"></b-icon>
      Previous
    </b-button>
    <b-button
      v-if="next"
      class="pagination__button--next"
      variant="outline-dark"
    >
      Next
      <b-icon class="pagination__right-icon" icon="chevron-right"></b-icon>
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    prev: [Object, null],
    next: [Object, null],
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: space-between;
}
</style>
