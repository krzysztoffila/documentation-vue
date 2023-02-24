<template>
  <div class="pagination p-3">
    <b-button
      :class="[('prev', prev && `${prev}`)]"
      class="pagination__left"
      variant="outline-primary"
    >
      <b-icon class="pagination__left__icon" icon="chevron-left"></b-icon>
      Poprzedni
    </b-button>
    <b-button
      :class="[('next', next && `${next}`)]"
      class="pagination__right"
      variant="outline-primary"
    >
      <b-icon class="pagination__right__icon" icon="chevron-right"></b-icon>
      Następny
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
