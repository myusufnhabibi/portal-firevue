<template>
  <h2>Halaman News</h2>
  <div class="d-flex justify-end my-2">
    <v-btn color="primary" icon="mdi-plus" @click="addNews"></v-btn>
  </div>

  <v-row class="mx-5">
    <v-col v-for="news in allNews" :key="news.id" cols="4">
      <v-card class="mx-auto">
        <v-img
          class="align-end text-white"
          height="200"
          :src="
            news
              ? news.image
              : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
          "
          cover
        >
          <v-card-title>{{ news.title.substring(0, 50) }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
          {{ news.category.name }}
        </v-card-subtitle>

        <v-card-text>
          <div>{{ news.content.substring(0, 200) }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text="Detail" @click="detail(news.id)"></v-btn>
          <v-btn color="blue" text="Edit" @click="edit(news.id)"></v-btn>
          <v-btn
            color="error"
            text="Delete"
            @click="deleteData(news.id)"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { useNewsStore } from "@/stores/NewsStores";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const newsStorage = useNewsStore();
const { allNews } = storeToRefs(newsStorage);
const { getNews, clearForm, deleteNews } = newsStorage;

const router = useRouter();
const detail = (id) => {
  router.push({ name: "DetailNews", params: { id: id } });
};

const edit = (id) => {
  router.push({ name: "EditNews", params: { id: id } });
};

const addNews = () => {
  router.push({ name: "CreateNews" });
  clearForm();
};

const deleteData = (id) => {
  deleteNews(id);
};

onMounted(() => {
  getNews();
});
</script>
