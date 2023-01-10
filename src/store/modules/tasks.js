import Localbase from "localbase";
const db = new Localbase("db");

export default {
  state: {
    search: null,
    tasks: [],
    sorting: false,
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
    isSorting(state) {
      return state.sorting;
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
    toggleSortingTasks(state) {
      state.sorting = !state.sorting;
      console.log("SORTING", state.sorting);
    },
    setTasks(state, payload) {
      state.tasks = payload;
    },
  },
  actions: {
    async addTask(context, task) {
      await db.collection("tasks").add(task);
      context.commit("addATask", task);
    },
    async getTasks(context) {
      const tasks = await db.collection("tasks").get();
      context.commit("setTasks", tasks);
    },
    async doneTask(context, id) {
      const task = context.state.tasks.filter((task) => task.id === id)[0];
      await db.collection("tasks").doc({ id }).update({
        done: !task.done,
      });
      context.commit("markTaskAsDone", id);
    },
    async editTask(context, payload) {
      const updatedObject = {};
      if (payload.title) {
        updatedObject.title = payload.title;
      }
      if (payload.dueDate) {
        updatedObject.dueDate = payload.dueDate;
      }
      await db
        .collection("tasks")
        .doc({ id: payload.id })
        .update(updatedObject);
      context.commit("editATask", payload);
    },
    async deleteTask(context, id) {
      await db
        .collection("tasks")
        .doc({
          id,
        })
        .delete();
      context.commit("deleteATask", id);
    },
    setTasks(context, payload) {
      db.collection("tasks").set(payload);
      context.commit("setTasks", payload);
    },
    setSearch(context, payload) {
      context.commit("setSearch", payload);
    },
    toggleSorting(context) {
      context.commit("toggleSortingTasks");
    },
  },
};
