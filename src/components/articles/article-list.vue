<template>
  <ul class="article-list" v-if="show">
    <li class="article-list__link"><a href="#">Article 1</a></li>
    <li class="article-list__link"><a href="#">Article 2</a></li>
    <li class="article-list__link"><a href="#">Article 3</a></li>
    <li class="article-list__link"><a href="#">Article 4</a></li>
    <li class="article-list__link"><a href="#">Article 5</a></li>
  </ul>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.article-list {
  list-style-type: none;
}

.article-list__link {
  padding: 5px 0;
}

.article-list__link a {
  font-size: 12px;
  padding-left: 5px;
  text-decoration: none;
  color: #b3bcc3;
  text-underline-offset: 5px;
}

.article-list__link a:hover {
  color: #fff;
  text-decoration: underline;
}
</style>
