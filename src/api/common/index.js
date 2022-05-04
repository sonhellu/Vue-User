import { HTTP } from '@/api/http-common'
import ENDPOINT from '@/api/endpoints'

export function callApiDangNhap(payload) {
  return HTTP({
    url: ENDPOINT.AUTH.DANG_NHAP,
    method: 'POST',
    data: payload,
  })
}

export function callApiRefreshToken(payload) {
  return HTTP({
    url: ENDPOINT.AUTH.REFRESH_TOKEN,
    method: 'POST',
    data: payload,
  })
}
