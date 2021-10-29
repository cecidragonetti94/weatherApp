<template>

<div class="text-center" col="12"
        md="12"
        xs="2"
        lg="8">
  <h1 >THE WEATHER APP</h1>
  <br>
  <p>
    Para poder buscar el estado del tiempo en una ciudad, por favor diríjase a nuestro menú
    y seleccione <strong>city</strong> .  Una vez que estes dentro de "city" podras buscar la ciudad que quieras.
  </p>
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
