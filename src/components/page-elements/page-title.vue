<template>
  <div class="page-title">
    <hash small />
    <h1 class="my-5 p-3">Tytuł</h1>
  </div>
</template>

<script>
import Hash from "@/components/page-elements/hash.vue";
export default {
  components: {
    Hash,
  },
};
</script>

<style>
.page-title {
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
}
</style>
