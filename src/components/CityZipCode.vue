<template>
  <v-container fluid class="text-center">
    <p>Seleccione un estado para ver su pronóstico climático.</p>
    <small>La api solo permite la llamada a estados de USA</small>
    <br>
    <v-row class="d-inline">
    
      <v-col cols="6">
        <v-select
          v-model="select"
          label="Estado"
          :items="states"
          item-text="name"
          item-value="cp"
          persistent-hint
          return-object
          single-line
          menu-props="auto"
          @change="(valor) => changeState(valor)"
        >
        </v-select>
      </v-col>
      <v-col cols="12" sm="3" md="3">
        <v-text-field v-model="select" label="Código Postal"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      states: [],
      select: "",
    };
  },
  created() {
    this.setStates();
  },

  methods: {
    async setStates() {
      try {
        const { data } = await this.axios.get("cp.json");
        this.states = data;
        // console.log("estados", this.states);
      } catch (error) {
        console.log(error);
      }
    },
    changeState(valor) {
      this.select = valor.cp;
      this.$emit("change", this.select);
    },
    
  },
};
</script>

<style>
</style>