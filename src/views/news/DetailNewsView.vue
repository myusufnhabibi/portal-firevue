<template>
  <h2>Detail News Page</h2>
  
  <div class="mt-5" v-if="detailNews">
    <DetailCardComponent :detailId="detailNews" :isUpdate="true" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useNewsStore } from "@/stores/NewsStores";
import { storeToRefs } from "pinia";

import DetailCardComponent from "@/components/News/DetailCardComponent.vue";

const route = useRoute();

const newsStorage = useNewsStore();
const { detailNews } = storeToRefs(newsStorage);
const { getDetailNews } = newsStorage;

onMounted(() => {
  getDetailNews(route.params.id, false);
});
</script>
