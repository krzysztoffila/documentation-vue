<template>
  <!-- w zaleznosci od typu zmiana koloru i ikonki  -->
  <div :class="['info', type && `info--${type}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    default: "",
  },
};
</script>

<style>
</style>