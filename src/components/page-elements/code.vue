<template>
  <pre class="m-3">
  <div class="code__clipboard-container">
    <p class="m-2">{{extension}}</p>
    <button class="btn mx-2 px-4" v-if="supportsCB" @click="copyHandler">{{textButton}}</button>
  </div>
      <highlight-code class="code__highlight-code" lang="javascript">
			{{coloredCode}}
		</highlight-code>
  </pre>
</template>

<script>
import Vue from "vue";
import VueHighlightJS from "vue-highlight.js";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import vue from "vue-highlight.js/lib/languages/vue";
import "highlight.js/styles/default.css";
import copyToClipboard from "@/helpers/copy-to-clipboard.js";
Vue.use(VueHighlightJS, {
  languages: {
    css,
    javascript,
    vue,
  },
});
export default {
  props: {
    code: String,
    extension: String,
  },
  data() {
    return {
      copied: false,
      supportsCB: false,
      textButton: "Copy",
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
    toggle() {
      this.isActive = !this.enable;
    },
    copyToClipboard,
    setCopied(copied) {
      this.copied = copied;
    },
    async copyHandler() {
      try {
        await copyToClipboard(this.coloredCode);
        this.textButton = "Copied!";
      } catch (e) {
        console.error(e);
        this.textButton = "Error!";
      }
    },
  },
};
</script>

<style lang="scss">
pre {
  min-height: 400px;
  background-color: #f0f0f0;
  border: 1px solid black;
}
.code__clipboard-container {
  display: flex;
  justify-content: right;
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
.code__highlight-code {
  border: none;
}
</style>
