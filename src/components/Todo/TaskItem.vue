<template>
  <div>
    <v-list-item
      @click="doneTask(task.id)"
      :class="{
        'blue lighten-5': task.done,
      }"
    >
      <template>
        <v-list-item-action>
          <v-checkbox :value="task.done"></v-checkbox>
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
<style lang=""></style>
