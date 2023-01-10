<template>
  <div>
    <v-list-item
      @click="doneTask(task.id)"
      :class="{
        'blue lighten-5': task.done,
      }"
      class="white"
      :ripple="false"
    >
      <template>
        <v-list-item-action>
          <v-checkbox :input-value="task.done"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{
              'text-decoration-line-through': task.done,
            }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon size="small">mdi-calendar</v-icon>
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>

        <v-list-item-action>
          <task-menu :task="task"></task-menu>
        </v-list-item-action>

        <v-list-item-action v-if="isSorting">
          <v-btn icon color="primary" class="handle">
            <v-icon>mdi-drag-horizontal</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>
<script>
import TaskMenu from "./TaskMenu.vue";
import { format } from "date-fns";

export default {
  props: ["task"],
  components: {
    TaskMenu,
  },
  computed: {
    isSorting() {
      return this.$store.getters.isSorting;
    },
  },
  filters: {
    niceDate(value) {
      return format(new Date(value), "MMM d");
    },
  },
  methods: {
    doneTask(id) {
      this.$store.dispatch("doneTask", id);
    },
  },
};
</script>
<style lang="scss">
.sortable-ghost {
  opacity: 0;
}
.sortable-drag {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
