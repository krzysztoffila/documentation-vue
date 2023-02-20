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

<style lang="scss">
.hash--small {
  font-size: 50px;
  line-height: 50px;
  margin-top: 20px;
  padding: 10px;
  // &:hover {
  //   color: green;
  // }
}
</style>
