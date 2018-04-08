import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Meal from '@/components/Meal'
import Counter from '@/components/Counter'
import CalorieCalculator from '@/components/CalorieCalculator'
import FirebaseCalorieCalculator from '@/components/FirebaseCalorieCalculator'

import Auth from '@/components/Auth.vue';
import AuthSuccess from '@/components/AuthSuccess.vue';

import Xslt from '@/components/Xslt.vue';
import PopupParent from '@/components/PopupParent.vue';
import PopupChild from '@/components/PopupChild.vue';

import CountryData from '@/components/CountryData.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/meal',
      name: 'Meal',
      component: Meal
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/calorie-calculator',
      name: 'CalorieCalculator',
      component: CalorieCalculator
    },
    {
      path: '/firebase-calorie-calculator',
      name: 'FirebaseCalorieCalculator',
      component: FirebaseCalorieCalculator
    },
    {
      path: '/auth',
      component: Auth
    },
    {
      path: '/success',
      component: AuthSuccess
    },
    {
      path: '/xslt',
      component: Xslt
    },
    {
      path: '/popup-parent',
      component: PopupParent
    },
    {
      path: '/popup-child',
      component: PopupChild,
      name: 'popupChild'
    },
    {
      path: '/country-data',
      component: CountryData,
      name: 'countryData'
    }
  ]
})
