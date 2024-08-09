<template>
  <div class="d-flex justify-center">
    <div class="text-center">
      <img :src="NotFound" style="width: 40vw" />
      <h3>Page Not Found</h3>
      <v-btn class="my-10" block color="green" :to="{ name: 'Home' }"
        >Back to Home</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import NotFound from "@/assets/NotFound.png";
</script>
