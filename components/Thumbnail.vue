<template>
  <div class="pa-2">
    <div class="d-flex overflow-hidden">
      <img
        class="thumbnail"
        :src="src"
        :alt="alt"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thumbnail',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.thumbnail {
  transition: transform .5s ease;
  max-width: 100%;
}

.thumbnail:hover {
  transform: scale(1.05);
}
</style>
