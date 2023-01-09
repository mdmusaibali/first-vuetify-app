<template>
  <v-text-field
    v-model="search"
    placeholder="Search"
    dense
    prepend-inner-icon="mdi-magnify"
    clearable
    filled
    class="mt-1 expanding-search"
    :class="{ closed: searchClosed && !search }"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
  ></v-text-field>
</template>
<script>
export default {
  data() {
    return {
      searchClosed: true,
    };
  },
  computed: {
    search: {
      get() {
        return this.$store.getters.search;
      },
      set(value) {
        this.$store.dispatch("setSearch", value);
      },
    },
  },
};
</script>
<style lang="scss">
.expanding-search {
  transition: max-width 0.3s;
  .v-input__slot {
    cursor: pointer !important;

    &:before,
    &:after {
      border-color: transparent !important;
    }
  }
  &.closed {
    max-width: 45px;
    .v-input__slot {
      background-color: transparent !important;
    }
  }
}
</style>
