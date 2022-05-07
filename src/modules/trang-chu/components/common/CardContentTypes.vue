<template>
  <section id="card-content-types">
    <b-row>
      <b-col class="text-center">
        <h2>Về chúng tôi</h2>
      </b-col>
    </b-row>
    <div class="lineAbout mb-2" />
    <b-row>
      <b-col
        md="6"
        lg="6"
      >
        <b-card
          :img-src="require('@/modules/Users/image/card3.jpg')"
          overlay
          text-variant="white"
          img-alt="card img"
          body-class="bg-overlay"
        />
      </b-col>
      <b-col class="titleVanVo">
        Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần sẽ
        được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những sản phẩm
        Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của mình.
      </b-col>
    </b-row>
    <div class="lineAbout mb-2" />
    <b-row>
      <b-col
        md="6"
        lg="6"
        class="titleVanVo"
      >
        Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần sẽ
        được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những sản phẩm
        Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của mình.
      </b-col>
      <b-col
        md="6"
        lg="6"
      >
        <b-card
          :img-src="require('@/modules/Users/image/card4.jpg')"
          overlay
          text-variant="white"
          img-alt="card img"
          body-class="bg-overlay"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        md="12"
        lg="12"
      >
        <b-card
          :img-src="require('@/modules/Users/image/card3.jpg')"
          img-alt="Card image"
          img-top
        >
          <b-card-text class="text-center">
            Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần
            sẽ được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những
            sản phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của
            mình.
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BCardText,
  // BLink,
  // BListGroup,
  // BListGroupItem,
  // BCardTitle,
  // BCardBody,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    // BLink,
    // BCardTitle,
    // BListGroup,
    // BListGroupItem,
    // BCardBody,
  },
  data() {
    return {
      listData: [
        { text: 'Cras justo odio' },
        { text: 'Dapibus ac facilisis in' },
        { text: 'Vestibulum at eros' },
      ],
      kitchenSinkList: [
        { text: 'Cras justo odio' },
        { text: 'Vestibulum at eros' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.lineAbout {
  height: 1px;
  width: 100%;
  background: gray;
}
.titleVanVo {
  padding-top: 10%;
}
</style>
