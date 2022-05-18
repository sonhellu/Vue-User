<template>
  <b-card-body>
    <div class="mt-2 mb-2 text-center">
      <h4 class="textTuongTu">
        Sản phẩm tương tự
        <div class="unline" />
      </h4>
    </div>

    <!-- Swiper -->
    <swiper
      class="swiper-responsive-breakpoints px-4 py-2"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="(product, index) in danhSachProductAll"
        :key="index"
      >
        <b-link>
          <div class="item-heading">
            <h5 class="text-truncate mb-0 text-center">
              {{ product.name }}
            </h5>
            <small
              class="text-body "
            ><div class="text-center">{{ product.category_name }}</div></small>
          </div>
          <div class="img-container w-100 mx-auto py-75">
            <div>
              <b-link
                class="text-body"
                :to="{
                  name: 'detail-product',
                  query: { id: product.id },
                }"
              >
                <div
                  v-if="product.sale_percentage"
                  class="saleProductRelate__title text-center"
                >
                  <span
                    class="saleProductRelate__title--percent"
                  >-{{ product.sale_percentage }}%</span>
                  <br>
                  Giảm
                </div>
                <b-img
                  :src="product.image"
                  fluid
                />
              </b-link>
            </div>
          </div>
          <div class="item-meta text-center">
            <ul class="unstyled-list list-inline mb-25">
              <li
                v-for="star in 5"
                :key="star"
                class="ratings-list-item"
              >
                <feather-icon
                  icon="StarIcon"
                  size="18"
                  class="mr-25"
                  :class="[
                    { 'fill-current': star <= product.rating },
                    star <= product.rating ? 'text-warning' : 'text-muted',
                  ]"
                />
              </li>
            </ul>
            <p class="card-text text-primary mb-0">
              {{ product.price.toLocaleString() }} đ
            </p>
          </div>
        </b-link>
      </swiper-slide>

      <!-- Add Arrows -->
      <div
        slot="button-next"
        class="swiper-button-next"
      />
      <div
        slot="button-prev"
        class="swiper-button-prev"
      />
    </swiper>
  </b-card-body>
</template>

<script>
import { BCardBody, BImg, BLink } from 'bootstrap-vue'
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    BCardBody,
    BImg,
    BLink,

    // 3rd Party
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters({
      danhSachProductAll: 'qlUser/danhSachProductAll',
    }),
  },
  created() {
    this.layDanhSachProductAll()
  },
  methods: {
    layDanhSachProductAll() {
      this.$store.dispatch('qlUser/layDuLieuProductAll', { page: 0, sort: 0 })
    },
  },
  setup() {
    const swiperOptions = {
      slidesPerView: 5,
      spaceBetween: 55,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1600: {
          slidesPerView: 4,
          spaceBetween: 55,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 55,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 55,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 55,
        },
      },
    }

    /* eslint-disable global-require */
    /* eslint-disable import/no-unresolved */

    /* eslint-disable global-require */
    return {
      swiperOptions,
    }
  },
}
</script>

<style lang="scss">
/* @import '@core/scss/vue/libs/swiper.scss'; */
@import '@/@core/scss/vue/libs/swiper.scss';
@import '~swiper/css/swiper.css';
.textTuongTu {
  color: gray !important;
  font-size: 25px;
}
.unline {
  background: gray;
  height: 2px;
  width: 15%;
  margin: 0 auto;
}
.saleProductRelate {
  padding-top: 0 !important;
  position: relative;
  flex-direction: column;
  &__title {
    padding-top: 3px;
    position: absolute;
    max-width: 50px;
    width: 100%;
    right: 0;
    min-height: 14%;
    color: white;
    background: #f5ce2f;
    &--percent {
      color: red;
    }
  }
}
</style>
