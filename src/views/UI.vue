<template>
  <section>
    <page-title />
    <section-title />
    <description />
    <button-component />
    <info />
    <info type="warning" />
    <info type="danger" />
    <code-component
      extension="vue"
      code="const btn = document.querySelector('button');"
    />
    <pagination :prev="{ title: `Artykuł 2`, link: `/Artykuł-2` }" />
    <pagination
      :next="{ title: `Artykuł 1`, link: `/Artykuł-1` }"
      :prev="{ title: `Artykuł 2`, link: `/Artykuł-2` }"
    />
    <pagination :next="{ title: `Artykuł 1`, link: `/Artykuł-2` }" />
    <related
      :items="[
        { title: `Artykuł 1`, link: `/Artykuł-1` },
        { title: `Artykuł 2`, link: `/Artykuł-2` },
      ]"
    />
  </section>
</template>

<script>
import PageTitle from "@/components/page-elements/page-title.vue";
import SectionTitle from "@/components/page-elements/section-title.vue";
import Hash from "@/components/page-elements/hash.vue";
import Description from "@/components/page-elements/description.vue";
import ButtonComponent from "@/components/page-elements/button-component.vue";
import Info from "@/components/page-elements/info.vue";
import CodeComponent from "@/components/page-elements/code.vue";
import Pagination from "@/components/page-elements/pagination.vue";
import Related from "@/components/page-elements/related.vue";

export default {
  components: {
    PageTitle,
    SectionTitle,
    Hash,
    Description,
    ButtonComponent,
    Info,
    CodeComponent,
    Pagination,
    Related,
  },
};
</script>

<style>
section {
  width: 70%;
}
</style>
