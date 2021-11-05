# weather-app
## Hosting
https://weather-app-vue.netlify.app
## Sobre el proyecto
En este proyecto, muestro en distintas formas el tiempo climatico.
Utilice la api rest de https://openweathermap.org/
En "search" se puede buscar una ciudad del mundo y te muestra una card con el estado del tiempo de esa ciudad en particular.
En "Argentina" utilice el endpoint de ciudades en circulo en el cual se le pasa una latitud y una longitud y la cantidad de ciudades que queres recibir y te muestra una carta por cada ciudad. 
En "zip code" utilice el endpoint por codigo postal en cual la api solo trae los codigos postales de Estados Unidos. Entonces cree un json con codigos postales de cada estado de EE.UU y mediante un selector, el usuario selecciona el estado que quiere ver su pronostico y le trae su cp y depende ese codigo postal le trae el pronostico del tiempo de esa ciudad en particular. 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
