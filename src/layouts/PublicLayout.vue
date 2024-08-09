<template>
  <v-app>
    <!-- Header -->
    <HeaderComponent />

    <!-- Main -->
    <v-container style="min-height: 100vh" class="my-10">
      <RouterView />
    </v-container>

    <!-- Footer -->
    <FooterComponent />
  </v-app>
</template>

<script setup>
import FooterComponent from "@/components/Public/FooterComponent.vue";
import HeaderComponent from "@/components/Public/HeaderComponent.vue";
</script>
