<template>
  <v-list density="compact">
    <v-list-subheader class="my-3 text-h5 font-weight-bold text-uppercase"
      >Portal News</v-list-subheader
    >

    <v-list-item
      v-for="(item, i) in itemLists"
      :key="i"
      :value="item"
      color="primary"
      :to="{ name: `${item.pathName}` }"
    >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title v-text="item.text"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
defineProps({
  itemLists: {
    type: Object,
    required: true,
  },
});
</script>
