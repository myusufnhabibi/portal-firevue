<template>
  <!-- <v-row class="mx-5"> -->
  <!-- <v-col v-for="news in allNews" :key="news.id" cols="4"> -->
  <v-card class="mx-auto">
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>{{ detailId.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ detailId.category.name }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ detailId.content }}</div>
    </v-card-text>

    <v-card-subtitle class="pt-4">
      {{ detailId.writeenBy.name }} -
      {{ new Date(detailId.createdAt).toDateString() }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange" text="Back" @click="$router.go(-1)"></v-btn>
    </v-card-actions>
  </v-card>
  <!-- </v-col>
  </v-row> -->
</template>

<script setup>
defineProps({
  detailId: {
    type: Object,
    required: true,
  },
});
</script>
