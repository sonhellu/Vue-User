/* eslint-disable indent */
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  danhSachProductAll: [],
  danhSachDetailProduct: [],
  danhSachOderHistory: [],
  danhSachProductCart: [],
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
