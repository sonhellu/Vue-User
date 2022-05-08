/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { getValueFromStorageByKey } from '@/utils/local-storage'
import trangChu from './trang-chu'
import pages from './pages'
import pageProduct from './page-product'
import listProductsAll from './list-products-all'
import detailProduct from './detailProduct'
import checkoutPay from './checkoutPay'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'page-product' } },
    ...trangChu,
    ...pageProduct,
    ...listProductsAll,
    ...detailProduct,
    ...checkoutPay,
    ...pages,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, _, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = getValueFromStorageByKey('access_Token')
  if (!authRequired && loggedIn) {
    return next('/page-product')
  }

  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
