<template>
  <div :class="[('hash', small && `hash--small`)]">#</div>
</template>

<script>
import copyToClipboard from "@/helpers/copy-to-clipboard.js";
export default {
  props: {
    small: Boolean,
  },
  methods: {
    copyToClipboard,
  },
};
</script>

<style>
</style>
