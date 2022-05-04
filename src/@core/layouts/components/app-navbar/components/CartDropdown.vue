<template>
  <b-nav-item-dropdown
    class="dropdown-cart mr-25"
    menu-class="dropdown-menu-media mt-2"
    right
    @show="fetchItems"
  >
    <template #button-content>
      <feather-icon
        :badge="danhSachProductCart.length"
        class="text-body"
        icon="ShoppingCartIcon"
        size="23"
      />
    </template>

    <!-- Header -->
    <li class="dropdown-menu-header">
      <div class="dropdown-header d-flex">
        <h4 class="notification-title mb-0 mr-auto">
          Giỏ hàng
        </h4>
        <b-badge
          pill
          variant="light-primary"
        />
      </div>
    </li>
    <!-- Cart Items -->
    <vue-perfect-scrollbar
      v-if="danhSachProductCart.length"
      :settings="perfectScrollbarSettings"
      class="scrollable-container media-list scroll-area"
      tagname="li"
    >
      <b-media
        v-for="item in danhSachProductCart"
        :key="item.id"
      >
        <template #aside>
          <b-img
            :src="item.product_image"
            :alt="item.name"
            rounded
            width="62px"
          />
        </template>
        <feather-icon
          icon="XIcon"
          class="cart-item-remove cursor-pointer"
          @click="removeItemFromCart(item.id)"
        />
        <div class="media-heading">
          <h6 class="cart-item-title">
            <b-link class="text-body">
              {{ item.product_name }}
            </b-link>
          </h6>
          <small class="cart-item-by">{{ item.category_name }}</small>
        </div>
        <h6 class="cart-item-price mr-3">
          {{ item.price }} đ
        </h6>
      </b-media>
    </vue-perfect-scrollbar>

    <!-- Cart Footer -->
    <li
      v-if="danhSachProductCart.length"
      class="dropdown-menu-footer"
    >
      <div class="d-flex justify-content-between mb-1">
        <h6 class="font-weight-bolder mb-0">
          Total:
        </h6>
        <h6 class="text-primary font-weight-bolder mb-0">
          {{ totalAmount }} đ
        </h6>
      </div>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        block
        to="/checkout-pay"
      >
        Giỏ hàng
      </b-button>
    </li>

    <p
      v-if="!danhSachProductCart.length"
      class="m-0 p-1 text-center"
    >
      Giỏ hàng chưa sản phẩm
    </p>
  </b-nav-item-dropdown>
</template>

<script>
import {
  BNavItemDropdown,
  BBadge,
  BMedia,
  BLink,
  BImg,
  BButton,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BNavItemDropdown,
    BBadge,
    BMedia,
    BLink,
    BImg,
    VuePerfectScrollbar,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      UserInfor: JSON.parse(localStorage.getItem('UserData')),
      perfectScrollbarSettings: {
        maxScrollbarLength: 60,
        wheelPropagation: false,
      },
    }
  },
  computed: {
    ...mapGetters({
      danhSachProductCart: 'qlUser/danhSachProductCart',
    }),
    totalAmount() {
      let total = 0
      this.danhSachProductCart.forEach(i => {
        total += i.price
      })
      return total
    },
  },
  methods: {
    fetchItems() {
      // this.$store.dispatch('app-ecommerce/fetchCartProducts').then(response => {
      //   this.items = response.data.products
      // })
    },
    getAllProductCart() {
      this.$store.dispatch('qlUser/getAllProductCart', {
        id: this.UserInfor.id,
      })
    },
    removeItemFromCart(productId) {
      this.$store
        .dispatch('qlUser/deleteProductToCart', {
          id: productId,
        })
        .then(res => {
          if (res && res.data && res.data.status === 200) {
            this.$toasted.global.showSuccessMessage({
              message: 'Xóa sản phẩm khỏi giỏ hàng thành công!',
            })
            this.getAllProductCart()
          } else {
            this.$toasted.global.showSuccessMessage({
              message: 'Xóa sản phẩm thất bại!',
            })
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown-cart {
  .media {
    .media-aside {
      align-items: center;
    }
  }
}
</style>
