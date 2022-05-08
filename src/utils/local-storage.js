export const LOCAL_STORAGE_KEY = {
  ACCESS_TOKEN: 'access_token',
  // access_Token
  REFRESH_TOKEN: 'refreshToken',
  PERMISSION_NAME: 'permissionName',
  PERMISSION_DECENTRALIZATION: 'permissionDecentralization',
  USER_DATA: 'userData',
}

export function getValueFromStorageByKey(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function setValueToStorageByKey(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function removeValueToStorageByKey(key) {
  localStorage.removeItem(key)
}
