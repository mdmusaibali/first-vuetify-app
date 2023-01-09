<template>
  <v-snackbar v-model="snackbarOpen">
    {{ snackbarText }}

    <template v-slot:action="{ attrs }">
      <v-btn color="indigo" text v-bind="attrs" @click="closeSnackbar">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackbarOpen: {
      get() {
        return this.$store.getters.snackbarOpen;
      },
      set(value) {
        this.$store.dispatch("updateSnackbarOpen", value);
      },
    },
    snackbarText() {
      return this.$store.getters.snackbarText;
    },
  },
  methods: {
    closeSnackbar() {
      this.$store.dispatch("updateSnackbarOpen", false);
    },
  },
};
</script>
