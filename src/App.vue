<template>
  <v-app>
    <NavBar/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components:{Footer, NavBar},

  data: () => ({
    //
  }),
};
</script>
