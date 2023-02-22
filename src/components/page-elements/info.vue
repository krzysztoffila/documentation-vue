<template>
  <!-- w zaleznosci od typu zmiana koloru i ikonki  uzyc if https://bootstrap-vue.org/docs/components/card#background-and-border-variants-->
  <div class="info__container">
    <div :class="['info', type && `info--${type}`]">
      <div class="info__container__icon">
        <b-icon icon="info-circle" variant="success" class="mx-2"></b-icon>
      </div>
      <div class="info__container__text">
        <b>Info: </b><br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          inventore error dolorum corporis. Quisquam dolorem consectetur fuga
          tenetur quas porro?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    default: "",
  },
  data() {
    icons: {
      warning: "";
      danger: "";
    }
  },
};
</script>

<style>
.info {
  margin: 3em;
  padding: 2em;
  display: flex;
  border: 1px solid #198754;
  border-radius: 20px;
}
</style>
