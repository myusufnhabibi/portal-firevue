<template>
  <h2>Halaman Category</h2>
  <div class="d-flex justify-end my-2">
    <v-btn color="primary" icon="mdi-plus" @click="addData"> </v-btn>
  </div>

  <DialogComponent v-model="dialog">
    <template #title>
      {{ category.isUpdate ? "Update" : "Add" }} Category
    </template>
    <template #content>
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="category.name"
          label="Category Name"
          :rules="nameRules"
          variant="outlined"
        ></v-text-field>
        <v-textarea
          label="Description"
          class="mt-2"
          :rules="descRules"
          variant="outlined"
          v-model="category.description"
        ></v-textarea>
        <v-btn :disabled="!form" class="mt-2" type="submit" block>{{
          category.isUpdate ? "Update" : "Add"
        }}</v-btn>
      </v-form>
    </template>
  </DialogComponent>

  <DialogComponent v-model="dialogDetail">
    <template #title>
      {{ category.name }}
    </template>
    <template #content>
      {{ category.description }}
    </template>
  </DialogComponent>

  <DialogComponent v-model="dialogDelete">
    <template #title> Delete Category </template>
    <template #content>
      Are You Sure Delete Category : <strong>{{ category.name }} </strong>
      <v-row class="mt-3">
        <v-col>
          <v-btn class="mr-2" color="error" @click="destroyData(category.id)"
            >Delete</v-btn
          >
          <v-btn color="info" @click="dialogDelete = false">Cancel</v-btn>
        </v-col>
      </v-row>
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
      <tr v-for="(item, index) in categories" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td class="d-flex flex-wrap ga-1">
          <v-btn
            color="success"
            size="x-small"
            icon="mdi-information"
            @click="getCategory(item)"
          ></v-btn>
          <v-btn
            color="warning"
            icon="mdi-pencil"
            size="x-small"
            @click="ediData(item)"
          ></v-btn>
          <v-btn
            color="error"
            size="x-small"
            icon="mdi-trash-can"
            @click="deleteData(item)"
          ></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { useCategoryStore } from "@/stores/CategoryStores.js";
import DialogComponent from "../components/DialogComponent.vue";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const CategoryStorage = useCategoryStore();
const {
  onSubmit,
  readCategory,
  getCategory,
  addData,
  ediData,
  deleteData,
  destroyData,
} = CategoryStorage;
const { category, dialog, form, categories, dialogDetail, dialogDelete } =
  storeToRefs(CategoryStorage);

onMounted(() => {
  readCategory();
});

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
</script>
