const DANH_SACH_PRODUCT_ALL = (state, danhSachProductAll) => {
  state.danhSachProductAll = danhSachProductAll
}

const DANH_SACH_ODER_HISTORY = (state, danhSachOderHistory) => {
  state.danhSachOderHistory = danhSachOderHistory
}

const DANH_SACH_PRODUCT_DETAIL = (state, danhSachDetailProduct) => {
  state.danhSachDetailProduct = danhSachDetailProduct
}
const DANH_SACH_PRODUCT_CART = (state, danhSachProductCart) => {
  state.danhSachProductCart = danhSachProductCart
}
export default {
  DANH_SACH_PRODUCT_CART,
  DANH_SACH_PRODUCT_DETAIL,
  DANH_SACH_PRODUCT_ALL,
  DANH_SACH_ODER_HISTORY,
}
