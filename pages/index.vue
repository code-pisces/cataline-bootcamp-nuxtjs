<template>
  <div class="home">
    <NuxtLogo />
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'dashboard',

  mounted() {
    const posts = this.$axios.$get('/post')
  }
})
</script>

<style scoped>
a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
