<template>
  <pre>
  <div class="code__clipboard__container">
    <button v-if="supportsCB" @click="copyToClipboard">Copy</button>
  <div v-if="message">{{message}}</div>
  </div>
    <code class="code__template__container px-5">
      {{coloredCode}}
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
      supportsCB: false,
      message: "",
    };
  },
  created() {
    if (navigator.clipboard) {
      this.supportsCB = true;
    }
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
  min-height: 300px;
  background-color: #d3d3d3;
  border: 1px solid black;
}
.code__clipboard__container {
  display: flex;
  justify-content: right;
  text-align: right;
  & button {
    cursor: pointer;
  }
}
</style>
