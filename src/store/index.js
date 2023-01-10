import Vue from "vue";
import Vuex from "vuex";
import snackbar from "./modules/snackbar";
import tasks from "./modules/tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks: tasks,
    snackbar: snackbar,
  },
  state: {
    appTitle: process.env.VUE_APP_TITLE,
  },
  getters: {
    appTitle(state) {
      return state.appTitle;
    },
  },
});
