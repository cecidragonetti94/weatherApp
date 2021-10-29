<template>
  <div class="text-center" >
    <h1>Ciudades de Argentina</h1>
    <v-row>
      <v-col col=12 md=6 xs=2 lg=6 v-for="item in this.data.list"
          :key="item.id">
        <v-card
          class="mx-auto w-100"
          color="secondary"
          
        >
          <v-card-title>
            {{ item.name }} - {{ item.sys.country }}
          </v-card-title>
          <div class="datos">
            <h3><span>Weather:</span> {{ item.weather[0].description }}</h3>
            <h3><span>Humidity:</span> {{ item.main.humidity }}%</h3>
            <h3><span>Pressure:</span> {{ item.main.pressure }}</h3>
            <h2><span>Tempeture:</span> {{ tempeture(item.main.temp) }}°</h2>
            <h3><span>Max tempeture:</span> {{ tempeture(item.main.temp_max) }}°</h3>
            <h3><span>Min tempeture:</span> {{ tempeture(item.main.temp_min) }}°</h3>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: { data: Object },
  data() {
    return {
      kelvin: 273.15,
    };
  },
 methods: {
   tempeture(parametro) {
    const temp = parametro - this.kelvin;
     return Math.round(temp);
  },
   }
};
</script>

<style>
</style>