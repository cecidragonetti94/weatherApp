<template>
<v-container class="text-center">
 <v-row align-content-lg="center" col="12"
        md="12"
        xs="2"
        lg="8" >
    <v-col>
      <v-form @submit.prevent="handleCity" >
        <h3>Busca la ciudad que quieras y mira su pronostico para hoy</h3>
        <v-text-field v-model.trim="city" label="Enter City"> </v-text-field>

        <v-btn color="accent" :disabled="isDisabled" type="submit"
          >Search</v-btn
        >
      </v-form>
    </v-col>
  </v-row>
</v-container>
 
</template>

<script>
export default {
  data() {
    return {
      city: "",
    };
  },
  computed: {
    isDisabled() {
      return !this.city;
    },
  },
  methods: {
    handleCity() {
      this.$emit("accion", this.city);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
h3{
 font-family: 'Russo One', sans-serif;
}
</style>