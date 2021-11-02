<template>
  <v-container>
    <city-zip-code @change="zipCoder" />
    <CardCity :data="coder"/>
  </v-container>
</template>

<script>
import CityZipCode from "../components/CityZipCode.vue";
import CardCity from "../components/CardCity.vue"

export default {
  components: { CityZipCode, CardCity },
  props: {
    select: String,
  },
  data() {
    return {
      coder: {},
    };
  },
 created(){
    this.zipCoder();
 },
  methods: {
     async zipCoder(valor) {
      try {
      const key = "4af561725919418cf813bd0a77f4b185";
      const pais = "us";
     
       const { data } = await this.axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${valor},${pais}&appid=${key}`);

      this.coder = data;
      console.log("el valor",valor)
     console.log("data", this.coder);
     } catch (error) {
       console.log("error",error)
     }
     
     
   },
  },
  
};
</script>

<style>
</style>