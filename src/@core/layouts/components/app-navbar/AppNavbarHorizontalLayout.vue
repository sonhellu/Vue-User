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
            class="iconRespon"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div
      class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex pl-2"
    >
      <b-link
        to="/page-product"
        class="d-flex storeTitle"
      >
        <h1 class="titleStore">
          JUN
        </h1>
        <span class="titleStoreaa">store</span>
      </b-link>
    </div>

    <!-- Right Col -->
    <b-navbar-nav class="nav align-items-center ml-auto pr-2">
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
  background: #008848;
  height: 4.5rem;
  border-radius: 0px !important;
}
.titleStore {
  color: white;
  font-size: 40px;
  font-weight: 900;
  padding-top: 5px;
  cursor: pointer;
}
.titleStoreaa{
   color: white;
}
.storeTitle {
  align-items: baseline;
}

.iconRespon {
  color: white;
}
</style>
