<template>
  <div class="list-view product-checkout mt-0">
    <!-- Products List -->
    <div class="checkout-items">
      <b-card
        v-for="product in danhSachProductCart"
        :key="product.id"
        class="ecommerce-card"
        no-body
      >
        <!-- Product Image -->
        <div class="item-img">
          <b-link>
            <b-img
              :src="product.product_image"
              :alt="`${product.product_name}-${product.id}`"
            />
          </b-link>
        </div>

        <!-- Product Details: Card Body -->
        <b-card-body>
          <div class="item-name">
            <h6 class="mb-0">
              <b-link class="text-body">
                {{ product.product_name }}
              </b-link>
            </h6>
            <span
              class="item-company"
            >By
              <b-link class="company-name">{{ product.brand }}</b-link></span>
            <div class="item-rating">
              <ul class="unstyled-list list-inline">
                <li
                  v-for="star in 5"
                  :key="star"
                  class="ratings-list-item"
                  :class="{ 'ml-25': star - 1 }"
                >
                  <feather-icon
                    icon="StarIcon"
                    size="16"
                    :class="[
                      { 'fill-current': star <= product.rating },
                      star <= product.rating ? 'text-warning' : 'text-muted',
                    ]"
                  />
                </li>
              </ul>
            </div>
          </div>
          <span class="text-success mb-1">Trong kho</span>
          <div class="item-quantity">
            <span class="quantity-title">Số lượng: </span>
            <b-form-spinbutton
              v-model="product.quantity"
              size="sm"
              class="ml-75"
              inline
              @click="sortBy = sortOption"
            />
          </div>
          <span class="text-success">Giảm giá</span>
        </b-card-body>

        <!-- Product Options/Actions -->
        <div class="item-options text-center">
          <div class="item-wrapper">
            <div class="item-cost">
              <h4 class="item-price">
                ${{ product.price * product.quantity }}
              </h4>
              <p
                v-if="product.hasFreeShipping"
                class="card-text shipping"
              >
                <b-badge
                  pill
                  variant="light-success"
                >
                  Miễn phí vận chuyển
                </b-badge>
              </p>
            </div>
          </div>
          <b-button
            variant="light"
            class="mt-1 remove-wishlist"
            @click="removeItemFromCart(product.id)"
          >
            <feather-icon
              icon="XIcon"
              class="mr-50"
            />
            <span>Xóa</span>
          </b-button>
          <b-button
            variant="primary"
            class="btn-cart move-cart"
            @click="toggleProductInWishlist(product)"
          >
            <feather-icon
              icon="HeartIcon"
              class="mr-50"
              :class="{ 'fill-current': product.isInWishlist }"
            />
            <span class="text-nowrap">Yêu thích</span>
          </b-button>
        </div>
      </b-card>
    </div>

    <!-- Checkout Options -->
    <div class="checkout-options">
      <b-card>
        <label class="section-label mb-1">Tổng quan</label>
        <b-input-group class="input-group-merge coupons">
          <b-form-input placeholder="Mã giảm giá" />
          <b-input-group-append is-text>
            <span
              id="input-coupons"
              class="input-group-text text-primary cursor-pointer"
            >Áp dụng</span>
          </b-input-group-append>
        </b-input-group>
        <hr>
        <div class="price-details">
          <h6 class="price-title">
            Đơn giá
          </h6>
          <ul class="list-unstyled">
            <li class="price-detail">
              <div class="detail-title">
                Số lượng sản phẩm
              </div>
              <div class="detail-amt">
                {{ danhSachProductCart.length }}
              </div>
            </li>
            <li class="price-detail">
              <div class="detail-title">
                Phí vận chuyển
              </div>
              <div class="detail-amt discount-amt text-success">
                Miễn phí
              </div>
            </li>
          </ul>
          <hr>
          <ul class="list-unstyled">
            <li class="price-detail">
              <div class="detail-title detail-total">
                Tổng giá
              </div>
              <div class="detail-amt font-weight-bolder">
                {{ totalAmount }} đ
              </div>
            </li>
          </ul>
          <b-button
            variant="primary"
            block
            @click="$emit('next-step')"
          >
            Tiếp tục
          </b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import {
  BButton,
  BCard,
  BInputGroup,
  BFormInput,
  BInputGroupAppend,
  BCardBody,
  BLink,
  BImg,
  BBadge,
  BFormSpinbutton,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'
// import CheckoutStepCartProducts from './CheckoutStepCartProducts.vue'

export default {
  components: {
    BCardBody,
    BLink,
    BImg,
    BBadge,
    BFormSpinbutton,
    BButton,
    BCard,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,

    // SFC
    // CheckoutStepCartProducts,
  },
  props: {
    totalDetails: {
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
    ...mapGetters({
      danhSachProductCart: 'qlUser/danhSachProductCart',
    }),
    totalAmount() {
      let totalProduct = 0
      this.danhSachProductCart.forEach(i => {
        totalProduct += i.price * i.quantity
        this.totalDetails.total = totalProduct
        this.totalDetails.listProduct = this.danhSachProductCart
      })
      return totalProduct
    },
  },
  created() {
    this.getAllProductCart()
  },
  methods: {
    removeItemFromCart(productId) {
      this.$store
        .dispatch('qlUser/deleteProductToCart', {
          id: productId,
        })
        .then(res => {
          if (res && res.status) {
            this.$toasted.global.showSuccessMessage({
              message: 'Xóa sản phẩm khỏi giỏ hàng thành công!',
            })
            this.getAllProductCart()
          } else {
            this.$toasted.global.showErrorMessage({
              message: 'Xóa sản phẩm thất bại!',
            })
          }
        })
    },
    getAllProductCart() {
      this.$store.dispatch('qlUser/getAllProductCart', {
        id: this.UserInfor.id,
      })
    },
  },
}
</script>
