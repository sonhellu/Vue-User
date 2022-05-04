<template>
  <b-tabs
    vertical
    content-class="col-12 col-md-9 mt-1 mt-md-0"
    pills
    nav-wrapper-class="col-md-3 col-12"
    nav-class="nav-left"
  >
    <!-- general tab -->
    <b-tab active>
      <!-- title -->
      <template #title>
        <feather-icon
          icon="UserIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">Thông tin cá nhân</span>
      </template>

      <account-setting-general
        v-if="options.general"
        :general-data="options.general"
      />
    </b-tab>
    <b-tab>
      <!-- title -->
      <template #title>
        <feather-icon
          icon="LockIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">Lịch sử mua hàng</span>
      </template>

      <AccountSettingSocial />
    </b-tab>
    <b-tab>
      <!-- title -->
      <template #title>
        <feather-icon
          icon="LockIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">Đổi mật khẩu</span>
      </template>

      <account-setting-password />
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'
import AccountSettingGeneral from './AccountSettingGeneral.vue'
import AccountSettingSocial from './AccountSettingSocial.vue'
import AccountSettingPassword from './AccountSettingPassword.vue'

export default {
  components: {
    BTabs,
    BTab,
    AccountSettingSocial,
    AccountSettingGeneral,
    AccountSettingPassword,
  },
  data() {
    return {
      options: {},
    }
  },
  beforeCreate() {
    this.$http.get('/account-setting/data').then(res => {
      this.options = res.data
    })
  },
}
</script>
