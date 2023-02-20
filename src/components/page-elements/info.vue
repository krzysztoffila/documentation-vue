<template>
  <!-- w zaleznosci od typu zmiana koloru i ikonki  uzyc if https://bootstrap-vue.org/docs/components/card#background-and-border-variants-->
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
