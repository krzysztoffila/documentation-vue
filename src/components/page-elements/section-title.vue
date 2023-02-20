<template>
  <div class="section-title">
    <hr />
    <div class="section-title__container">
      <hash small />
      <h2>Podpunkt 1</h2>
    </div>
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

<style lang="scss">
.section-title__container {
  display: flex;
  & h2 {
    line-height: 50px;
    margin-top: 20px;
    padding: 10px;
  }
}
</style>
