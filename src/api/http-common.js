import axios from 'axios'
import _isNil from 'lodash/isNil'
import { DOMAIN, API_VERSION } from '@/constants/constants'
import {
  LOCAL_STORAGE_KEY,
  getValueFromStorageByKey,
} from '@/utils/local-storage'

function buildQueries(params) {
  let requestString = ''
  Object.keys(params).forEach(key => {
    if (!_isNil(params[key]) && params[key] !== '') {
      requestString += `${key}=${params[key]}&`
    }
  })
  return requestString.slice(0, -1)
}

const HTTP = axios.create({
  baseURL: `${DOMAIN}${API_VERSION}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

HTTP.interceptors.request.use(
  config => {
    // eslint-disable-next-line no-unused-expressions
    const token = getValueFromStorageByKey(LOCAL_STORAGE_KEY.ACCESS_TOKEN)
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error),
)

HTTP.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
)

export { HTTP, buildQueries }
