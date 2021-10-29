.<template>
  <favorites :data="bbox"/>
</template>

<script>
import Favorites from '../components/Favorites.vue'
export default {
  components: { Favorites },
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
     const lat = -34.6132
     const lon = -58.3772
     const cant = 10
     const {data} = await this.axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${cant}&appid=${key}`)
    this.bbox = data
    console.log("la data", this.bbox)
    }
  }
}
</script>

<style>

</style>