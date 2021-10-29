<template>
  <div class="text-center">
    <h1>Ciudades de Argentina</h1>
    <v-card class="mx-auto" max-width="400" color="secondary" v-for="item in this.data.list" :key="item.id">
     <v-card-title>
       {{item.name}}
       </v-card-title> 
    </v-card>

    <h1>Favorites</h1>
    <h2>PROXIMAMENTE</h2>
    <h3>Podras ver tus ciudades favoritas</h3>
  </div>
</template>

<script>

export default {
  props: {data: Object}
};
</script>

<style>
</style>