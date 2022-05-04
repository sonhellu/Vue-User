// eslint-disable-next-line import/prefer-default-export
export const router = [
  {
    path: '/list-products-all',
    name: 'list-products-all',
    component: () => import('@/modules/Users/list-products-all/views/ListProductsAll.vue'),
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
