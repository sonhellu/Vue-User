<template>
  <div>
    <swiper
      class="swiper-autoplay"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >
      <swiper-slide
        v-for="data in swiperData"
        :key="data.img"
      >
        <b-img
          :src="data.img"
          fluid
        />
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination"
      />
      <div
        slot="button-next"
        class="swiper-button-next"
      />
      <div
        slot="button-prev"
        class="swiper-button-prev"
      />
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      swiperData: [
        /* eslint-disable import/no-unresolved */
        /* eslint-disable global-require */
        /* eslint-disable import/no-extraneous-dependencies */
        { img: require('@/modules/Users/image/quanao5.jpg') },
        { img: require('@/modules/Users/image/quanao4.jpg') },
        { img: require('@/modules/Users/image/quanao3.jpg') },
        { img: require('@/modules/Users/image/quanao1.jpg') },
        { img: require('@/modules/Users/image/quanao6.jpg') },
        { img: require('@/modules/Users/image/quanao2.jpg') },
      ],
      /* eslint-disable global-require */
    }
  },
}
</script>
