<template>
  <div class="grid">
    <thumbnail
      v-for="img in images"
      :key="`thumbnail_${img.source}_${img.id}`"
      class="brick"
      :alt="img.alt"
      :src="img.urls.thumb"
      :title="img.description"
    />
  </div>
</template>

<script>
import Thumbnail from './Thumbnail.vue'
export default {
  name: 'ImageGrid',
  components: { Thumbnail },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.grid {
  column-gap: 0;
}

.brick {
  max-width: 100%;
}

@media (min-width: 400px) {
  .grid {
    column-count: 2;
  }
}

@media (min-width: 800px) {
  .grid {
    column-count: 3;
  }
}

@media (min-width: 1200px) {
  .grid {
    column-count: 4;
  }
}

@media (min-width: 1600px) {
  .grid {
    column-count: 5;
  }
}

@media (min-width: 2000px) {
  .grid {
    column-count: 6;
  }
}

@media (min-width: 2400px) {
  .grid {
    column-count: 7;
  }
}

@media (min-width: 2800px) {
  .grid {
    column-count: 8;
  }
}

@media (min-width: 3200px) {
  .grid {
    column-count: 9;
  }
}

@media (min-width: 3600px) {
  .grid {
    column-count: 10;
  }
}

@media (min-width: 4000px) {
  .grid {
    column-count: 11;
  }
}
</style>
