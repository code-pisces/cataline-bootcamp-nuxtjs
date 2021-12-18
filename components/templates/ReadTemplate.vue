<template>
  <div class="read-template">
    <h2>{{ $book.title }}</h2>

    <div>
      <VerticalPagination/>
      <PageSlide/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    }
  },
})
</script>

<style lang="scss" scoped>
.read-template {
  display: grid;
  gap: 64px;

  > div {
    display: grid;
    grid-template-columns: 150px 720px;
    gap: 40px;
  }
}
</style>
