<template>
  <h1>News Update</h1>
  <v-row class="my-5">
    <v-col v-for="news in allNews" :key="news.id" cols="6">
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
          <router-link
            :to="{ name: 'NewsByCategory', params: { id: news.category.id } }"
          >
            {{ news.category.name }}
          </router-link>
        </v-card-subtitle>

        <v-card-text>
          <div>{{ news.content.substring(0, 200) }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            class="mb-2"
            color="blue"
            text="READ MORE"
            variant="elevated"
            @click="detail(news.id)"
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
const router = useRouter();

const newsStorage = useNewsStore();
const { allNews } = storeToRefs(newsStorage);
const { getNews } = newsStorage;
const detail = (id) => {
  router.push({ name: "DetailNewsPublic", params: { id: id } });
};

onMounted(() => {
  getNews();
});
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
