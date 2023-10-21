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
    async copyHandler() {
      try {
        if (this.disableButton) {
          return;
        }
        this.disableButton = true;
        await copyToClipboard(this.coloredCode);
        this.textButton = "Copied!";
        setTimeout(() => {
          this.textButton = "Copy";
          this.disableButton = false;
        }, 3000);
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
  min-height: 200px;
  background-color: #f0f0f0;
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
