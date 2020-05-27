import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Phones from '../views/Phones.vue'
import Laptops from '../views/Laptops.vue'
import Accessories from '../views/Accessories.vue'
import Sale from '../views/Sale.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Checkout from '../views/Checkout.vue'
import NotFound from '../views/NotFound.vue'
import NetworkIssue from '../views/NetworkIssue.vue'
import NProgress from 'nprogress'
import store from '../store'

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
    component: Phones,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('phone/fetchPhones').then(() => {
        next()
      })
    }
  },
  {
    path: '/laptops',
    name: 'Laptops',
    component: Laptops,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('laptop/fetchLaptops').then(() => {
        next()
      })
    }
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: Accessories,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('accessory/fetchAccessories').then(() => {
        next()
      })
    }
  },
  {
    path: '/sale',
    name: 'Sale',
    component: Sale
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/:category/:id',
    name: 'product-details',
    component: ProductDetails,
    props: true
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue
  },
  {
    path: '*',
    redirect: { name: '404', params: { resource: 'page' } }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
