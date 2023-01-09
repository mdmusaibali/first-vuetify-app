<template>
  <div class="home">
    <add-task-field></add-task-field>
    <task-list v-if="tasks.length !== 0" :tasks="tasks"></task-list>
    <no-tasks v-else></no-tasks>
  </div>
</template>

<script>
import { AddTaskField, TaskList, NoTasks } from "./../components";
export default {
  name: "Home",
  components: {
    AddTaskField,
    TaskList,
    NoTasks,
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksFiltered;
    },
  },
};
</script>
