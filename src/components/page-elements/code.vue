<template>
  <pre>
    <div class="code__clipboard__container">
        <div>Copied!</div>
        <!-- <svg></svg> -->
    </div>
    <code>{{coloredCode}}
    </code>
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
  display: flex;
  min-height: 300px;
  background-color: #d3d3d3;
  border: 1px solid black;
}
.code__clipboard__container {
  display: inline-block;
  justify-content: right;
  text-align: right;
}
</style>
