<template>
  <div class="text-center" col=12>
    <h1>Ciudades de Argentina</h1>
    <v-card class="mx-auto" max-width="400" color="secondary" v-for="item in this.data.list" :key="item.id">
     <v-card-title>
       {{item.name}} - {{item.sys.country}}
       </v-card-title> 
       <div class="datos">
      
        <h4><span>Weather:</span>  {{ item.weather[0].description }}</h4>
        <h4><span>Humidity:</span>  {{ item.main.humidity }}%</h4>
        <h4><span>Pressure:</span>  {{ item.main.pressure }}</h4>
          <h2><span>Tempeture:</span>  {{ item.main.temp}}°</h2> 
         <h3><span>Max tempeture:</span>  {{ item.main.temp_max}}°</h3>
        <h3><span>Min tempeture:</span>  {{ item.main.temp_min}}°</h3>  
       
      </div>
    </v-card>

    <h1>Favorites</h1>
    <h2>PROXIMAMENTE</h2>
    <h3>Podras ver tus ciudades favoritas</h3>
  </div>
</template>

<script>

export default {
  props: {data: Object},
  data(){
    return{
      kelvin:273.15,
    }
  },
//  methods: {
//  tempeture() {
//    const temp = this.data.list.main.temp - this.kelvin;
//    return Math.round(temp);
//  },
// }
}
</script>

<style>
</style>