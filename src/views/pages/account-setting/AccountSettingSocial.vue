<template>
  <div class="list-view product-checkout mt-0">
    <!-- Products List -->
    <h5
      v-if="danhSachGetListOrder.length === 0"
      class="text-center"
    >
      Bạn chưa có đơn hàng nào!
    </h5>
    <div
      v-if="danhSachGetListOrder.length > 0"
      class="checkout-items"
    >
      <b-card
        v-for="product in danhSachGetListOrder"
        :key="product.id"
        class="ecommerce-card cardOrderHis"
        no-body
      >
        <!-- Product Image -->

        <!-- Product Details: Card Body -->
        <b-card-body>
          <div class="item-name">
            <h3 class="m-0 p-0 texttile">
              <b-link class="text-body">
                {{ product.full_name }}
              </b-link>
            </h3>
            <span class="item-company">
              <span class="quantity-title">Số điện thoại: </span>
              <b-link class="text-success">{{
                product.phone_number
              }}</b-link></span>
          </div>
          <div class="item-quantity">
            <span class="quantity-title">Thời gian tạo đơn: </span>
            <span class="text-success">{{
              new Date(product.created_at).toLocaleDateString('en-US')
            }}</span>
          </div>
          <div class="item-quantity">
            <span class="quantity-title">Tình trạng đơn hàng: </span>
            <span class="text-success">{{
              product.status === 0
                ? 'Chờ duyệt'
                : product.status === 1
                  ? 'Đã duyệt'
                  : 'Đã hủy'
            }}</span>
          </div>
          <div class="item-quantity">
            <span class="quantity-title">Địa chỉ giao hàng: </span>
            <span class="text-success">{{ product.address }}</span>
          </div>
          <span
            class="quantity-title mb-1 "
          >Tổng giá tiền:
            <span class="text-success">
              {{ product.price.toLocaleString() }} đ
            </span></span>
        </b-card-body>

        <!-- Product Options/Actions -->
        <div class="item-options text-center d-flex orderHistoryButton pr-2">
          <b-button
            v-if="product.status !== 2 && product.status !== 1"
            variant="light"
            class="remove-wishlist"
            @click="showModalDelete(product.order_id)"
          >
            <feather-icon
              icon="XIcon"
              class="mr-50"
            />
            <span>Hủy đơn hàng</span>
          </b-button>
          <b-button
            variant="primary"
            class="mb-1 btn-cart move-cart"
          >
            <span class="text-nowrap">Xem đơn hàng</span>
          </b-button>
        </div>
      </b-card>
    </div>
    <PopupNotifi
      ref="popupNoti"
      :title="title"
      :noti="textDelete"
      @handleAccept="handleDelete"
    />
  </div>
</template>

<script>
import {
  BButton, BCard, BCardBody, BLink,
} from 'bootstrap-vue'
import PopupNotifi from './PopupNotifi.vue'
// import CheckoutStepCartProducts from './CheckoutStepCartProducts.vue'

export default {
  components: {
    BCardBody,
    BLink,
    BButton,
    BCard,
    PopupNotifi,
    // SFC
    // CheckoutStepCartProducts,
  },
  props: {},
  data() {
    return {
      idRow: null,
      title: '',
      textDelete: '',
      UserInfor: JSON.parse(localStorage.getItem('UserData')),
      danhSachGetListOrder: [],
    }
  },
  computed: {},
  created() {
    this.getListHistoryOrder()
  },
  methods: {
    // convertTime(value) {
    //   const date = new Date(value)
    // },
    showModalDelete(idRow) {
      this.idRow = idRow
      this.title = 'XÁC NHẬN HỦY ĐƠN HÀNG'
      this.textDelete = 'Bạn có muốn hủy đơn hàng không ?'
      this.$refs.popupNoti.showModal()
    },
    handleDelete() {
      this.$store
        .dispatch('qlUser/getHistoryDelete', {
          id: this.idRow,
        })
        .then(res => {
          if (res && res.status === 200) {
            this.$toasted.global.showSuccessMessage({
              message: 'Hủy đơn hàng thành công!',
            })
            this.getListHistoryOrder()
          } else {
            this.$toasted.global.showErrorMessage({
              message: 'Hủy đơn hàng thất bại!',
            })
          }
        })
    },
    getListHistoryOrder() {
      this.$store
        .dispatch('qlUser/getHistoryOrder', {
          user_name: this.UserInfor.username,
        })
        .then(res => {
          if (res && res.data && res.data.status === 200) {
            this.danhSachGetListOrder = res.data.data
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.cardOrderHis {
  font-size: 14px !important;
  flex-direction: row;
}
.orderHistoryButton {
  flex-direction: column-reverse;
  justify-content: center;
  align-items: stretch;
}
.texttile {
  font-weight: bold;
}
</style>
