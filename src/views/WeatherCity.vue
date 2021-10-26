<template>
<div>
  <SearchCity @accion="getCity"/>
  <City :data="city"/>
  </div>
</template>

<script>
import City from '../components/City.vue'
import SearchCity from '../components/SearchCity.vue'
export default {
  components: { City, SearchCity },
  data(){
    return{
   city:{}
    }
 
  },
  created(){
    this.getCity()
  },
  methods:{
    async getCity(city){
      const key = "4af561725919418cf813bd0a77f4b185"
      const {data} = await this.axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      this.city = data
      console.log("city", city)
      console.log(this.city)
      
    }
  }
}
</script>
