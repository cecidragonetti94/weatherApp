<template>
<div>
  <City :data="city"/>
  </div>
</template>

<script>
import City from '../components/City.vue'
export default {
  components: { City },
  data(){
    return{
   city:{}
    }
 
  },
  created(){
    this.getCity()
  },
  methods:{
    async getCity(){
      const key = "4af561725919418cf813bd0a77f4b185"
      const {data} = await this.axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`)
      this.city = data
      console.log(this.city)
      console.log(data.main.humidity)
    }
  }
}
</script>
