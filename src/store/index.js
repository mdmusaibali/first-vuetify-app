import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    markTaskAsDone(state, id) {
      const task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteATask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    addATask(state, task) {
      state.tasks.push(task);
    },
  },
  actions: {
    doneTask(context, id) {
      context.commit("markTaskAsDone", id);
    },
    deleteTask(context, id) {
      context.commit("deleteATask", id);
    },
    addTask(context, task) {
      context.commit("addATask", task);
    },
  },
});
