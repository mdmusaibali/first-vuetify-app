<template>
  <v-text-field
    v-model="newTaskTitle"
    @keyup.enter="addTask"
    class="pa-3 field-add-task"
    outlined
    placeholder="Add Task"
    clearable
    hide-details
    full-width
  >
    <template v-slot:append>
      <v-icon :disabled="newTaskTitleInvalid" @click.stop="addTask">
        mdi-plus
      </v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle;
    },
  },
  methods: {
    async addTask() {
      if (!this.newTaskTitleInvalid) {
        const newTask = {
          id: Date.now(),
          title: this.newTaskTitle,
          done: false,
          dueDate: null,
        };
        this.$store.dispatch("addTask", newTask);
        this.newTaskTitle = "";

        await this.$store.dispatch("showSnack", "Task Added");
      }
    },
  },
};
</script>

<style lang="scss">
.field-add-task.v-input--is-focused {
  .v-input__slot {
    background-color: rgba(31, 95, 129, 0.606) !important;
  }
}
</style>
