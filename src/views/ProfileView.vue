<template>
  <h2>Halaman Profile</h2>
  <span>
    Selamat Datang
    <h3 v-for="user in usersStorage.userData" :key="user.name">
      {{ user.name }}
    </h3>
  </span>
  <span
    >Ada
    {{ usersStorage.userData.length }}
    User Aktif!</span
  >
  <hr class="my-3" />
</template>

<script setup>
import { useUserStore } from "@/stores/UserStores.js";

const usersStorage = useUserStore();
</script>
