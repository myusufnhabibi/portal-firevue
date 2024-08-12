<template>
  <h2>Halaman Profile</h2>
  <span>
    Selamat Datang
    <h3 v-for="user in users.userData" :key="user.name">
      {{ user.name }}
    </h3>
  </span>
  <span
    >Ada
    {{ users.userData.length }}
    User Aktif!</span
  >
  <hr class="my-3" />
</template>

<script setup>
import { useUserStorage } from "@/stores/UserStores.js";

const users = useUserStorage();
</script>
