// eslint-disable-next-line import/prefer-default-export
export const router = [
  {
    path: '/checkout-pay',
    name: 'checkout-pay',
    component: () => import('@/modules/Users/checkout-pay/views/CheckoutPay.vue'),
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
