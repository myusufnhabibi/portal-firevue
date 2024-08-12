<template>
  <h2>Halaman Category</h2>
  <div class="d-flex justify-end my-2">
    <v-btn color="primary" icon="mdi-plus" @click="dialog = true"> </v-btn>
  </div>

  <DialogComponent v-model="dialog">
    <template #title> Add Category </template>
    <template #content>
      <v-form v-model="form" @submit.prevent="addCategory">
        <v-text-field
          v-model="category.name"
          label="Category Name"
          :rules="nameRules"
        ></v-text-field>
        <v-textarea
          label="Description"
          :rules="descRules"
          v-model="category.description"
        ></v-textarea>
        <v-btn :disabled="!form" class="mt-2" type="submit" block>Submit</v-btn>
      </v-form>
    </template>
  </DialogComponent>
  <!-- <v-list>
    <v-list-item :to="{ name: 'CategoryDetail', params: { name: 'web' } }"
      >Web Dev</v-list-item
    >
    <v-list-item :to="{ name: 'CategoryDetail', params: { name: 'mobile' } }">
      Mobile Dev
    </v-list-item>
  </v-list> -->

  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">Id</th>
        <th class="text-left">Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in categories" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td></td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { ref, reactive } from "vue";
import DialogComponent from "../components/DialogComponent.vue";

const addCategory = () => {
  // if (!form.value) return;
};
const category = reactive({
  name: "",
  description: "",
});
const dialog = ref(false);
const form = ref(false);
const nameRules = [
  (value) => {
    if (value) return;
    return "Name is required";
  },
];

const descRules = [
  (value) => {
    if (value) return;
    return "Description is required";
  },
];

const categories = [
  { id: 1, name: "Health" },
  { id: 2, name: "Bussiness" },
  { id: 3, name: "Technologies" },
];
</script>
