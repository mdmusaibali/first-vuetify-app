<template>
  <v-btn @click="toggleSorting" color="primary" class="button-done-sorting">
    Done Sorting
  </v-btn>
</template>
<script>
export default {
  methods: {
    toggleSorting() {
      this.$store.dispatch("toggleSorting");
    },
  },
};
</script>
<style lang="scss">
.button-done-sorting {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
