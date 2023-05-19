<template>
  <div :class="['success', `success--${type}`]" class="info__container m-3">
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
    type: {
      type: String,
      default: "success",
    },
  },
  data() {
    return {
      icons: {
        success: "lightbulb",
        warning: "exclamation-circle",
        danger: "exclamation-triangle",
      },
    };
  },
};
</script>

<style lang="scss">
.success {
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
