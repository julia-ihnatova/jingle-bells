/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import LetItSnow from 'vue-let-it-snow';

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyC--CnDlHZ56dbGCf5b5Su_QpqOk2dzEko",
        libraries: "places" // necessary for places input
    }
});

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(LetItSnow);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
