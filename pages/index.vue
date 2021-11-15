<template>
  <!--<HomeTemplate />-->
  <div class="count">
    <h1>{{ $count }}</h1>
    <button @click="increment">Incremetar</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'ibook',
  computed: {
    $count() {
      return books.$count
    }
  },
  methods: {
    increment() {
      books.increment(1)
    }
  }
})
</script>
