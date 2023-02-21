<template>
  <div class="pagination">
    <div class="overflow-auto">
      <b-pagination :prev="prev" :next="next"></b-pagination>
    </div>
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
  justify-content: center;
}
</style>
