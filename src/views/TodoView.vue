<template>
  <div class="home">
    <the-add-task-field></the-add-task-field>
    <task-list v-if="tasks.length !== 0" :tasks="tasks"></task-list>
    <no-tasks v-else></no-tasks>
  </div>
</template>

<script>
import { TheAddTaskField, TaskList, NoTasks } from "./../components";
export default {
  name: "Home",
  components: {
    TheAddTaskField,
    TaskList,
    NoTasks,
  },
  computed: {
    tasks() {
      console.log("TASKS LOADED");
      return this.$store.getters.tasks;
    },
  },
};
</script>
