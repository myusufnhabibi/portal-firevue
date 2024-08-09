<template>
  <h2>Halaman Category</h2>
  <v-list>
    <v-list-item :to="{ name: 'CategoryDetail', params: { name: 'web' } }"
      >Web Dev</v-list-item
    >
    <v-list-item :to="{ name: 'CategoryDetail', params: { name: 'mobile' } }">
      Mobile Dev
    </v-list-item>
  </v-list>
</template>
