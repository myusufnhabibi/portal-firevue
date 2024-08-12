<template>
  <h2>Halaman Dashboard</h2>

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

  <form @submit.prevent="submit">
    <label for="">Name : </label>
    <input type="text" v-model="users.UserInput.name" />
    <button type="submit" class="btn mx-2">Add</button>
  </form>
</template>

<script setup>
import { useUserStorage } from "@/stores/UserStores.js";

const submit = () => {
  users.addUser();
};
const users = useUserStorage();
</script>

<style scoped>
input {
  border: 1px solid black;
}
</style>
