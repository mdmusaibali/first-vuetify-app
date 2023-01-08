<template>
  <div>
    <v-text-field
      v-model="newTaskTitle"
      @click:append.stop="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      clearable
      hide-details
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    addTask() {
      const newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false,
      };
      this.$store.dispatch("addTask", newTask);
      this.newTaskTitle = "";
    },
  },
};
</script>
