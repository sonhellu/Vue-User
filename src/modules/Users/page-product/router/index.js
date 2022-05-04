// eslint-disable-next-line import/prefer-default-export
export const router = [
  {
    path: '/page-product',
    name: 'page-product',
    component: () => import('@/modules/Users/page-product/views/PageProduct.vue'),
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
