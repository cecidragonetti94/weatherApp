<template>
  <v-form @submit.prevent="handleCity" class="form-search">
      <v-text-field v-model.trim="city" label="Enter City"> </v-text-field>
       
      <v-btn color="success" :disabled="isDisabled" type="submit">Search</v-btn>

  </v-form>
</template>

<script>
export default {
    data(){
        return{
            city: '',
            
            
        }
    },
    computed:{
        isDisabled(){
            return !this.city
        }
    },
    methods:{
        handleCity(){
            this.$emit("accion", this.city)
            
        },
        
    }
}
</script>

<style>
.form-search{
    margin-right: 500px;
    display: flex;
    align-items:  center;
    margin-left: 500px;
    margin-bottom: 30px;


}
</style>