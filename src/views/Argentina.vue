.<template>
  <CitiesAr :data="bbox"/>
</template>

<script>
import CitiesAr from '../components/CitiesAr.vue'
export default {
  components: { CitiesAr },
  data(){
    return{
      bbox:[]
    }
  },
  created(){
    this.getBbox()
  },
  methods:{
   async getBbox(){
     const key = "4af561725919418cf813bd0a77f4b185"
     const lat = -38.416097
     const lon = -63.616672
     const cant = 9
     const {data} = await this.axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${cant}&appid=${key}`)
    this.bbox = data
    console.log("la data", this.bbox)
    }
  }
}
</script>

<style>

</style>