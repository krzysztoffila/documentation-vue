<template>
  <section>
    <!-- w page-title i section-title powinien być hash -->
    <page-title>Tytuł Strony</page-title>
    <section-title>Tytuł Sekcji</section-title>
    <hash />
    <decription />
    <button-component />
    <info></info>
    <info type="warning" />
    <info type="danger" />
    <code-component extension="vue" code="<h1>test</h1>" />
    <pagination :next="{ title: `Artykuł 1`, link: `/Artykuł-1` }" />
    <pagination
      :next="{ title: `Artykuł 1`, link: `/Artykuł-1` }"
      :prev="{ title: `Artykuł 2`, link: `/Artykuł-2` }"
    />
    <pagination :prev="{ title: `Artykuł 2`, link: `/Artykuł-2` }" />
    <related
      :items="[
        { title: `Artykuł 1`, link: `/Artykuł-1` },
        { title: `Artykuł 2`, link: `/Artykuł-2` },
      ]"
    />
  </section>
</template>

<script>
import CodeComponent from "@/components/page-elements/code.vue";
import Related from "@/components/page-elements/related.vue";
import Pagination from "@/components/page-elements/pagination.vue";
import Info from "@/components/page-elements/info.vue";
import Hash from "@/components/page-elements/hash.vue";

export default {
  components: {
    CodeComponent,
    Related,
    Pagination,
    Info,
    Hash,
  },
};
</script>

<style>
</style>