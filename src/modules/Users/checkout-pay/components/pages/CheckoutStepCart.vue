<template>
  <div>
    <div class="list-view product-checkout mt-0">
      <!-- Products List -->
      <div v-if="danhSachProductCart.length === 0">
        <h3 class="text-center mt-8">
          Giỏ hàng rỗng
        </h3>
      </div>
      <div
        v-else
        class="checkout-items"
      >
        <b-card
          v-for="product in danhSachProductCart"
          :key="product.id"
          class="ecommerce-card"
          no-body
        >
          <!-- Product Image -->
          <div class="item-img">
            <b-link
              class="text-body"
              :to="{
                name: 'detail-product',
                query: { id: product.product_id },
              }"
            >
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
              <span class="item-company">
                <b-link
                  class="company-name ml-0"
                >{{ product.category_name }} -
                  <span
                    style="color:red"
                  >{{ product.price.toLocaleString() }} đ
                  </span></b-link></span>
            </div>
            <span class="text-success">Trong kho</span>
            <div class="item-quantity">
              <span
                class="quantity-title"
              >Kích thước : {{ product.size }}</span>
            </div>
            <div class="product-color-options d-flex">
              <span class="quantity-title pb-1 color123">Màu sắc : </span>
              <div
                class="color-option"
                :class="`b-${product.color}`"
              >
                <div
                  class="filloption"
                  :class="`bg-${product.color}`"
                />
              </div>
            </div>
            {{ product.quantity }}
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
          </b-card-body>

          <!-- Product Options/Actions -->
          <div class="item-options text-center">
            <div class="item-wrapper">
              <div class="item-cost">
                <h4 class="item-price">
                  ${{ product.price * product.quantity }}
                </h4>
                <p class="card-text shipping">
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
          <hr>
          <div class="price-details">
            <h6 class="price-title">
              Đơn giá
            </h6>
            <ul class="list-unstyled">
              <li class="price-detail">
                <div class="detail-title">
                  Số lượng loại sản phẩm
                </div>
                <div class="detail-amt">
                  {{ danhSachProductCart.length }}
                </div>
              </li>
              <li class="price-detail">
                <div class="detail-title">
                  Số lượng sản phẩm
                </div>
                <div class="detail-amt">
                  {{ TotalProduct }}
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
                  {{ totalAmount.toLocaleString() }} đ
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
  </div>
</template>

<script>
import {
  BButton,
  BCard,
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
      TotalProduct: 0,
    }
  },
  computed: {
    ...mapGetters({
      danhSachProductCart: 'qlUser/danhSachProductCart',
    }),
    totalAmount() {
      let totalCategory = 0
      let totalProduct = 0
      this.danhSachProductCart.forEach(i => {
        totalCategory += i.price * i.quantity
        this.totalDetails.total = totalCategory
        this.totalDetails.listProduct = this.danhSachProductCart
        totalProduct += i.quantity
        this.TotalProduct = totalProduct
      })
      return totalCategory
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
<style lang="scss" scoped>
@import '@/@core/scss/base/pages/app-ecommerce-details.scss';
.color123 {
  padding-top: 3px;
}
</style>
