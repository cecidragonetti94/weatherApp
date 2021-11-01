<template>
  <v-container>
    <city-zip-code @items="states" />
  </v-container>
</template>

<script>
import CityZipCode from "../components/CityZipCode.vue";

export default {
  components: { CityZipCode },
  props: {
    e3: Array,
  },
  data() {
    return {
      coder: {},
      states: {},
    };
  },
  created() {
    this.setStates();
      this.zipCoder()
  },
  methods: {
    async setStates() {
      try {
        const res = await fetch('cp.json');
        const states = await res.json();
        console.log("estados", states);
      } catch (error) {
        console.log(error);
      }
    },

     async zipCoder(){
            console.log("hola",this.states)
             const key = "4af561725919418cf813bd0a77f4b185"
             const pais = "us"
             const {data} = await this.axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${states},${pais}&appid=${key}`)
             this.code = data
             console.log("data",this.code)

         }
  },
};
</script>

<style>
</style>