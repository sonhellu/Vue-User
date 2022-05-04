/*

NOTE: tag is not supported in horizontal menu

Array of object

Top level object can be:
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- nav Grp (top level grp is called header group) ---/

title
icon (if it's on top/second level)
children

/--- nav Item (top level item is called header link) ---/

icon (if it's on top/second level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)

*/
import trangChu from '../../modules/trang-chu/navigation/horizontal/trang-chu'
import pageProduct from '../../modules/Users/page-product/navigation/horizontal/page-product'
import listProductsAll from '../../modules/Users/list-products-all/navigation/horizontal/list-products-all'
import detailProduct from '../../modules/Users/detail-product/navigation/horizontal/detail-product'
import checkoutPay from '../../modules/Users/checkout-pay/navigation/horizontal/checkout-pay'
// Array of sections
export default [...trangChu, ...pageProduct, ...listProductsAll, ...detailProduct, ...checkoutPay]
