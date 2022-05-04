// eslint-disable-next-line import/prefer-default-export
export const router = [
  {
    path: '/detail-product',
    name: 'detail-product',
    component: () => import('@/modules/Users/detail-product/views/DetailProduct.vue'),
    meta: {
      contentClass: 'ecommerce-application',
      breadcrumb: [
        {
          text: 'Quản lí đơn hàng',
          active: true,
        },
      ],
    },
  },
]
