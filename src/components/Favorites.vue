<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title> {{ data.id }} </v-card-title>
    <v-card-subtitle>hola {{ data.name }} </v-card-subtitle>
    <v-card-text></v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style>
</style>