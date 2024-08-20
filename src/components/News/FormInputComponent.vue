<template>
  <div class="mt-8">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="90%"
      rounded="lg"
    >
      <!-- <v-alert v-if="isError" :text="message" title="Warning" variant="tonal" type="error"></v-alert> -->
      <v-form v-model="formInput" @submit.prevent="handleSubmit">
        <v-text-field
          density="compact"
          placeholder="News Title"
          variant="outlined"
          :rules="titleRules"
          v-model="news.title"
          label="Title"
        ></v-text-field>

        <div v-if="categories">
          <v-select
            :rules="categoryRules"
            class="mt-3"
            :items="categories"
            item-title="name"
            item-value="id"
            label="Category"
            variant="outlined"
            v-model="news.category"
            return-object
          ></v-select>
        </div>

        <v-textarea
          density="compact"
          variant="outlined"
          label="Content News"
          :rules="contentRules"
          v-model="news.content"
          class="mb-3"
        ></v-textarea>

        <v-btn
          type="submit"
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          :disabled="!formInput"
        >
          SUMBIT
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "@/stores/CategoryStores";
import { useNewsStore } from "@/stores/NewsStores";

const categoryStorage = useCategoryStore();
const { categories } = storeToRefs(categoryStorage);
const { readCategory } = categoryStorage;

const newsStorage = useNewsStore();
const { formInput, news } = storeToRefs(newsStorage);
const { handleSubmit } = newsStorage;

onMounted(() => {
  readCategory();
});

const titleRules = [
  (value) => {
    if (value) return;
    return "Title is required";
  },
];

const contentRules = [
  (value) => {
    if (value) return;
    return "Content is required";
  },
];

const categoryRules = [
  (value) => {
    if (value) return;
    return "Category is required";
  },
];
</script>
