<template>
  <image-grid :images="images" />
</template>

<script>
export default {
    name: 'Pages',
    data: () => ({
        images: [],
    }),
    created () {
        this.fetchImages();
    },
    methods: {
        async fetchImages () {
            const data = await this.$imageRepository.list();
            this.images.push(...data);
        },
    },
};
</script>
