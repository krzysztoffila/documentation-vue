<template>
  <div :class="['info', `info--${type}`]" class="info__container m-3">
    <div class="info__container-icon p-4 m-1">
      <b-icon :icon="`${icons[type]}`" :variant="type" height="25px"></b-icon>
    </div>
    <div class="info__container-text p-4 m-1">
      <b class="info__container-title" :variant="type"
        >{{ type.toUpperCase() }} </b
      ><br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        inventore error dolorum corporis. Quisquam dolorem consectetur fuga
        tenetur quas porro?
      </p>
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
        info: "info-square",
        success: "check2-square",
        warning: "exclamation-circle",
        danger: "exclamation-triangle",
      },
    };
  },
};
</script>

<style lang="scss">
.info {
  display: flex;
  border: 1px solid #17a2b8;
  border-radius: 20px;
  &--success {
    border: 1px solid #198754;
  }
  &--warning {
    border: 1px solid #ffc107;
  }
  &--danger {
    border: 1px solid #dc3545;
  }
}
</style>




