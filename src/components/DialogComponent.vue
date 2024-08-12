<template>
  <v-dialog width="auto">
    <v-card>
      <v-card-title primary-title> <slot name="title"></slot> </v-card-title>
      <v-card-text>
        <slot name="content"></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
