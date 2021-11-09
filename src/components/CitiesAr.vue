<template>

  <div class="text-center" col="12">
    <h1>Ciudades de Argentina</h1>
    <v-row>
      <v-col
        col="12"
        md="4"
        xs="1"
        lg="4"
        v-for="item in this.data.list"
        :key="item.id"
      >
        <v-card class="mx-auto"  color="secondary" max-width=500 >
          <v-card-title >
            {{ item.name }} - {{ item.sys.country }}
            <v-icon
              size="60"
              color="info"
              v-if="item.weather[0].main === 'Clouds'"
              class="ml-5"
            >
              fa-cloud</v-icon
            >
            <v-icon
              size="60"
              color="info"
              v-else-if="item.weather[0].main === 'Rain'"
              class="ml-5"
            >
              fa-cloud-rain</v-icon
            >
            <v-icon
              size="60"
              color="warning"
              v-else-if="item.weather[0].main === 'Clear'"
              class="ml-5"
            >
              fa-sun</v-icon
            >
            <v-icon class="ml-5" size="60" v-else> fa-wind</v-icon>
          </v-card-title>

          <div>
            <h3><span>Weather:</span> {{ item.weather[0].description }}</h3>
            <h3><span>Humidity:</span> {{ item.main.humidity }}%</h3>
            <h3><span>Pressure:</span> {{ item.main.pressure }}</h3>
            <h3><span>Tempeture:</span> {{ tempeture(item.main.temp) }}°</h3>
            <!-- <h3>
              <span>Max tempeture:</span> {{ tempeture(item.main.temp_max) }}°
            </h3>
            <h3>
              <span>Min tempeture:</span> {{ tempeture(item.main.temp_min) }}°
            </h3> -->
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
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

span {
  color: #40cbbe;
}
h1{
  color: #40cbbe;
  font-family:'Russo One', sans-serif;
  font-size: 70px;
}

</style>