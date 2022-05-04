import { $themeConfig } from '@themeConfig'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  layout: {
    isRTL: $themeConfig.layout.isRTL,
    skin: localStorage.getItem('vuexy-skin') || $themeConfig.layout.skin,
    routerTransition: $themeConfig.layout.routerTransition,
    type: $themeConfig.layout.type,
    contentWidth: $themeConfig.layout.contentWidth,
    menu: {
      hidden: $themeConfig.layout.menu.hidden,
    },
    navbar: {
      type: $themeConfig.layout.navbar.type,
      backgroundColor: $themeConfig.layout.navbar.backgroundColor,
    },
    footer: {
      type: $themeConfig.layout.footer.type,
    },
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
