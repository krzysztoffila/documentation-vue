<template>
  <pre>
    <div class="code__clipboard-container">
        <div>Copied!</div>
        <!-- <svg></svg> -->
    </div>
    <code>{{coloredCode}}</code>
</pre>
</template>

<script>
import copyToClipboard from "@/helpers/copy-to-clipboard.js";
export default {
  props: {
    code: String,
    extension: String,
  },
  data() {
    return {
      copied: false,
    };
  },
  computed: {
    coloredCode() {
      return this.code;
    },
  },
  methods: {
    copyToClipboard,
    setCopied(copied) {
      this.copied = copied;
    },
  },
};
</script>

<style lang="scss">
pre {
  border: 1px solid black;
}
.code__clipboard-container {
  display: inline-block;
  text-align: right;
}
</style>
