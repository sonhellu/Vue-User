<template>
  <b-card>
    <!-- media -->
    <!--/ media -->

    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col sm="6">
          <b-form-group
            label="Tên tài khoản"
            label-for="account-username"
          >
            <b-form-input
              v-model="username"
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
              v-model="fullName"
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
              v-model="email"
              name="email"
              placeholder="Email"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
            label="Địa chỉ"
            label-for="account-company"
          >
            <b-form-input
              v-model="address"
              name="company"
              placeholder="Địa chỉ"
            />
          </b-form-group>
        </b-col>

        <!-- alert -->
        <!-- <b-col
          cols="12"
          class="mt-75"
        >
          <b-alert
            show
            variant="warning"
            class="mb-50"
          >
            <h4 class="alert-heading">
              Your email is not confirmed. Please check your inbox.
            </h4>
            <div class="alert-body">
              <b-link class="alert-link">
                Resend confirmation
              </b-link>
            </div>
          </b-alert>
        </b-col> -->
        <!--/ alert -->

        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-2 mr-1"
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
      username: '',
      fullName: '',
      address: '',
      email: '',
      profileFile: null,
    }
  },
  methods: {
    resetForm() {
      this.username = ''
      this.fullName = ''
      this.address = ''
      this.email = ''
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
