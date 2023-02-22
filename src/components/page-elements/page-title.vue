<template>
  <div class="page__title">
    <hash small />
    <h1>Tytuł Tematu h1</h1>
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
.page__title {
  display: flex;
}
.page__title h1 {
  margin-top: 20px;
  line-height: 50px;
  padding: 10px;
}
</style>
