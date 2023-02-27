<template>
  <div :class="['info', type && `info--${type}`]" class="info__container">
    <div class="info__container-icon mx-2">
      <svg
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        focusable="false"
        role="img"
        aria-label="exclamation circle"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi-exclamation-circle b-icon bi info"
      >
        <g>
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          ></path>
          <path
            d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
          ></path>
        </g>
      </svg>
      <b-icon :class="info" :icon="icons[type]" :variant="type"></b-icon>
    </div>
    <div class="info__container-text" :variant="type">
      <b>{{ type }} </b><br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        inventore error dolorum corporis. Quisquam dolorem consectetur fuga
        tenetur quas porro?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        facilis non molestiae quo id velit totam. Vel impedit nam fugiat
        pariatur culpa, voluptatibus eaque. Sed itaque eligendi minus mollitia
        eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        facilis non molestiae quo id velit totam. Vel impedit nam fugiat
        pariatur culpa, voluptatibus eaque. Sed itaque eligendi minus mollitia
        eum.
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
