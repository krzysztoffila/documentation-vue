<template>
  <div :class="['info', type && `info--${type}`]" class="info__container">
    <div class="info__container-icon mx-2">
      <b-icon :class="info" :icon="icons[type]" :variant="type"></b-icon>
    </div>
    <div class="info__container-text" :variant="type">
      <b>{{ type }} </b><br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        inventore error dolorum corporis. Quisquam dolorem consectetur fuga
        tenetur quas porro?
      </p>
    </div>
  </div>
</template>

<script>
// require("@/assets/bootstrap-icons/lightbulb.svg”)
// require("@/assets/bootstrap-icons/exclamation-circle.svg”)
// require("@/assets/bootstrap-icons/exclamation-triangle.svg”)
export default {
  props: {
    type: String,
    default: "",
  },
  data() {
    return {
      icons: {
        info: "lightbulb",
        warning: "exclamation-circle",
        danger: "exclamation-triangle",
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
