<template>
  <div class="">
    <vue-good-table
      :columns="columns"
      :rows="data"
    >
      <template
        slot="table-row"
        slot-scope="props"
      >
        <div
          v-if="props.column.field === 'fileName'"
          class="text-nowrap"
        >
          <a
            class="text-nowrap"
            style="text-decoration: none; color: #5a8dee"
            :href="props.row.urlPath"
            download
          >{{ props.row.fileName }}</a>
        </div>
        <span
          v-else-if="props.column.field === 'createdDate'"
          class=""
        >{{
          formateDate(props.row.createdDate)
        }}</span>
        <span
          v-else-if="props.column.field === 'created'"
          class=""
        >{{
          formateDate(props.row.created)
        }}</span>

        <span
          v-else-if="props.column.field === 'actions'"
          class="columnAction "
        >
          <span
            v-if="actions.some(value => value === 'Trash2Icon')"
            title="Xóa tài liệu"
          >
            <feather-icon
              icon="Trash2Icon"
              class="mr-1 pointerIcon"
              @click="handleShowPopup(props.row.id)"
            />
          </span>
          <span
            v-if="actions.some(value => value === 'ArrowDownIcon')"
            title="Tải tài liệu"
          >
            <feather-icon
              icon="ArrowDownIcon"
              class="mr-1 pointerIcon"
            />
          </span>
        </span>
      </template>
    </vue-good-table>
    <!-- <popup-notifi
      :title="title"
      :noti="noti"
      @handleAccept="handleAcceptDelete"
      @handleCancel="handleAcceptClose"
    /> -->
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import dayjs from 'dayjs'
// eslint-disable-next-line import/extensions
// import PopupNotifi from '@/modules/common/PopupNotifi'

export default {
  name: 'UploadFile',
  components: {
    VueGoodTable,
    // PopupNotifi,
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [],
    },
    actions: {
      type: Array,
      default: () => [],
    },
    disableDelete: {
      type: Boolean,
    },
  },
  data() {
    return {
      id: '',
      activeDelete: true,
      data: [],
    }
  },
  watch: {
    rows() {
      this.data = this.rows
    },
  },
  created() {
    if (this.disableDelete != null && this.disableDelete === false) {
      this.activeDelete = false
    }
    if (this.rows !== null) {
      this.data = this.rows
    }
  },
  methods: {
    formateDate(vl) {
      return dayjs(vl).format('DD-MM-YYYY')
    },
    handleAcceptClose() {},
    handleAcceptDelete() {
      this.$emit('handleDeleteFile', this.id)
    },
    handleShowPopup(id) {
      this.id = id
      this.$bvModal.show('modal-footer-sm')
      const data = {
        id: this.id,
        titlePopup: 'Xác nhận xóa file upload',
        notiPopup: 'Bạn có muốn xóa file không?',
        checkActionNoti: 'deleteFile',
      }
      this.$emit('handleDeleteFile', data)
    },
  },
}
</script>

<style scoped>
.columnAction {
  justify-content: center;
}
</style>
