<template>
  <v-app :dark="darkModeEnabled">
    <header-bar />

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    name: 'Default',
    computed: {
        darkModeEnabled () {
            return this.$configRepository.isDarkModeEnabled();
        },
    },
};
</script>
