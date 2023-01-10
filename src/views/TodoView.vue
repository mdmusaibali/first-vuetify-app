<template>
  <div class="home">
    <task-list v-if="tasks.length !== 0" :tasks="tasks"></task-list>
    <no-tasks v-else></no-tasks>

    <button-done-sorting v-if="isSorting"></button-done-sorting>
  </div>
</template>

<script>
import { TaskList, NoTasks, ButtonDoneSorting } from "./../components";
export default {
  name: "Home",
  components: {
    TaskList,
    NoTasks,
    ButtonDoneSorting,
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksFiltered;
    },
    isSorting() {
      return this.$store.getters.isSorting;
    },
  },
};
</script>
