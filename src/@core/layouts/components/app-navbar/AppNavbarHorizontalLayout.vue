<template>
  <div class="navbar-container d-flex content align-items-center headerProduct">
    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div
      class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"
    >
      <b-link
        to="/page-product"
        class="d-flex storeTitle"
      >
        <h1 class="titleStore">
          BOO
        </h1>
        <span class="">store</span>
      </b-link>
    </div>

    <!-- Right Col -->
    <b-navbar-nav class="nav align-items-center ml-auto">
      <dark-Toggler class="d-none d-lg-block" />
      <cart-dropdown />
      <user-dropdown />
    </b-navbar-nav>
  </div>
</template>

<script>
import { BLink, BNavbarNav } from 'bootstrap-vue'
// import Bookmarks from './components/Bookmarks.vue'
import DarkToggler from './components/DarkToggler.vue'
import CartDropdown from './components/CartDropdown.vue'
import UserDropdown from './components/UserDropdown.vue'

export default {
  components: {
    BLink,
    // Navbar Components
    BNavbarNav,
    // Bookmarks,
    DarkToggler,
    CartDropdown,
    UserDropdown,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
.headerProduct {
  height: 4.5rem;
}
.titleStore {
  color: #7367f0;
  font-size: 40px;
  font-weight: 900;
  padding-top: 5px;
  cursor: pointer;
}
.storeTitle {
  align-items: baseline;
}
</style>
