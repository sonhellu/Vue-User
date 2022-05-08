<template>
  <div
    class="d-flex"
    style="height: inherit"
  >
    <div class="sidebar-detached sidebar-left mr-3">
      <div class="sidebar">
        <div class="sidebar-shop">
          <b-row>
            <b-col cols="12">
              <h6 class="filter-heading d-none d-lg-block">
                Tìm kiếm
              </h6>
            </b-col>
          </b-row>

          <b-card>
            <!-- Multi Range -->
            <div class="multi-range-price">
              <h6 class="filter-title mt-0">
                Khoảng giá
              </h6>
              <b-form-radio-group
                v-model="filters.price"
                class="price-range-defined-radio-group"
                stacked
                :options="filterOptions.priceRangeDefined"
              />
            </div>

            <!-- Categories -->
            <div class="product-categories">
              <h6 class="filter-title">
                Thể loại
              </h6>
              <b-form-radio-group
                v-model="filters.category"
                class="categories-radio-group"
                stacked
                :options="filterOptions.categories"
              />
            </div>

            <!-- Ratings -->
            <div class="ratings">
              <h6 class="filter-title">
                Đánh giá
              </h6>
              <div
                v-for="rating in filterOptions.ratings"
                :key="rating.rating"
                class="ratings-list"
              >
                <b-link>
                  <div class="d-flex">
                    <feather-icon
                      v-for="star in 5"
                      :key="star"
                      icon="StarIcon"
                      size="17"
                      :class="[
                        { 'fill-current': star <= rating.rating },
                        star <= rating.rating ? 'text-warning' : 'text-muted',
                      ]"
                    />
                    <span class="ml-25">&amp; up</span>
                  </div>
                </b-link>
                <div class="stars-received">
                  <span>{{ rating.count }}</span>
                </div>
              </div>
            </div>
          </b-card>
        </div>
      </div>

      <!-- <div
        class="body-content-overlay"
        :class="{ show: mqShallShowLeftSidebar }"
        @click="$emit('update:mq-shall-show-left-sidebar', false)"
      /> -->
    </div>
    <div style="height: inherit ; width: 100%;">
      <!-- ECommerce Header -->
      <section id="ecommerce-header">
        <div class="row">
          <div class="col-sm-12">
            <div class="ecommerce-header-items">
              <div class="result-toggler">
                <feather-icon
                  icon="MenuIcon"
                  class="d-block d-lg-none"
                  size="21"
                  @click="mqShallShowLeftSidebar = true"
                />
                <div class="search-results">
                  {{ danhSachProductAll.length }} kết quả
                </div>
              </div>
              <div class="view-options d-flex">
                <!-- Sort Button -->
                <b-button
                  variant="primary"
                  tag="a"
                  class="btn-cart mr-1"
                  @click="resetFiler"
                >
                  <span>Làm mới</span>
                </b-button>
                <b-dropdown
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  text="Mặc định"
                  right
                  variant="outline-primary"
                >
                  <b-dropdown-item
                    v-for="item in sortByOptions"
                    :key="item.value"
                    @click="filters.sort = item.value"
                  >
                    {{ item.text }}
                  </b-dropdown-item>
                </b-dropdown>
                <!-- Item View Radio Button Group  -->
                <b-form-radio-group
                  v-model="itemView"
                  class="ml-1 list item-view-radio-group"
                  buttons
                  size="sm"
                  button-variant="outline-primary"
                >
                  <b-form-radio
                    v-for="option in itemViewOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    <feather-icon
                      :icon="option.icon"
                      size="18"
                    />
                  </b-form-radio>
                </b-form-radio-group>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Overlay -->
      <div class="body-content-overlay" />

      <!-- Searchbar -->
      <div class="ecommerce-searchbar mt-1">
        <b-row>
          <b-col cols="12">
            <b-input-group class="input-group-merge">
              <b-form-input
                v-model="filters.name"
                placeholder="Tìm kiém"
                class="search-product"
              />
              <b-input-group-append is-text>
                <feather-icon
                  icon="SearchIcon"
                  class="text-muted"
                />
              </b-input-group-append>
            </b-input-group>
          </b-col>
        </b-row>
      </div>

      <!-- Prodcuts -->
      <section :class="itemView">
        <b-card
          v-for="product in danhSachProductAll"
          :key="product.id"
          class="ecommerce-card"
          no-body
        >
          <div class="item-img text-center">
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
                        { 'fill-current': star <= product.rating },
                        star <= product.rating ? 'text-warning' : 'text-muted',
                      ]"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h6 class="item-price">
                  {{ product.price.toLocaleString() }} đ
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
                {{ product.category_name }}
              </b-card-text>
            </h6>
            <b-card-text class="item-description">
              {{ product.description }}
            </b-card-text>
          </b-card-body>

          <!-- Product Actions -->
          <div class="item-options text-center">
            <div class="item-wrapper">
              <div class="item-cost">
                <h4 class="item-price">
                  {{ product.price.toLocaleString() }} đ
                </h4>
              </div>
            </div>
            <b-button
              variant="primary"
              tag="a"
              class="btn-cart"
              @click="handleBuyProduct(product)"
            >
              <feather-icon
                icon="ShoppingCartIcon"
                class="mr-50"
              />
              <span>Thêm vào giỏ hàng</span>
            </b-button>
            <b-button
              variant="light"
              tag="a"
              class="btn-wishlist"
              @click="toggleProductInWishlist(product)"
            >
              <feather-icon
                icon="HeartIcon"
                class="mr-50"
                :class="{ 'text-danger': product.isInWishlist }"
              />
              <span>Yêu thích</span>
            </b-button>
          </div>
        </b-card>
      </section>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */

import {
  BDropdown,
  BDropdownItem,
  BFormRadioGroup,
  BFormRadio,
  BRow,
  BCol,
  BInputGroup,
  BInputGroupAppend,
  BFormInput,
  BCard,
  BCardBody,
  BLink,
  BImg,
  BCardText,
  BButton,
  // BPagination,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'
import Ripple from 'vue-ripple-directive'
// import VueSlider from 'vue-slider-component'
// import FilterSideBar from '@/modules/Users/list-products-all/components/common/FilterSideBar.vue'

export default {
  directives: {
    Ripple,
  },
  components: {
    BRow,
    BCol,
    BFormRadioGroup,
    BLink,
    BCard,
    BDropdown,
    BDropdownItem,
    BFormRadio,

    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    BCardBody,
    BImg,
    BCardText,
    BButton,

    // SFC
    // FilterSideBar,
  },
  data() {
    return {
      UserInfor: JSON.parse(localStorage.getItem('UserData')),
      itemView: 'grid-view',
      totalProducts: 10,
      itemViewOptions: [
        { icon: 'GridIcon', value: 'grid-view' },
        { icon: 'ListIcon', value: 'list-view' },
      ],
      priceRangeDefined: null,
      filters: {
        name: '',
        page: 0,
        sort: 0,
        price: null,
        category: null,
      },
      sortBy: { text: 'Mặc định', value: '0' },
      sortByOptions: [
        { text: 'Mặc định', value: '0' },
        { text: 'Cao xuống thấp', value: '1' },
        { text: 'Thấp đến cao', value: '2' },
      ],
      filterOptions: {
        priceRangeDefined: [
          { text: 'Tất cả', value: 'null' },
          { text: '<= 500.000 đ', value: '500' },
          { text: '500.000 - 1.000.000 đ', value: '1000' },
          { text: '1.000.000 - 3.000.000 đ', value: '3000' },
          { text: '>= 3.000.000 đ', value: '5000' },
        ],
        categories: [],
        ratings: [
          { rating: 4, count: 160 },
          { rating: 3, count: 176 },
          { rating: 2, count: 291 },
          { rating: 1, count: 190 },
        ],
      },
    }
  },
  computed: {
    ...mapGetters({
      danhSachProductAll: 'qlUser/danhSachProductAll',
    }),
  },
  watch: {
    filters: {
      handler() {
        this.layDanhSachProductAll()
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.layDanhSachProductAll()
    this.layDanhSachTheLoai()
    this.getAllProductCart()
  },
  mounted() {},
  methods: {
    layDanhSachTheLoai() {
      this.$store.dispatch('qlUser/layDuLieuCategoryAll').then(res => {
        if (res && res.status === 200) {
          this.filterOptions.categories = res.data.map(item => item.name)
        }
      })
    },
    layDanhSachProductAll() {
      this.$store.dispatch('qlUser/layDuLieuProductAll', {
        name: this.filters.name,
        page: this.filters.page,
        sort: this.filters.sort,
        max_price:
          /* eslint-disable no-nested-ternary */
          this.filters.price === '500'
            ? '500000'
            : this.filters.price === '1000'
              ? '1000000'
              : this.filters.price === '3000'
                ? '3000000'
                : this.filters.price === '5000'
                  ? null
                  : null,
        min_price:
          /* eslint-disable no-nested-ternary */
          this.filters.price === '500'
            ? '0'
            : this.filters.price === '1000'
              ? '500000'
              : this.filters.price === '3000'
                ? '1000000'
                : this.filters.price === '5000'
                  ? '3000000'
                  : null,
        category: this.filters.category,
      })
    },
    checkMin() {},
    getAllProductCart() {
      this.$store.dispatch('qlUser/getAllProductCart', {
        id: this.UserInfor.id,
      })
    },
    handleBuyProduct(product) {
      const token = JSON.parse(localStorage.getItem('accessToken'))
      if (!token) {
        this.$router.push({ name: 'auth-login' })
      } else {
        this.$store
          .dispatch('qlUser/addProductToCart', {
            price: product.price,
            product_id: product.id,
            quantity: 1,
            user_id: this.UserInfor.id,
          })
          .then(res => {
            if (res && res.data && res.data.status === 200) {
              this.$toasted.global.showSuccessMessage({
                message: 'Thêm vào giỏ hàng thành công!',
              })
              this.getAllProductCart()
            } else {
              this.$toasted.global.showErrorMessage({
                message: 'Sản phẩm đã có trong giỏ hàng!',
              })
            }
          })
      }
    },
    resetFiler() {
      this.filters = {
        name: '',
        page: 0,
        sort: 0,
        max_price: null,
        min_price: null,
        category: null,
      }
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/base/pages/app-ecommerce.scss';
@import '~@core/scss/vue/libs/vue-slider.scss';
</style>

<style lang="scss" scoped>
.item-view-radio-group ::v-deep {
  .btn {
    display: flex;
    align-items: center;
  }
}
.categories-radio-group,
.brands-radio-group,
.price-range-defined-radio-group {
  ::v-deep > .custom-control {
    margin-bottom: 0.75rem;
  }
}
</style>
