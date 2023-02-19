<template>
  <div :class="['hash', small && `hash--small`]">#</div>
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
div {
  font-size: 30px;
  margin-left: 20px;
}
</style>
