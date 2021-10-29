<template>
<v-container>
    <p>Ingrese codigo postal</p>
    <search-city @accion="zipCoder"/>
    <city-zip-code/>
</v-container>  
</template>

<script>
import CityZipCode from '../components/CityZipCode.vue'
import SearchCity from '../components/SearchCity.vue'
export default {
  components: { SearchCity, CityZipCode },
 data(){
     return{
         coder: {}
     }
 },
 created(){
      this.zipCoder()
 },
 methods:{
     async zipCoder(city){
         const key = "4af561725919418cf813bd0a77f4b185"
         const pais = "us"
         const {data} = await this.axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${city},${pais}&appid=${key}`)
         this.code = data
         console.log("data",this.code)
         console.log("city", city)
     }
 }
}
</script>

<style>

</style>