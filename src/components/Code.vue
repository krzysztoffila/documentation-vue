<template>
  <pre>
    <div class="code__clipboard-container">
        <div>Copied!</div>
        <svg></svg>
    </div>
    <code>{{coloredCode}}</code>
</pre>
</template>

<script>
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
    copyToClipboard(content) {},
    setCopied(copied) {
      this.copied = copied;
    },
  },
};
</script>

<style>
</style>