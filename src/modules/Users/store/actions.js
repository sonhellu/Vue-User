/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  callAPIDangNhap,
  callAPIAllProduct,
  callAPIOderHistory,
  callAPIBuyProduct,
  callAPIProductDetail,
  callAPIAllCategory,
  callAPIAddToCard,
  callAPIAllCard,
  callAPIDeleteCard,
  callAPIHistoryOrder,
  callAPIHistoryDelete,
  callAPIDangKi,
} from '@/modules/Users/api/index'
// eslint-disable-next-line import/no-cycle

const layDuLieuDangNhap = (context, payload) => new Promise((resolve, reject) => {
  callAPIDangNhap(payload)
    .then(response => {
      if (response) {
        resolve(response)
      }
    })
    .catch(error => {
      reject(error)
    })
})
const layDuLieuDangKi = (context, payload) => new Promise((resolve, reject) => {
  callAPIDangKi(payload)
    .then(response => {
      if (response) {
        resolve(response)
      }
    })
    .catch(error => {
      reject(error)
    })
})
const layDuLieuProductAll = (context, payload) => new Promise((resolve, reject) => {
  callAPIAllProduct(payload)
    .then(response => {
      if (response) {
        context.commit('DANH_SACH_PRODUCT_ALL', response.data)
      }
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
})
const layDuLieuOderHistory = (context, payload) => new Promise((resolve, reject) => {
  callAPIOderHistory(payload)
    .then(response => {
      if (resolve) {
        context.commit('DANH_SACH_ODER_HISTORY', response.data)
      }
    })
    .catch(error => {
      reject(error)
    })
})
const layDuLieuBuyProduct = (context, payload) => new Promise((resolve, reject) => {
  callAPIBuyProduct(payload)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
})
const layDuLieuProductDetail = (context, payload) => new Promise((resolve, reject) => {
  callAPIProductDetail(payload)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
})

const layDuLieuCategoryAll = (context, payload) => new Promise((resolve, reject) => {
  callAPIAllCategory(payload)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
})

const addProductToCart = (context, payload) => new Promise((resolve, reject) => {
  callAPIAddToCard(payload)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
})

const getAllProductCart = (context, payload) => new Promise((resolve, reject) => {
  callAPIAllCard(payload)
    .then(response => {
      if (response) {
        context.commit('DANH_SACH_PRODUCT_CART', response.data.data)
      }
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
})

const deleteProductToCart = (context, payload) => new Promise((resolve, reject) => {
  callAPIDeleteCard(payload)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
})

const getHistoryOrder = (context, payload) => new Promise((resolve, reject) => {
  callAPIHistoryOrder(payload)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
})

const getHistoryDelete = (context, payload) => new Promise((resolve, reject) => {
  callAPIHistoryDelete(payload)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
})

export default {
  layDuLieuDangKi,
  getHistoryDelete,
  getHistoryOrder,
  deleteProductToCart,
  getAllProductCart,
  addProductToCart,
  layDuLieuCategoryAll,
  layDuLieuProductDetail,
  layDuLieuBuyProduct,
  layDuLieuOderHistory,
  layDuLieuProductAll,
  layDuLieuDangNhap,
}
