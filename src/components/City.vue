<template>
  <v-card color="secondary" class="mx-auto" max-width="400" min-height="500">
    <v-card-text>
      
      <h1 mb-3 class="text-center">
        {{ data.name }} - {{ data.sys.country }}
        <v-icon
          size="60"
          color="info"
          v-if="this.data.weather[0].main === 'Clouds'"
        >
          fa-cloud</v-icon
        >
        <v-icon
          size="60"
          color="info"
          v-else-if="this.data.weather[0].main === 'Rain'"
        >
          fa-cloud-rain</v-icon
        >
        <v-icon
          size="60"
          color="warning"
          v-else-if="this.data.weather[0].main === 'Clear'"
        >
          fa-sun</v-icon
        >
        <v-icon size="60" v-else> fa-wind</v-icon>
      </h1>
      <hr />
      <div class="datos">
      
        <h2><span>Weather:</span>  {{ data.weather[0].main }}</h2>
        <h2><span>Humidity:</span>  {{ data.main.humidity }}%</h2>
        <h2><span>Pressure:</span>  {{ data.main.pressure }}</h2>
        <h2><span>Tempeture:</span>  {{ tempeture(data.main.temp) }}°</h2>
        <h3><span>Max tempeture:</span>  {{ tempeture(data.main.temp_max) }}°</h3>
        <h3><span>Min tempeture:</span>  {{ tempeture(data.main.temp_min) }}°</h3>
       
      </div>
    </v-card-text>
   
  </v-card>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      kelvin: 273.15,
      
    };
  },
  methods: {
    tempeture(tempe) {
      const temp = tempe - this.kelvin;
      return Math.round(temp);
    },
    
    
  },
};
</script>

<style>
span {
  color: #40cbbe;
}
h2,h3{
  font-size: 30px;
}
h1{
  font-size: 40px;
}
.datos{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 500px;
  align-items: center;
}
</style>