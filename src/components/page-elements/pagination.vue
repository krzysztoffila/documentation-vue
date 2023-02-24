<template>
  <div class="pagination p-3">
    <b-button :class="[('prev', prev && `${prev}`)]" variant="outline-primary">
      <b-icon icon="chevron-left"></b-icon> Poprzedni
    </b-button>
    <b-button :class="[('next', next && `${next}`)]" variant="outline-primary">
      <b-icon icon="chevron-right"></b-icon> Następny
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
