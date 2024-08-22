<template>
  <h1>Category Page</h1>
  <v-row class="mt-2">
    <v-col v-for="category in categories" :key="category.id" cols="4">
      <v-card
        class="mx-auto"
        color="surface-variant"
        image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
        max-width="340"
        :subtitle="category.description"
        :title="category.name"
      >
        <template v-slot:actions>
          <v-btn
            append-icon="mdi-chevron-right"
            color="blue-lighten-2"
            text="Detail"
            variant="outlined"
            block
            @click="detail(category.id)"
          ></v-btn>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { useCategoryStore } from "@/stores/CategoryStores.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const CategoryStorage = useCategoryStore();
const { readCategory } = CategoryStorage;
const { categories } = storeToRefs(CategoryStorage);
const detail = (id) => {
  router.push({ name: "NewsByCategory", params: { id: id } });
};
onMounted(() => {
  readCategory();
});
</script>
