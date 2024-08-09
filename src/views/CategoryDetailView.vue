<template>
  <h1>Ini Category {{ $route.params.name }}</h1>
  <v-btn color="secondary" @click="BackCategory">Back</v-btn>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const BackCategory = () => {
  router.push({ name: "Category" });
};
</script>
