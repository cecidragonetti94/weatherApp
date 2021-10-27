<template>
  <div>
    <h1> {{this.weather.name}}</h1>
     <h1> {{this.weather.sys.country}}</h1>
  <v-row>
   <v-col col=12 v-for="item in weather" :key="item.id">
      <h1>{{item.name}} </h1>
       <Favorites class="m-3 w-100" :data="item"/>
     
    </v-col>
  </v-row>
</div>
</template>

<script>

import Favorites from '../components/Favorites.vue'


  export default {
  components: { Favorites},
    name: 'Home',
    data(){
      return{
        weather: {},
      }
    },
    created(){
      this.getCities()
    },
    methods:{
      async getCities(){
      const key = "4af561725919418cf813bd0a77f4b185"
      const city= [{name:'sidney'}, {name:'bariloche'},{name:'london'}]
      const cityMap = city.map((cities)=>cities.name)
      const {data} = await this.axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityMap}&appid=${key}`)
      this.weather  = data
      console.log(cityMap)
      console.log(this.weather)
      
    
    }
    }
  }
</script>
