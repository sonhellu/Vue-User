/* eslint-disable import/order */
import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './modules/app'
import appConfig from './modules/app-config'
import verticalMenu from './modules/vertical-menu'
import qlUser from '@/modules/Users/store/index'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    qlUser,
    app,
    appConfig,
    verticalMenu,
    common,
  },
  strict: process.env.DEV,
})
