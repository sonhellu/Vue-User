<template>
  <b-modal
    id="modal-footer-sm"
    ref="popupNotifi"
    :title="title"
    header-bg-variant="primary"
    no-close-on-backdrop
    :hide-header-close="true"
  >
    <template #modal-header>
      <h5 style="color: white">
        {{ title }}
      </h5>
    </template>
    <template #default>
      <p>
        {{ noti }}
      </p>
    </template>
    <template #modal-footer>
      <div class="col text-right">
        <b-button
          class="mr-1"
          size="sm"
          variant="primary"
          type="submit"
          @click="accept()"
        >
          Đồng ý
        </b-button>
        <b-button
          size="sm"
          variant="danger"
          @click="cancel()"
        >
          Đóng
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { BModal, BButton } from 'bootstrap-vue'

export default {
  name: 'PopupNotifi',
  components: {
    BModal,
    BButton,
  },
  // eslint-disable-next-line comma-spacing
  props: {
    title: {
      type: String,
      default: '',
    },
    noti: {
      type: String,
      default: '',
    },
  },
  methods: {
    accept() {
      this.$emit('handleAccept')
      this.$refs.popupNotifi.hide()
    },
    cancel() {
      this.$emit('handleCancel')
      this.$refs.popupNotifi.hide()
    },
    hideModal() {
      this.$refs.popupNotifi.hide()
    },
    showModal() {
      this.$refs.popupNotifi.show()
    },
  },
}
</script>
