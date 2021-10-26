.<template>
  <v-form @submit.prevent="handleCity" class="form-search">
      <v-text-field v-model="city" label="Enter City"></v-text-field>
      <v-btn color="success" type="submit">Search</v-btn>
  </v-form>
</template>

<script>
export default {
    data(){
        return{
            city: '',
        }
    },
    methods:{
        handleCity(){
            this.$emit("accion", this.city)
        }
    }
}
</script>

<style>

</style>