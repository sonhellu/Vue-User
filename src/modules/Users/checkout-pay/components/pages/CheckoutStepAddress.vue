<template>
  <validation-observer
    #default="{ handleSubmit }"
    ref="refFormObserver"
  >
    <b-form
      class="list-view product-checkout"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <!-- Left Form -->
      <b-card no-body>
        <b-card-header class="flex-column align-items-start ml-0 pl-0">
          <b-card-title class="ThongTinGiaoHang">
            Thông tin giao hàng
          </b-card-title>
        </b-card-header>
        <b-card-body>
          <b-row>
            <!-- Full Name -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Họ và tên"
                rules="required"
              >
                <b-form-group
                  label="Họ và tên"
                  label-for="HoTen"
                  class="mb-2"
                >
                  <b-form-input
                    id="HoTen"
                    v-model="addressDetails.fullName"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Mobile Number -->
            <b-col
              cols="12"
              md="6"
              class="mb-2"
            >
              <validation-provider
                #default="validationContext"
                name="Số điện thoại"
                rules="required|integer"
              >
                <b-form-group
                  label="Số điện thoại"
                  label-for="mobile-number"
                >
                  <b-form-input
                    id="mobile-number"
                    v-model="addressDetails.mobile"
                    type="number"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Flat House No -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Email"
                rules="required"
              >
                <b-form-group
                  label="Email"
                  label-for="flat-house-no"
                  class="mb-2"
                >
                  <b-form-input
                    id="flat-house-no"
                    v-model="addressDetails.email"
                    disabled
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Landmark -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Địa chỉ"
                rules="required"
              >
                <b-form-group
                  label="Địa chỉ"
                  label-for="landmark"
                  class="mb-2"
                >
                  <b-form-input
                    id="landmark"
                    v-model="addressDetails.address"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Submit Button -->
            <b-col cols="12">
              <b-button
                variant="primary"
                type="submit"
              >
                Lưu địa địa chỉ
              </b-button>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <!-- Right Col -->
      <div class="customer-card">
        <b-card title="Địa chỉ mặc định">
          <b-card-text>
            <span class="font-weight-bold">Họ tên: </span>{{ formAdress.fullName }}
          </b-card-text>
          <b-card-text><span class="font-weight-bold">Số điện thoại: </span>{{ formAdress.mobile }}
          </b-card-text>
          <b-card-text><span class="font-weight-bold">Email: </span>{{ formAdress.email }}
          </b-card-text>
          <b-card-text><span class="font-weight-bold">Địa chỉ: </span>{{ formAdress.address }}</b-card-text>
          <b-button
            variant="primary"
            block
            @click="$emit('next-step')"
          >
            Giao hàng tới địa chỉ này
          </b-button>
        </b-card>
      </div>
    </b-form>
  </validation-observer>
</template>

<script>
import {
  BForm,
  BCard,
  BCardHeader,
  BCardTitle,
  BCardText,
  BCardBody,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BButton,
  BFormInvalidFeedback,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
// eslint-disable-next-line import/no-extraneous-dependencies
import { required, integer } from '@validations'
// eslint-disable-next-line import/no-extraneous-dependencies
import formValidation from '@core/comp-functions/forms/form-validation'

export default {
  components: {
    // BSV
    BForm,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BButton,
    BFormInvalidFeedback,

    // Form Validation
    ValidationProvider,
    ValidationObserver,

    // 3rd party
  },
  props: {
    addressDetails: {
      type: Object,
      required: true,
    },
    totalDetails: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      UserInfor: JSON.parse(localStorage.getItem('UserData')),
      formAdress: {
        fullName: '',
        mobile: '',
        email: '',
        address: '',
      },
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
            this.formAdress.fullName = res.data.fullName
            this.addressDetails.email = this.UserInfor.email
            this.formAdress.email = this.UserInfor.email
            this.formAdress.mobile = res.data.phoneNumber
            this.formAdress.address = res.data.address
          }
        })
    },
    onSubmit() {
      this.formAdress = this.addressDetails
    },
  },
  setup() {
    const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(() => {})
    return {
      refFormObserver,
      getValidationState,
      resetForm,
      required,
      integer,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
.ThongTinGiaoHang {
  color: black !important;
}
.card-title {
  color: black !important;
  padding-left: 0px;
  margin-left: 0px;
}
</style>
