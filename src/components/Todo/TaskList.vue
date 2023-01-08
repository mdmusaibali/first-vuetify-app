<template>
  <v-list flat class="pt-0">
    <task-item v-for="task in tasks" :task="task" :key="task.id"></task-item>
  </v-list>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
  components: {
    TaskItem,
  },
  props: ["tasks"],
};
</script>
