<template>
  <b-card
    v-if="productDetail"
    no-body
  >
    <b-card-body>
      <b-row class="my-2">
        <b-col
          cols="12"
          md="5"
          class="d-flex align-items-center justify-content-center mb-2 mb-md-0"
        >
          <div class="d-flex align-items-center justify-content-center">
            <b-img
              :src="productDetail.image"
              :alt="`Image of ${productDetail.name}`"
              class="product-img"
              fluid
            />
          </div>
        </b-col>
        <!-- Right: Product Details -->
        <b-col
          cols="12"
          md="7"
        >
          <!-- Product Name -->
          <h4
            class="ml-0 pl-0 titleName"
          >
            {{ productDetail.name }}
          </h4>

          <!-- Product Brand -->
          <b-card-text class="item-company mb-0">
            <span>Thể loại -</span>
            <b-link class="company-name">
              {{ productDetail.category_name }}
            </b-link>
          </b-card-text>

          <!-- Price And Ratings -->
          <div class="ecommerce-details-price d-flex flex-wrap mt-1 ">
            <h3 class="priceDetail mr-1 ml-0 pl-0">
              {{ productDetail.price }} <span>đ</span>
            </h3>
            <ul class="unstyled-list list-inline pl-1 border-left">
              <li
                v-for="star in 5"
                :key="star"
                class="ratings-list-item mr-25"
              >
                <feather-icon
                  icon="StarIcon"
                  size="18"
                  :class="[
                    { 'fill-current': star <= productDetail.rating },
                    star <= productDetail.rating
                      ? 'text-warning'
                      : 'text-muted',
                  ]"
                />
              </li>
            </ul>
          </div>

          <!-- Avability -->
          <b-card-text>{{ productDetail.quantity > 0 ? 'Còn hàng' : 'Hết hàng' }} -
            <span class="text-success">{{
              productDetail.quantity > 1 ? 'Trong kho' : 'Vui lòng đợi'
            }}</span></b-card-text>

          <!-- Product Description -->
          <b-card-text>{{ productDetail.description }}</b-card-text>

          <!-- Product Meta [Free shpping, EMI, etc.] -->
          <ul class="product-features list-unstyled">
            <li v-if="productDetail.hasFreeShipping">
              <feather-icon
                icon="ShoppingCartIcon"
                size="1.5x"
                class="mr-1"
              />
              <span class="freeShip text-success">Miễn phí ship</span>
            </li>
          </ul>

          <hr>

          <!-- Colors -->
          <div class="product-color-options">
            <h6>Màu</h6>
            <ul class="list-unstyled mb-0">
              <li
                v-for="color in colorOptions"
                :key="color"
                class="d-inline-block"
                :class="{ selected: selectedColor === color }"
                @click="selectedColor = color"
              >
                <div
                  class="color-option"
                  :class="`b-${color}`"
                >
                  <div
                    class="filloption"
                    :class="`bg-${color}`"
                  />
                </div>
              </li>
            </ul>
          </div>

          <hr>

          <div class="d-flex flex-column flex-sm-row pt-1">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0"
            >
              <feather-icon
                icon="ShoppingCartIcon"
                class="mr-50"
              />
              <span>
                Thêm vào giỏ hàng
              </span>
            </b-button>
            <b-button
              variant="outline-secondary"
              class="btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0"
            >
              <feather-icon
                icon="HeartIcon"
                class="mr-50"
              />
              <span>Yêu thích</span>
            </b-button>
            <b-dropdown
              variant="outline-secondary"
              no-caret
              toggle-class="btn-icon"
              class="btn-share"
              right
            >
              <template #button-content>
                <feather-icon icon="Share2Icon" />
              </template>
              <b-dropdown-item
                v-for="icon in [
                  'FacebookIcon',
                  'TwitterIcon',
                  'YoutubeIcon',
                  'InstagramIcon',
                ]"
                :key="icon"
              >
                <feather-icon :icon="icon" />
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </b-col>
      </b-row>
    </b-card-body>

    <!-- Static Content -->
    <b-card class="cardFeatures">
      <Features />
    </b-card>
    <RelatedProducts />
  </b-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
import {
  BCard,
  BCardBody,
  BRow,
  BCol,
  BImg,
  BCardText,
  BLink,
  BButton,
  BDropdown,
  BDropdownItem,
} from 'bootstrap-vue'
import _ from 'lodash'
import { mapGetters } from 'vuex'
import Ripple from 'vue-ripple-directive'
import Features from '@/modules/Users/page-product/components/common/Features.vue'
import RelatedProducts from '@/modules/Users/detail-product/components/common/RelatedProducts.vue'

export default {
  directives: {
    Ripple,
  },
  components: {
    BCard,
    BCardBody,
    BRow,
    BCol,
    BImg,
    BCardText,
    BLink,
    BButton,
    BDropdown,
    BDropdownItem,
    Features,
    RelatedProducts,
  },
  data() {
    return {
      /* eslint-disable global-require */
      productDetail: {},
      colorOptions: ['primary', 'success', 'warning', 'danger', 'info'],
    }
  },
  computed: {
    ID() {
      return Number(_.get(this.$route, 'query.id', null))
    },
    ...mapGetters({
      danhSachDetailProduct: 'qlUser/danhSachDetailProduct',
    }),
  },
  created() {
    this.layDuLieuProductDetail()
  },
  mounted() {},
  methods: {
    layDuLieuProductDetail() {
      if (this.ID !== 0) {
        this.$store
          .dispatch('qlUser/layDuLieuProductDetail', { id: this.ID })
          .then(res => {
            if (res && res.data && res.status === 200) {
              this.productDetail = { ...res.data }
            }
          })
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/@core/scss/base/pages/app-ecommerce-details.scss';
</style>
<style lang="scss">
.cardFeatures {
  background: #f8f8f8;
}
.freeShip {
  font-weight: bold;
}
.priceDetail {
  font-size: 18px;
  font-weight: bold;
}
.titleName {
  color: #5e5873 !important;
}
</style>
