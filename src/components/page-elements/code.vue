<template>
  <pre>
  <div class="code__clipboard__container m-2">
    <p class="m-2">{{extension}}</p>
    <button class="btn px-4" v-if="supportsCB" @click="copyToClipboard(coloredCode)">Copy</button>
  </div>
  <div class="code__clipboard--copied" v-if="message">{{message}}</div>
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
  justify-content: space-between;
  text-align: right;
  & button {
    justify-content: right;
    cursor: pointer;
    color: #d3d3d3;
    background-color: #6c757d;
    &:hover {
      color: #f8f9fa;
      background-color: #343a40;
    }
  }
}
.code__clipboard--copied {
  display: flex;
  justify-content: right;
}
</style>
