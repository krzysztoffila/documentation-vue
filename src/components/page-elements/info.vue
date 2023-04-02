<template>
  <div :class="['info', `info--${type}`]" class="info__container m-3">
    <div class="info__container-icon p-4 m-1">
      <img
        :src="require(`@/assets/bootstrap-icons/${icons[type]}.svg`)"
        alt="icon"
        widht="25px"
        height="25px"
        :style="`fill:${type}`"
      />
    </div>
    <div class="info__container-text">
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
      default: "info",
    },
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
  // margin: 3em;
  // padding: 2em;
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
