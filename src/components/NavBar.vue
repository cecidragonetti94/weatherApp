<template>
  <v-card color="grey lighten-4 mb-4">
    <v-app-bar app dense color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>The Weather App</v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary dark align-center  color="secondary">
        <v-container class="mt-4 text-center">
          <v-col>
            <v-avatar >
              <img
                src="https://store-images.s-microsoft.com/image/apps.1299.9007199266242681.539dcf60-5777-4338-aecf-6d83761df4f9.63351064-9b87-4927-9391-23f07baad874?mode=scale&q=90&h=300&w=300"
                alt=""
              />
            </v-avatar>
          </v-col>
          <v-col>
            <p class="accent--text nt-3 headline">Weather</p>
          </v-col>
          <v-col>
              <v-btn color="primary" to="/">Home</v-btn>
          </v-col>
          <v-col>
              <v-btn color="primary" to="/weatherCity">Search</v-btn>
          </v-col>
          
           <v-col>
              <v-btn color="primary" to="/argentina">Argentina</v-btn>
          </v-col>
          <v-col>
              <v-btn color="primary" to="/zipCode">Zip Code</v-btn>
          </v-col>
        </v-container> 
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
}
</script>

<style scoped>
p{
  color:#40cbbe;
}
</style>