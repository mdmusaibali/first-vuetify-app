<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Delete task? </v-card-title>
      <v-card-text> This action cannot be reversed. </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> NO </v-btn>
        <v-btn color="red" text @click="$emit('delete', task.id)"> YES </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task", "onDelete", "onCancel"],
};
</script>
