export default {
  state: {
    search: null,
    tasks: [],
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    search(state) {
      return state.search;
    },
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
      );
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
    editATask(state, payload) {
      const taskToEdit = state.tasks.filter(
        (task) => task.id === payload.id
      )[0];
      if (taskToEdit) {
        if (payload.title) taskToEdit.title = payload.title;
        if (payload.dueDate) taskToEdit.dueDate = payload.dueDate;
      }
    },
    setSearch(state, payload) {
      state.search = payload;
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
    editTask(context, payload) {
      context.commit("editATask", payload);
    },
    setSearch(context, payload) {
      context.commit("setSearch", payload);
    },
  },
};
