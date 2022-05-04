<template>
  <form-wizard
    ref="refFormWizard"
    color="#7367F0"
    :title="null"
    :subtitle="null"
    finish-button-text="Submit"
    back-button-text="Previous"
    hide-buttons
    class="checkout-form-wizard steps-transparent"
  >
    <!-- account detail tab -->
    <tab-content
      title="Giỏ hàng"
      icon="feather icon-shopping-cart"
    >
      <CheckoutStepCart
        :total-details="checkoutDetails.total"
        @next-step="formWizardNextStep"
      />
    </tab-content>

    <!-- address -->
    <tab-content
      title="Địa chỉ"
      icon="feather icon-home"
    >
      <CheckoutStepAddress
        :address-details="checkoutDetails.address"
        :total-details="checkoutDetails.total"
        @next-step="formWizardNextStep"
      />
    </tab-content>

    <!-- social link -->
    <tab-content
      title="Thanh toán"
      icon="feather icon-credit-card"
    >
      <CheckoutStepPayment
        :payment-details="checkoutDetails"
        @next-step="formWizardNextStep"
      />
    </tab-content>
  </form-wizard>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import { ref } from '@vue/composition-api'
import CheckoutStepAddress from './CheckoutStepAddress.vue'
import CheckoutStepPayment from './CheckoutStepPayment.vue'
import CheckoutStepCart from './CheckoutStepCart.vue'

export default {
  components: {
    // 3rd Party
    FormWizard,
    TabContent,

    // SFC
    CheckoutStepPayment,
    CheckoutStepAddress,
    CheckoutStepCart,
  },
  setup() {
    const refFormWizard = ref(null)
    const formWizardNextStep = () => {
      refFormWizard.value.nextTab()
    }
    const checkoutDetails = ref({
      address: {
        fullName: '',
        mobile: '',
        email: '',
        address: '',
      },
      payment: {
        cvv: '',
      },
      total: {
        total: 0,
        listProduct: [],
      },
    })

    return {
      refFormWizard,
      formWizardNextStep,

      // Dummy Details
      checkoutDetails,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-wizard.scss';
@import '~@core/scss/base/pages/app-ecommerce.scss';
@import '~vue-form-wizard/dist/vue-form-wizard.min.css';
</style>

<style lang="scss" scoped>
.checkout-form-wizard ::v-deep {
  .wizard-tab-content {
    box-shadow: none !important;
    background: transparent !important;
    padding: 0;
  }
}
</style>
