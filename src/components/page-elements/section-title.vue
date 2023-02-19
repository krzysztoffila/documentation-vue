<template>
  <div class="section-title">
    <hr />
    <div class="section-title__container">
      <hash small />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Hash from "@/components/page-elements/Hash.vue";
export default {
  components: {
    Hash,
  },
};
</script>

<style>
.section-title__container:hover {
  /* po najechaniu wyswietlanie hash */
}
</style>