<template>
  <div class="wrapper">
    <hooper group="book" class="page-slide" ref="carousel" @slide="updateCarousel">
      <slide v-for="(slide, indx) in $bookPages" :key="indx" :index="indx">
        <PageSlideItem :content="slide.text" />
      </slide>
    </hooper>

    <PageButtons :prevPage="slidePrev" :nextPage="slideNext" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default Vue.extend({
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      carouselData: 0
    }
  },
  computed: {
    $bookPages() {
      return books.$single.pages
    }
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData)
    }
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev()
    },
    slideNext() {
      this.$refs.carousel.slideNext()
    },
    updateCarousel(payload: any) {
      this.myCarouselData = payload.currentSlide
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;

  .page-slide {
    height: 100vh;
    box-shadow: 0px 5px 34px #00000029;
  }
}
</style>
