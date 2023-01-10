<template>
  <v-list flat class="pt-0">
    <draggable v-model="tasks" handle=".handle">
      <task-item v-for="task in tasks" :task="task" :key="task.id"></task-item>
    </draggable>
  </v-list>
</template>

<script>
import TaskItem from "./TaskItem.vue";
import draggable from "vuedraggable";
export default {
  components: {
    TaskItem,
    draggable,
  },
  // props: ["tasks"],
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasksFiltered;
      },
      set(value) {
        this.$store.dispatch("setTasks", value);
      },
    },
  },
};
</script>
