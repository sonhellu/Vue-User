export const DOMAIN = 'http://localhost:8999'

export const API_VERSION = ''
export const ROUTE_NAME = {
  TRANG_CHU: '/trang-chu',
  DANG_NHAP: '/dang-nhap',
  CHUA_CO_QUYEN: '/chua-co-quyen',
  QUAN_TRI_HE_THONG: {
    NAME: '/quan-tri-he-thong/',
    VAI_TRO: 'vai-tro',
    XEM_CHI_TIET_VAI_TRO: 'vai-tro/:id/xem',
    CAP_NHAT_VAI_TRO: 'vai-tro/:id',
    NGUOI_DUNG: 'nguoi-dung',
    XEM_CHI_TIET_NGUOI_DUNG: 'nguoi-dung/:id/xem',
    CAP_NHAT_NGUOI_DUNG: 'nguoi-dung/:id',
  },
}

export const MENU_ROUTE_NAME = {
  TRANG_CHU: 'Dashboard',
  QUAN_TRI_HE_THONG: {
    NAME: 'Quản trị hệ thống',
    VAI_TRO: 'Quản lý vai trò',
    XEM_VAI_TRO: 'Xem thông tin vai trò',
    CAP_NHAT_VAI_TRO: 'Cập nhật vai trò',
    NGUOI_DUNG: 'Quản lý người dùng',
    XEM_NGUOI_DUNG: 'Xem thông tin người dùng',
    CAP_NHAT_NGUOI_DUNG: 'Cập nhật người dùng',
  },
}

export const PERMISSION_NAME = {
  QUAN_LY_VAI_TRO: 'QuanLyVaiTro',
  NGUOI_DUNG: 'NguoiDung',
  QUYEN: 'Quyen',
  TEN_QUAN_TRI: 'QuanTri',
  QUAN_TRI_HE_THONG: 'QuanTriHeThong',
  QUAN_TRI_HE_THONG_NGUOI_DUNG: 'QuanTriHeThongNguoiDung',
}

export const VAI_TRO_TAB = {
  THONG_TIN_VAI_TRO: 'thong-tin-nhom',
  NGUOI_DUNG: 'nguoi-dung',
  QUYEN: 'quyen',
}

export const NGUOI_DUNG_TAB = {
  THONG_TIN_NGUOI_DUNG: 'thong-tin-nguoi-dung',
  VAI_TRO: 'vai-tro',
  QUYEN: 'quyen',
}

export const NO_RESULTS_TEXT = 'Không tìm thấy kết quả'

export const TREE_SELECT_PLACEHOLDER = 'Chọn đơn vị'

export const MA_TRA_LOI = {
  THANH_CONG: 1,
  THAT_BAI: 0,
}

export const PERMISSION_ROLE = {
  XEM: 'Xem',
  CAP_NHAT: 'CapNhat',
}

export const BANG_NGUOI_DUNG = {
  checkbox: '',
  stt: 'STT',
  name: 'Họ và tên',
  userName: 'Tên đăng nhập',
  groups: 'Vai trò',
  thaoTac: 'Thao tác',
  trangThai: 'Trạng thái',
}

export const BANG_VAI_TRO = {
  checkbox: '',
  stt: 'STT',
  name: 'Tên vai trò',
  description: 'Mô tả vai trò',
  displayName: 'Tên hiển thị vai trò',
  thaoTac: 'Thao tác',
}

export const BANG_DANH_SACH_QUYEN = {
  name: 'Mã quyền',
  displayName: 'Tên quyền',
  thaoTac: 'Thao tác',
}

export const BO_QUA_BUTTON_LABEL = 'Bỏ qua'
export const DONG_Y_BUTTON_LABEL = 'Đồng ý'

export const PER_PAGE_OPTIONS = [10, 25, 50, 100]
