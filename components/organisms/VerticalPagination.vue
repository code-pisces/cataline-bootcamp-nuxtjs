<template>
  <hooper group="book" :settings="hooperSettings" class="vertical-pagination">
    <slide v-for="(slide, indx) in $bookPages" :key="indx" :index="indx">
      <SlidePaginationItem />
    </slide>
  </hooper>
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
  computed: {
    $bookPages() {
      return books.$single.pages
    }
  },

  data() {
    return {
      updateCarousel: 0,
      hooperSettings: {
        vertical: true,
        itemsToShow: 3
      }
    }
  },

})
</script>

<style lang="scss" scoped>
.vertical-pagination {
  width: 150px;
  height: 100vh;
}

.is-current {
  > div {
    border: 3px solid #707070;
  }
}
</style>
