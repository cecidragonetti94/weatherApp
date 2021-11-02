<template>

<div class="text-center" col="12"
        md="12"
        xs="2"
        lg="8">
  <h1 >THE WEATHER APP</h1>
  <br>
  <p> En esta web podras buscar:</p>
  <ul class="text-center">
  
    <li> Nombre de la ciudad que quieras ver su estado del tiempo en <strong>"search".</strong></li>
    <li> Ciudades argentinas de diferentes lugares del pais para comparar su estado del tiempo en <strong>"Argentina".</strong></li>
    <li> Podes seleccionar un estado de EE.UU con su codigo postal para poder ver el estado del tiempo en esa ciudad en <strong>"Zip Code".</strong> </li>
  </ul>
<br>
<br>
<div>
  <img src="https://lavoz.blob.core.windows.net.optimalcdn.com/images/2021/04/16/ventusky-thumb-770x480.jpg" alt="">
</div>
</div>
</template>

<script>

import Favorites from '../components/CitiesAr.vue'


  export default {
  components: { Favorites},
    name: 'Home',
  
    }
  
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
h1{
  color:#40cbbe;
  font-size:50px;
  font-family: 'Russo One', sans-serif;
}
p{
  font-size:15px;
  font-family: 'Russo One', sans-serif;
  
}
</style>
