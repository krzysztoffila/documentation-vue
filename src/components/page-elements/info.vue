<template>
  <!-- w zaleznosci od typu zmiana koloru i ikonki  uzyc if https://bootstrap-vue.org/docs/components/card#background-and-border-variants-->
  <div :class="['info', type && `info--${type}`]" class="info__container">
    <div class="info__container__icon">
      <b-icon icon="info-circle" :variant="type" class="mx-2"></b-icon>
    </div>
    <div class="info__container__text" :variant="type">
      <b> | INFO |{{ type }} </b><br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        inventore error dolorum corporis. Quisquam dolorem consectetur fuga
        tenetur quas porro?
      </p>
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
    return {
      icons: {
        warning: "",
        danger: "",
      },
    };
  },
};
</script>

<style lang="scss">
.info {
  margin: 3em;
  padding: 2em;
  display: flex;
  border: 1px solid #198754;
  border-radius: 20px;
  &--warning {
    border: 1px solid #ffc107;
  }
  &--danger {
    border: 1px solid #dc3545;
  }
}
</style>
