<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="6">
        <v-subheader>
 CP
        </v-subheader>
      </v-col>

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
        >
      </v-select>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  // props: {
  //   text: String,
  // },
  data() {
    return {
      states: {},
      //  select: { state: 'Florida', abbr: 'FL' },
      //  items: [
      //    { state: 'Florida', abbr: 'FL' },
      //   { state: 'Georgia', abbr: 'GA' },
      //  { state: 'Nebraska', abbr: 'NE' },
      //   { state: 'California', abbr: 'CA' },
      //    { state: 'New York', abbr: 'NY' },
      //  ],
       select: null,
    };
  },
  created() {
    this.setStates();
  },

  methods: {
    async setStates() {
      try {
        const {data} = await this.axios.get("cp.json");
        this.states = data
        console.log("estados", states);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>