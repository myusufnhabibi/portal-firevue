<template>
  <RouterView />
</template>

<script setup>
import { onMounted, provide } from "vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/AuthStores";
import { storeToRefs } from "pinia";

provide("role", "Admin News");

const authStorage = useAuthStore()
const {currentUser } = storeToRefs(authStorage)

provide('currentUser', currentUser)
onMounted(() => {
  authStorage.authHandler()
})
</script>
