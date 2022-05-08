<template>
  <div>
    <div
      v-if="!UserData"
      class="d-flex align-items-center pr-0 pl-1"
    >
      <div class="d-sm-flex d-none user-nav mr-1 ml-0">
        <p
          class="user-name font-weight-bolder mb-0 loginUser"
          @click="handleLogin()"
        >
          Đăng nhập
        </p>
        <span class="user-status" />
      </div>
      <b-avatar
        size="40"
        variant="light-primary"
        badge
        class="badge-minimal"
      >
        <feather-icon
          icon="UserIcon"
          size="22"
          style="color : white"
        />
      </b-avatar>
    </div>
    <div v-else>
      <b-dropdown
        right
        variant="link"
        toggle-class="d-flex align-items-center dropdown-user-link text-decoration-none pr-0 pl-1"
        class="dropdown-user"
        no-caret
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav mr-1 ml-0">
            <p class="user-name font-weight-bolder mb-0 titleNameUser">
              {{ UserData.username }}
            </p>
            <span class="user-status" />
          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            class="badge-minimal"
            badge-variant="success"
          >
            <feather-icon
              icon="UserIcon"
              size="22"
              style="color : white"
            />
          </b-avatar>
        </template>

        <b-dropdown-item
          :to="{ name: 'pages-account-setting' }"
          link-class="d-flex align-items-center"
        >
          <feather-icon
            size="16"
            icon="SettingsIcon"
            class="mr-50"
          />
          <span>Cài đặt</span>
        </b-dropdown-item>
        <b-dropdown-item
          link-class="d-flex align-items-center"
          @click="logout"
        >
          <feather-icon
            size="16"
            icon="LogOutIcon"
            class="mr-50"
          />
          <span>Đăng xuất</span>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem, BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BDropdownItem,
    BAvatar,
    BDropdown,
  },
  data() {
    return {
      UserData: JSON.parse(localStorage.getItem('UserData')),
    }
  },
  methods: {
    handleLogin() {
      this.$router.push({ name: 'auth-login' })
    },
    logout() {
      // localStorage.removeItem('UserData')
      localStorage.removeItem('access_Token')
      localStorage.removeItem('UserData')
      // Redirect to login page
      this.$router.go()
    },
  },
}
</script>

<style lang="scss">
.loginUser {
  color: white;
  cursor: pointer;
}
.titleNameUser {
  color: white !important;
}
</style>
