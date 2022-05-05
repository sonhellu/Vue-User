<template>
  <b-form
    class="list-view product-checkout"
    @submit.prevent="handleSubmit"
  >
    <b-card no-body>
      <b-card-header class="flex-column align-items-start ">
        <b-card-title class="m-0 pl-0">
          Xác nhận đơn hàng
        </b-card-title>
        <b-card-text class="text-muted mt-25">
          Nhấn Đặt hàng để xác nhận
        </b-card-text>
      </b-card-header>
      <b-card-body>
        <h6 class="card-holder-name my-75">
          {{ UserInfor.username }}
        </h6>

        <!-- Radios -->
        <b-form-group>
          <b-form-radio
            name="payment-method"
            value="john-doe-debit-card"
            checked="john-doe-debit-card"
          >
            Thanh toán khi nhận hàng
          </b-form-radio>
          <div
            class="d-flex flex-wrap align-items-center justify-content-start my-1"
          >
            <!-- <label
              for="cvv"
              class="text-nowrap mr-1 mb-1"
            >
              Enter CVV:
            </label>
            <b-form-input
              id="cvv"
              v-model="paymentDetails.payment.cvv"
              class="mr-1 mb-1"
              trim
            /> -->
          </div>

          <hr class="mb-2 mt-1">

          <b-form-radio
            name="payment-method"
            value="debit-atm-credit-card"
          >
            Credit / Debit / ATM Card
          </b-form-radio>
          <b-form-radio
            name="payment-method"
            class="mt-1"
            value="cod"
          >
            Thanh toán thẻ tín dụng
          </b-form-radio>
        </b-form-group>

        <hr class="my-2">
        <div class="text-right">
          <b-button
            variant="primary"
            class="mb-1"
            type="submit"
          >
            Đặt hàng
          </b-button>
        </div>
      </b-card-body>
    </b-card>
    <!-- Right Card -->
    <div class="amount-payable checkout-options">
      <b-card>
        <ul class="list-unstyled price-details">
          <li class="price-detail">
            <h3 class="details-title">
              Tổng quan
            </h3>
            <div class="detail-amt" />
          </li>
          <li class="price-detail">
            <div class="details-title">
              Tổng tiền của {{ paymentDetails.total.listProduct.length }} sản
              phẩm
            </div>
            <div class="detail-amt">
              <strong>{{ paymentDetails.total.total.toLocaleString() }} đ</strong>
            </div>
          </li>
          <li class="price-detail">
            <div class="details-title">
              Phí vận chuyển
            </div>
            <div class="detail-amt discount-amt text-success">
              Miễn phí
            </div>
          </li>
        </ul>
        <hr>
        <ul class="list-unstyled price-details">
          <li class="price-detail">
            <div class="details-title">
              Tổng tiền thanh toán
            </div>
            <div class="detail-amt font-weight-bolder">
              {{ paymentDetails.total.total.toLocaleString() }} đ
            </div>
          </li>
        </ul>
      </b-card>
    </div>
  </b-form>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardTitle,
  BCardText,
  BCardBody,
  BFormGroup,
  BFormRadio,
  // BFormInput,
  BButton,
  BForm,
} from 'bootstrap-vue'

export default {
  components: {
    // BSV
    BForm,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BFormGroup,
    BFormRadio,
    // BFormInput,
    BButton,
  },
  props: {
    paymentDetails: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      UserInfor: JSON.parse(localStorage.getItem('UserData')),
    }
  },
  computed: {
    detailPayment() {
      const newArr = []
      this.paymentDetails.total.listProduct.forEach(item => {
        newArr.push({
          color: '',
          gender: 0,
          price: item.price,
          product_id: item.product_id,
          quantity: item.quantity,
          size: 'string',
          total_price: item.price * item.quantity,
        })
      })
      return newArr
    },
  },
  methods: {
    handleSubmit() {
      this.$store
        .dispatch('qlUser/layDuLieuBuyProduct', {
          address: this.paymentDetails.address.address,
          email: this.paymentDetails.address.email,
          full_name: this.paymentDetails.address.fullName,
          list_order_details: this.detailPayment,
          phone: this.paymentDetails.address.mobile,
          total_price: this.paymentDetails.total.total,
          user_name: this.UserInfor.username,
        })
        .then(res => {
          if (res && res.data && res.data.statusCodeValue === 200) {
            this.$toasted.global.showSuccessMessage({
              message: res.data.body,
            })
            this.$router.push({
              path: '/page-product',
            })
          } else {
            this.$toasted.global.showErrorMessage({
              message: 'Mua hàng thất bại!',
            })
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
#cvv {
  width: auto;
}
</style>
