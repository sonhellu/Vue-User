/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { HTTP } from '@/api/http-common'
import ENDPOINT from './endpoints'

export function callAPIDangNhap(payload) {
  return HTTP({
    url: ENDPOINT.AUTH.LOGIN,
    method: 'POST',
    data: payload,
  })
}

export function callAPIDangKi(payload) {
  return HTTP({
    url: ENDPOINT.AUTH.SIGN_UP,
    method: 'POST',
    data: payload,
  })
}

export function callAPIBuyProduct(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.BUY_PRODUCT,
    method: 'POST',
    data: payload,
  })
}

export function callAPIOderHistory(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.ORDER_HISTORY,
    method: 'POST',
    data: payload,
  })
}

export function callAPIAllProduct(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.ALL_PRODUCT,
    method: 'GET',
    params: payload,
  })
}

export function callAPIProductDetail(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.PRODUCT_DETAIL,
    method: 'GET',
    params: payload,
  })
}

export function callAPIAllCategory(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.ALL_CATEGORY,
    method: 'GET',
    params: payload,
  })
}

export function callAPIAddToCard(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.ADD_CARD,
    method: 'POST',
    data: payload,
  })
}

export function callAPIAllCard(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.ALL_CARD,
    method: 'GET',
    params: payload,
  })
}
export function callAPIDeleteCard(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.DELETE_PRODUCT,
    method: 'POST',
    params: payload,
  })
}

export function callAPIHistoryOrder(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.HISTORYORDER,
    method: 'POST',
    data: payload,
  })
}

export function callAPIHistoryDelete(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.DELETE_ORDER,
    method: 'POST',
    params: payload,
  })
}

export function callAPIGetUser(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.GET_USER,
    method: 'POST',
    data: payload,
  })
}

export function callAPIUpdateUser(payload) {
  return HTTP({
    url: ENDPOINT.CUSTOMER.UPDATE_USER,
    method: 'POST',
    data: payload,
  })
}
