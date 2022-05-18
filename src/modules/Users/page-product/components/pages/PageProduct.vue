<template>
  <div>
    <SwiperAutoplay class="mb-4" />
    <h1 class="font-weight-bolder text-center mb-2">
      Sản phẩm nổi bật
    </h1>
    <section class="grid-view wishlist-items pr-5 pl-5">
      <b-card
        v-for="product in topProductAll"
        :key="product.id"
        class="ecommerce-card"
        no-body
      >
        <div class="item-img text-center saleProduct">
          <div v-if="product.sale_percentage" class="saleProduct__title">
            <span class="saleProduct__title--percent">-{{product.sale_percentage}}%</span> <br>
            Giảm
          </div>
          <b-link
            class="text-body"
            :to="{
              name: 'detail-product',
              query: { id: product.id },
            }"
          >
            <b-img
              :alt="`${product.name}-${product.id}`"
              fluid
              class="card-img-top"
              :src="product.image"
            />
          </b-link>
        </div>

        <!-- Product Details -->
        <b-card-body>
          <div class="item-wrapper">
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
                      { 'fill-current': star <= product.rate },
                      star <= product.rate ? 'text-warning' : 'text-muted',
                    ]"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h6 class="item-price" v-if="product.sale_percentage">
                {{ (product.price * (100 - product.sale_percentage)/100).toLocaleString() }} đ
              </h6>
              <h6 class="item-price" v-else>
                {{ product.price.toLocaleString()}} đ
              </h6>
            </div>
          </div>
          <h6 class="item-name">
            <b-link
              class="text-body"
              :to="{
                name: 'detail-product',
                query: { id: product.id },
              }"
            >
              {{ product.name }}
            </b-link>
            <b-card-text class="item-company">
              By
              <b-link
                class="text-body"
                :to="{
                  name: 'detail-product',
                  query: { id: product.id },
                }"
              >
                {{ product.category_name }}
              </b-link>
            </b-card-text>
          </h6>
          <b-card-text class="item-description">
            {{ product.category_name }}
          </b-card-text>
        </b-card-body>

        <!-- Action Buttons -->
        <div class="item-options text-center">
          <b-button
            variant="primary"
            class="btn-cart move-cart"
            @click="addToCart(product.id)"
          >
            <feather-icon
              icon="ShoppingCartIcon"
              class="mr-50"
            />
            <span>Thêm vào giỏ hàng </span>
          </b-button>
        </div>
      </b-card>
    </section>
    <div class="text-center mb-2">
      <b-button
        variant="danger"
        class="btn-cart move-cart p-1"
        @click="viewAllProduct"
      >
        <feather-icon
          icon="ShoppingCartIcon"
          class="mr-50"
        />
        <span class="p-1">Tất cả sản phẩm</span>
      </b-button>
    </div>
    <b-card>
      <Features />
    </b-card>
    <CardContentTypes />
    <RelatedProducts />
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */
import {
  BCard,
  BCardBody,
  BImg,
  BCardText,
  BLink,
  BButton,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'
import Features from '@/modules/Users/page-product/components/common/Features.vue'
import SwiperAutoplay from '@/modules/Users/page-product/components/common/swiper/SwiperAutoplay.vue'
import CardContentTypes from '@/modules/Users/page-product/components/common/CardContentTypes.vue'
import RelatedProducts from '../common/RelatedProducts.vue'

export default {
  components: {
    CardContentTypes,
    Features,
    BCard,
    BCardBody,
    BImg,
    BCardText,
    BLink,
    BButton,
    SwiperAutoplay,
    RelatedProducts,
  },
  data() {
    return {
      /* eslint-disable global-require */
      UserInfor: JSON.parse(localStorage.getItem('UserData')),
    }
  },
  computed: {
    ...mapGetters({
      danhSachProductAll: 'qlUser/danhSachProductAll',
    }),
    topProductAll() {
      // const newArr = this.danhSachProductAll.slice(0, 8)
      const newArr = this.danhSachProductAll
      return newArr
    },
  },
  created() {
    this.layDanhSachProductAll()
    this.getAllProductCart()
  },
  mounted() {},
  methods: {
    layDanhSachProductAll() {
      this.$store.dispatch('qlUser/layDuLieuProductAll', { page: 0, sort: 0 })
    },
    getAllProductCart() {
      this.$store.dispatch('qlUser/getAllProductCart', {
        id: this.UserInfor?.id,
      })
    },
    // addToCart(product) {
    //   const token = JSON.parse(localStorage.getItem('accessToken'))
    //   if (!token) {
    //     this.$router.push({ name: 'auth-login' })
    //   } else {
    //     this.$store
    //       .dispatch('qlUser/addProductToCart', {
    //         price: product.price,
    //         product_id: product.id,
    //         quantity: 1,
    //         user_id: this.UserInfor.id,
    //       })
    //       .then(res => {
    //         if (res && res.data && res.data.status === 200) {
    //           this.$toasted.global.showSuccessMessage({
    //             message: 'Thêm vào giỏ hàng thành công!',
    //           })
    //           this.getAllProductCart()
    //         } else {
    //           this.$toasted.global.showErrorMessage({
    //             message: 'Sản phẩm đã có trong giỏ hàng!',
    //           })
    //         }
    //       })
    //   }
    // },
    addToCart(id) {
      this.$router.push({
        path: `/detail-product?id=${id}`,
      })
    },
    viewAllProduct() {
      this.$router.push({ path: '/list-products-all' })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/base/pages/app-ecommerce.scss';
.saleProduct {
  padding-top: 0 !important;
  position: relative;
  flex-direction: column;
  &__title {
    padding-top: 3px;
    position: absolute;
    max-width: 50px;
    width: 100%;
    right: 0;
    min-height: 22%;
    color: white;
    background: #F5CE2F;
    &--percent {
      color: red;
    }
  }
}
</style>
