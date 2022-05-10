Jun<template>
  <b-card>
    <!-- media -->
    <!--/ media -->

    <!-- form -->
    <b-form
      class="mt-2"
      @submit.prevent="UpdateProfile"
    >
      <b-row>
        <b-col sm="6">
          <b-form-group
            label="Tên tài khoản"
            label-for="account-username"
          >
            <b-form-input
              v-model="UserInfor.username"
              disabled
              placeholder="Tên tài khoản"
              name="username"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
            label="Tên"
            label-for="account-name"
          >
            <b-form-input
              v-model="DataUser.fullName"
              name="name"
              placeholder="Tên"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
            label="E-mail"
            label-for="account-e-mail"
          >
            <b-form-input
              v-model="UserInfor.email"
              disabled
              name="email"
              placeholder="Email"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
            label="Số điện thoại"
            label-for="account-company"
          >
            <b-form-input
              v-model="DataUser.phoneNumber"
              name="company"
              placeholder="Địa chỉ"
            />
          </b-form-group>
        </b-col>
        <b-col sm="12">
          <b-form-group
            label="Địa chỉ"
            label-for="account-company"
          >
            <b-form-input
              v-model="DataUser.address"
              name="company"
              placeholder="Địa chỉ"
            />
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-2 mr-1"
            type="submit"
          >
            Cập nhật
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import {
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BRow,
  BCol,
  BCard,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    // BAlert,
    BCard,
  },
  directives: {
    Ripple,
  },
  props: {
    generalData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      UserInfor: JSON.parse(localStorage.getItem('UserData')),
      DataUser: {},
      profileFile: null,
    }
  },
  created() {
    this.getInforUser()
  },
  methods: {
    getInforUser() {
      this.$store
        .dispatch('qlUser/getAPIUser', {
          id: this.UserInfor.id,
        })
        .then(res => {
          if (res && res.data) {
            this.DataUser = res.data
          }
        })
    },
    UpdateProfile() {
      this.$store
        .dispatch('qlUser/getUpdateUser', {
          address: this.DataUser.address,
          full_name: this.DataUser.fullName,
          phone_number: this.DataUser.phoneNumber,
          user_id: this.UserInfor.id,
        })
        .then(res => {
          if (res && res.status === 200 && res.data) {
            this.$toasted.global.showSuccessMessage({
              message: 'Cập nhật dữ liệu thành công!',
            })
          } else {
            this.$toasted.global.showErrorMessage({
              message: 'Cập nhật dữ liệu không thành công!',
            })
          }
        })
    },
  },
  setup() {
    const refInputEl = ref(null)
    const previewEl = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl, previewEl)

    return {
      refInputEl,
      previewEl,
      inputImageRenderer,
    }
  },
}
</script>
