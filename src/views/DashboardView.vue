<template>
  <h2>Halaman Dashboard</h2>

  <span>
    Selamat Datang
    <h3>
      <!-- {{ currentUser.email }} -->
    </h3>
  </span>
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStores";
import { storeToRefs } from "pinia";

const userStorage = useAuthStore();
const { currentUser } = storeToRefs(userStorage);
</script>
