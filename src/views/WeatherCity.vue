<template>
<div>
  <SearchCity @accion="getCity"/>
  <CardCity :data="city"/>
  </div>
</template>

<script>
import CardCity from '../components/CardCity.vue'
import SearchCity from '../components/SearchCity.vue'
export default {
  components: { CardCity, SearchCity },
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
