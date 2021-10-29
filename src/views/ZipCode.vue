<template>
<v-container>
   
    <city-zip-code @estado="handleCode"/>
</v-container>  
</template>

<script>
import CityZipCode from '../components/CityZipCode.vue'

export default {
  components: {  CityZipCode },
 
 data(){
     return{
         coder: {}
     }
 },
 created(){
      this.zipCoder()
 },
 methods:{
     async zipCoder(e3){
         const key = "4af561725919418cf813bd0a77f4b185"
         const pais = "us"
         const {data} = await this.axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${e3},${pais}&appid=${key}`)
         this.coder = data
         console.log("data",this.coder)
         console.log("city", e3)
     }
 }
}
</script>

<style>

</style>