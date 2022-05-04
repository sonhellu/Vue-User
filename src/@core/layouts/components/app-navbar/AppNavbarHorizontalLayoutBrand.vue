<template>
  <div class="navbar-header d-xl-block d-none">
    <ul class="nav navbar-nav">
      <li class="nav-item">
        <b-link
          class="navbar-brand"
          to="/page-product"
        >
          <h4 class="brand-text mb-0">
            Trang chủ
          </h4>
        </b-link>
      </li>
      <li class="nav-item">
        <b-link
          class="navbar-brand"
          to="/list-products-all"
        >
          <h4 class="brand-text mb-0">
            Sản phẩm
          </h4>
        </b-link>
      </li>
      <li class="nav-item">
        <b-link
          class="navbar-brand"
          to="/about"
        >
          <h4 class="brand-text mb-0">
            Về chúng tôi
          </h4>
        </b-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { BLink } from 'bootstrap-vue'
// import { $themeConfig } from '@themeConfig'

export default {
  components: {
    BLink,
  },
  setup() {},
}
</script>

<style lang="scss">
h4 {
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  margin-left: 1rem;
}
</style>
