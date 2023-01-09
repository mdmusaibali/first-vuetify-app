<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="primary" v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          class="cursor-pointer"
          @click="handleClick(i)"
        >
          <v-list-item-icon>
            <v-icon> {{ item.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <delete-dialog
      v-if="dialogs.delete"
      :task="task"
      @delete="deleteTask"
      @close="dialogs.delete = false"
    ></delete-dialog>
    <edit-dialog
      v-if="dialogs.edit"
      :task="task"
      @edit="editTask"
      @close="dialogs.edit = false"
    ></edit-dialog>
    <due-date-dialog
      v-if="dialogs.dueDate"
      :task="task"
      @dateSelect="saveDate"
      @close="dialogs.dueDate = false"
    ></due-date-dialog>
  </div>
</template>
<script>
import DeleteDialog from "./dialogs/DeleteDialog.vue";
import EditDialog from "./dialogs/EditDialog.vue";
import DueDateDialog from "./dialogs/DueDateDialog.vue";

export default {
  components: {
    DeleteDialog,
    EditDialog,
    DueDateDialog,
  },
  props: ["task"],
  data: () => ({
    dialogs: {
      delete: false,
      edit: false,
      dueDate: false,
    },
    items: [
      {
        title: "Edit",
        icon: "mdi-circle-edit-outline",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "Due date",
        icon: "mdi-clipboard-text-clock",
        click() {
          this.dialogs.dueDate = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
    ],
  }),
  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
      this.$store.dispatch("showSnack", "Task Deleted");
    },
    handleClick(i) {
      this.items[i].click.call(this);
    },
    editTask(editedTask) {
      console.log(editedTask);
      this.$store.dispatch("editTask", editedTask);
      this.dialogs.edit = false;
      this.$store.dispatch("showSnack", "Task Edited");
    },
    saveDate(date) {
      console.log("DATE", date);
      this.$store.dispatch("editTask", { ...this.task, dueDate: date });
      this.dialogs.dueDate = false;
    },
  },
};
</script>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
