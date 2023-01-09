<template>
  <div>
    <v-text-field
      v-model="newTaskTitle"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add Task"
      clearable
      hide-details
    >
      <template v-slot:append>
        <v-icon
          color="primary"
          :disabled="newTaskTitleInvalid"
          @click.stop="addTask"
        >
          mdi-plus
        </v-icon>
      </template>
    </v-text-field>
  </div>
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
