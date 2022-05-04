<template>
  <div>
    <b-modal
      id="modal-footer-sm"
      :title="title"
      button-size="sm"
      ok-title="Đồng ý"
      cancel-title="Đóng"
      cancel-variant="outline-secondary"
      @ok="accept"
      @cancel="cancel"
    >
      <p>
        {{ noti }}
      </p>
    </b-modal>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'

export default {
  name: 'PopupNotifi',
  components: {},
  // eslint-disable-next-line comma-spacing
  props: {
    title: String,
    noti: String,
  },
  methods: {
    accept() {
      this.$emit('handleAccept')
    },
    cancel() {
      this.$emit('handleCancel')
    },
  },
}
</script>

<style scoped></style>
