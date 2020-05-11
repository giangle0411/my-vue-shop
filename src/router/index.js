import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Phones from '../views/Phones.vue'
import Laptops from '../views/Laptops.vue'
import Accessories from '../views/Accessories.vue'
import Sale from '../views/Sale.vue'
import ProductDetails from '../views/ProductDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mobile-phones',
    name: 'Phones',
    component: Phones
  },
  {
    path: '/laptops',
    name: 'Laptops',
    component: Laptops
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: Accessories
  },
  {
    path: '/sale',
    name: 'Sale',
    component: Sale
  },
  {
    path: '/:category/:id',
    name: 'product-details',
    component: ProductDetails,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
