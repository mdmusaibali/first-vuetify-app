export default {
  state: {
    snackbarOpen: false,
    snackbarText: "Hello there",
  },
  getters: {
    snackbarOpen(state) {
      return state.snackbarOpen;
    },
    snackbarText(state) {
      return state.snackbarText;
    },
  },
  mutations: {
    newSnack(state, text) {
      let timeout = 0;
      if (state.snackbarOpen) {
        state.snackbarOpen = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbarOpen = true;
        state.snackbarText = text;
      }, timeout);
    },
    updateSnackbarOpen(state, value) {
      state.snackbarOpen = value;
    },
  },
  actions: {
    showSnack(context, text) {
      context.commit("newSnack", text);
    },
    updateSnackbarOpen(context, value) {
      context.commit("updateSnackbarOpen", value);
    },
  },
};
