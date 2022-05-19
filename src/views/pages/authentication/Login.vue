<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link
        class="brand-logo align-items-center"
        :to="{
          path: '/page-product',
        }"
      >
        <h2 class="brand-text text-primary ml-1 mb-0">
          JUN STORE
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-0"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center">
          <b-img
            fluid
            src="@/modules/Users/image/login.jpg"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            class="mb-1 titleDangki"
            title-tag="h2"
          >
            ĐĂNG NHẬP
          </b-card-title>
          <!-- form -->
          <validation-observer
            ref="loginForm"
            #default="{invalid}"
          >
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent="login"
            >
              <!-- email -->
              <b-form-group
                label="Username"
                label-for="login-username"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Username"
                  vid="text"
                  rules="required"
                >
                  <b-form-input
                    id="login-username"
                    v-model="username"
                    :state="errors.length > 0 ? false : null"
                    name="login-username"
                    placeholder="Nhập username"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Mật khẩu</label>
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      type="password"
                      :state="errors.length > 0 ? false : null"
                      class="form-control-merge"
                      name="login-password"
                      placeholder="Nhập mật khẩu"
                    />
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                :disabled="invalid"
              >
                Đăng nhập
              </b-button>
            </b-form>
          </validation-observer>

          <b-card-text class="text-center mt-2">
            <span>Bạn chưa có tài khoản? </span>
            <b-link :to="{ name: 'auth-register' }">
              <span>&nbsp;Đăng kí ngay</span>
            </b-link>
          </b-card-text>
          <div class="divider my-2">
            <div class="divider-text">
              hoặc
            </div>
          </div>

          <!-- social buttons -->
          <div class="auth-footer-btn d-flex justify-content-center">
            <b-button
              variant="facebook"
              href="javascript:void(0)"
            >
              <feather-icon icon="FacebookIcon" />
            </b-button>
            <b-button
              variant="twitter"
              href="javascript:void(0)"
            >
              <feather-icon icon="TwitterIcon" />
            </b-button>
            <b-button
              variant="google"
              href="javascript:void(0)"
            >
              <feather-icon icon="MailIcon" />
            </b-button>
            <b-button
              variant="github"
              href="javascript:void(0)"
            >
              <feather-icon icon="GithubIcon" />
            </b-button>
          </div>
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
  VBTooltip,
} from 'bootstrap-vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { required, email } from '@validations'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      status: '',
      password: '',
      username: '',
      required,
      email,
    }
  },
  computed: {},
  methods: {
    login() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          this.$store
            .dispatch('qlUser/layDuLieuDangNhap', {
              password: this.password,
              username: this.username,
            })
            .then(res => {
              const roles = res.data.roles.find(item => item === 'ROLE_USER')
              if (res && res.data && roles === 'ROLE_USER') {
                localStorage.setItem('UserData', JSON.stringify(res.data))
                localStorage.setItem(
                  'access_Token',
                  JSON.stringify(res.data.access_token),
                )
                this.$toasted.global.showSuccessMessage({
                  message: 'Đăng nhập thành công!',
                })
                this.$router.push({
                  path: '/page-product',
                })
              } else {
                this.$toasted.global.showErrorMessage({
                  message: 'Đăng nhập thất bại!',
                })
              }
            })
            .catch(() => {
              this.$toasted.global.showErrorMessage({
                message: 'Đăng nhập thất bại!',
              })
            })

          // localStorage.setItem('isLogin', true)
          // localStorage.setItem('userData', JSON.stringify(this.UserData))
          // this.$toasted.clear()
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
