<template>
  <b-card
    text-variant="white"
    class="cardFooter"
  >
    <b-row class="abc">
      <!-- solid color -->

      <b-col
        md="4"
        xl="4"
      >
        <b-card-title class="text-white">
          <span class="titleFooterJun"> Jun Store</span> <br>
          <span class="titleStoreJunaa">
            Với thông điệp "Refined Life", Jun mong muốn đem đến cho khách hàng
            một lối sống tinh gọn bằng các sản phẩm thời trang tinh tế.
          </span>
        </b-card-title>
      </b-col>
      <b-col
        md="3"
        xl="3"
      >
        <b-card-title class="text-white">
          <span class="titleFooterJun">Địa chỉ liên hệ</span> <br>
          <span class="titleStoreJunaa">
            Số 298 đường Cầu Diễn, quận Bắc Từ Liêm, Hà Nội <br>
            Cơ sở 2: Phường Tây Tựu, Bắc Từ Liêm, Hà Nội <br>
            Cơ sở 3: Lê Hồng Phong, TP. Phủ Lý, Hà Nam <br>
          </span>
        </b-card-title>
      </b-col>
      <b-col
        md="3"
        xl="3"
      >
        <b-card-title class="text-white">
          <span class="titleFooterJun"> Thông tin liên hệ </span> <br>
          <span class="titleStoreJunaa">
            Hotline: 0376 620 677 <br>
            Email: caothethangnvx@gmail.com <br>
          </span>
        </b-card-title>
      </b-col>
      <b-col
        md="2"
        xl="2"
      >
        <b-card-title class="text-white">
          <span class="titleFooterJun mb-1"> Mạng xã hội</span> <br>
          <span class="titleStoreJunaa">
            <facebook-icon
              size="1.5x"
              class="custom-class mr-1 iconContact"
            />
            <instagram-icon
              size="1.5x"
              class="custom-class mr-1 iconContact"
            />
            <twitter-icon
              size="1.5x"
              class="custom-class iconContact"
            />
          </span>
        </b-card-title>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BRow, BCol, BCard, BCardTitle,
} from 'bootstrap-vue'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'vue-feather-icons'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardTitle,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
  },
}
</script>

<style lang="scss" scoped>
.cardFooter {
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
  border-radius: 0 !important;
  background: #008848;
}
.titleStoreJunaa {
  font-size: 13px;
  color: white !important;
}
.iconContact {
  color: white;
}
.titleFooterJun {
  color: white !important;
}
</style>
