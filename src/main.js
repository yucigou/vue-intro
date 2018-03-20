// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './firebase';
import VueFire from 'vuefire';

import firebase from 'firebase';

Vue.use(VueFire);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/success')
      } else {
        this.$router.push('/auth')
      }
    });
  }
})
