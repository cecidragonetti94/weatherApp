.<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <h1 mb-3>{{ data.name }} - {{ data.sys.country }} 
        <v-icon size="60" color="info" v-if="this.data.weather[0].main === 'Clouds'"> fa-cloud</v-icon>
          <v-icon size="60" color="info" v-else-if="this.data.weather[0].main === 'Rain'"> fa-cloud-rain</v-icon>
          <v-icon size="60" color="warning" v-else-if="this.data.weather[0].main === 'Clear'"> fa-sun</v-icon>
           <v-icon size="60" v-else> fa-wind</v-icon>
      </h1>
      <hr />
      <div>
         <h3>Weather: {{ data.weather[0].main }}</h3>
        <h3>Humidity: {{ data.main.humidity }}%</h3>
        <h3>Pressure: {{ data.main.pressure }}</h3>
        <h3>Tempeture: {{ data.main.temp }} F</h3>
        <h4>Max tempeture: {{ data.main.temp_max }} F</h4>
        <h4>Min tempeture: {{ data.main.temp_min }} F</h4>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="teal accent-4"> Learn More </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">Origin</p>
          <p>
            late 16th century (as a noun denoting a place where alms were
            distributed): from medieval Latin eleemosynarius, from late Latin
            eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="teal accent-4"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
 props:{
     data:Object,
 },

}
</script>

<style>
</style>