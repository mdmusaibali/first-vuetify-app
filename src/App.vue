<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
      <v-img
        height="170"
        src="img/mountains.jpg"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
      </v-img>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      prominent
      :height="$route.path === '/' ? '238' : '170'"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="header-container pa-0">
        <v-row class="mt-0">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search-bar></search-bar>
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-4 text-h4">
            {{ appTitle }}
          </v-app-bar-title>
        </v-row>
        <v-row>
          <live-date-time></live-date-time>
        </v-row>
        <v-row v-if="$route.path === '/'">
          <add-task-field></add-task-field>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
      <global-snackbar></global-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import {
  GlobalSnackbar,
  SearchBar,
  LiveDateTime,
  AddTaskField,
} from "./components";

export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  computed: {
    appTitle() {
      return this.$store.getters.appTitle;
    },
  },
  mounted() {
    this.$store.dispatch("getTasks");
  },
  components: {
    GlobalSnackbar,
    SearchBar,
    LiveDateTime,
    AddTaskField,
  },
};
</script>

<style lang="scss">
.header-container {
  max-width: none !important;
}
</style>
