<template>
  <div class="car">
    <div class="cars-swiper-wrap">
      <swiper class="swiper" :options="swiperOption" ref="hits">
        <swiper-slide>
          <cars-list height='500'/>
        </swiper-slide>
        <swiper-slide>
          <cars-list />
        </swiper-slide>
        <swiper-slide>
          <cars-list />
        </swiper-slide>
        <swiper-slide>
          <cars-list />
        </swiper-slide>
        <swiper-slide>
          <cars-list />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
      <div class="swiper-button-next" slot="button-next" @click="next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import CarsList from "@/components/CarsList";
import "swiper/swiper-bundle.css";
export default {
  name: "Cars",
  components: {
    Swiper,
    SwiperSlide,
    CarsList
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        // navigation: {
        //   nextEl: "swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
      }
    };
  },
  methods: {
    user() {
      this.$router.push({
        name: "User"
      });
    },
    next(){
       this.$refs.hits.$swiper.slideNext()
    },
    prev(){
      this.$refs.hits.$swiper.slidePrev()
    },
  },
};
</script>
<style lang="scss" scope>
@import "./Cars.scss";

.user {
}
</style>