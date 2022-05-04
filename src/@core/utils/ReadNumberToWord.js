const ChuSo = [' không ', ' một ', ' hai ', ' ba ', ' bốn ', ' năm ', ' sáu ', ' bảy ', ' tám ', ' chín ']
const Tien = ['', ' nghìn', ' triệu', ' tỷ', ' nghìn ', ' triệu ']
function DocSo3ChuSo(baso) {
  let KetQua = ''
  const tram = parseInt(baso / 100, 10)
  const chuc = parseInt((baso % 100) / 10, 10)
  const donvi = baso % 10
  if (tram === 0 && chuc === 0 && donvi === 0) return ''
  if (tram !== 0) {
    KetQua += `${ChuSo[tram]} trăm `
    if ((chuc === 0) && (donvi !== 0)) KetQua += ' linh '
  }
  if ((chuc !== 0) && (chuc !== 1)) {
    KetQua += `${ChuSo[chuc]} mươi `
    if ((chuc === 0) && (donvi !== 0)) KetQua += ' linh '
  }
  if (chuc === 1) KetQua += ' mười '
  switch (donvi) {
    case 1:
      if ((chuc !== 0) && (chuc !== 1)) {
        KetQua += ' mốt '
      } else {
        KetQua += ChuSo[donvi]
      }
      break
    case 5:
      if (chuc === 0) {
        KetQua += ChuSo[donvi]
      } else {
        KetQua += ' lăm '
      }
      break
    default:
      if (donvi !== 0) {
        KetQua += ChuSo[donvi]
      }
      break
  }
  return KetQua
}
function DocTienBangChu(SoTien) {
  let lan = 0
  let i = 0
  let so = 0
  let KetQua = ''
  let tmp = ''
  const ViTri = []
  if (SoTien < 0) return 'Số tiền âm'
  if (SoTien === 0) return ''
  if (SoTien > 0) {
    so = SoTien
  } else {
    so = -SoTien
  }
  if (SoTien > 900000000000000) {
    // SoTien = 0;
    return 'Số quá lớn'
  }
  ViTri[5] = Math.floor(so / 1000000000000000)
  if (Number.isNaN(ViTri[5])) ViTri[5] = '0'
  so -= parseFloat(ViTri[5].toString()) * 1000000000000000
  ViTri[4] = Math.floor(so / 1000000000000)
  if (Number.isNaN(ViTri[4])) ViTri[4] = '0'
  so -= parseFloat(ViTri[4].toString()) * 1000000000000
  ViTri[3] = Math.floor(so / 1000000000)
  if (Number.isNaN(ViTri[3])) ViTri[3] = '0'
  so -= parseFloat(ViTri[3].toString()) * 1000000000
  ViTri[2] = parseInt(so / 1000000, 10)
  if (Number.isNaN(ViTri[2])) ViTri[2] = '0'
  ViTri[1] = parseInt((so % 1000000) / 1000, 10)
  if (Number.isNaN(ViTri[1])) ViTri[1] = '0'
  ViTri[0] = parseInt(so % 1000, 10)
  if (Number.isNaN(ViTri[0])) ViTri[0] = '0'
  if (ViTri[5] > 0) {
    lan = 5
  } else if (ViTri[4] > 0) {
    lan = 4
  } else if (ViTri[3] > 0) {
    lan = 3
  } else if (ViTri[2] > 0) {
    lan = 2
  } else if (ViTri[1] > 0) {
    lan = 1
  } else {
    lan = 0
  }
  for (i = lan; i >= 0; i -= 1) {
    tmp = DocSo3ChuSo(ViTri[i])
    KetQua += tmp
    if (ViTri[i] > 0) KetQua += Tien[i]
    if ((i > 0) && (tmp.length > 0)) KetQua += ' '// && (!string.IsNullOrEmpty(tmp))
  }
  if (KetQua.substring(KetQua.length - 1) === ',') {
    KetQua = KetQua.substring(0, KetQua.length - 1)
  }
  KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2)
  if (KetQua === '') {
    return ''
  }

  return `${KetQua}đồng`// .substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
}
export { DocSo3ChuSo, DocTienBangChu }
