<template>

<div class="text-center">
  <h1 >THE WEATHER APP</h1>
  <br>
  <p>
    Para poder buscar el estado del tiempo en una ciudad, por favor diríjase a nuestro menú
    y seleccione <strong>city</strong> .  Una vez que estes dentro de "city" podras buscar la ciudad que quieras.
  </p>
<br>
<br>
<div>
  <img src="https://lavoz.blob.core.windows.net.optimalcdn.com/images/2021/04/16/ventusky-thumb-770x480.jpg" alt="">
</div>
</div>
</template>

<script>

import Favorites from '../components/CitiesAr.vue'


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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
h1{
  color:#40cbbe;
  font-size:50px;
  font-family: 'Russo One', sans-serif;
}
p{
  font-size:15px;
  font-family: 'Russo One', sans-serif;
  
}
</style>
