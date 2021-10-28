import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#7D3C98', //violeta
        secondary: '#EDD8F5',//violeta clarito
        accent: '#58D68D',//verde
        error: '#FF5252',
        info: '#AAB7B8',// gris
        success: '#5D6D7E',//azulgris
        warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
