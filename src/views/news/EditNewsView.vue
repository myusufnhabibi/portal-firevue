<template>
  <h2>Edit News Page</h2>
  <FormInputComponent />
</template>

<script setup>
import FormInputComponent from "@/components/News/FormInputComponent.vue";
import { useNewsStore } from "@/stores/NewsStores";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const newsStorage = useNewsStore();
const { getDetailNews } = newsStorage;
const route = useRoute();

onMounted(() => {
  getDetailNews(route.params.id, true);
});
</script>
