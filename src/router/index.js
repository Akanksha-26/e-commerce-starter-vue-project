import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import Checkout from '@/components/checkout/checkout.vue'
import Payment from '@/components/payment/payment.vue'
import Admin from '@/components/admin/admin.vue'

Vue.use(Router)

// console.log(homeComponent)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
