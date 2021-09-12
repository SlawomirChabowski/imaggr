<template>
  <v-switch
    v-model="enabled"
    color="blue lighten-5"
    hide-details
    append-icon="mode_night"
    prepend-icon="light_mode"
  />
</template>

<script>
export default {
    name: 'DarkModeSwitch',
    computed: {
        enabled: {
            get () {
                return this.$configRepository.isDarkModeEnabled();
            },
            set (val) {
                this.$vuetify.theme.dark = val;
                this.$configRepository.toggleDarkMode(val);
            },
        },
    },
    created () {
        this.$vuetify.theme.dark = this.$configRepository.isDarkModeEnabled();
    },
};
</script>
