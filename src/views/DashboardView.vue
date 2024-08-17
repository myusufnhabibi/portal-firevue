<template>
  <h2>Halaman Dashboard</h2>

  <span v-if="!currentUser">
    Loading
  </span >

  <span v-else>
    Selamat Datang
    <b>
      {{ currentUser.name }}
    </b>
  </span>
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStores";
import { storeToRefs } from "pinia";

const authStorage = useAuthStore();
const { currentUser } = storeToRefs(authStorage);
</script>
