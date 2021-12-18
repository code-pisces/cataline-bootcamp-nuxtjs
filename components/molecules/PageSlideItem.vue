<template>
  <div class="page-slide__item">
    <div v-html="content"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    content: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.page-slide__item {
  height: 100%;
  width: 100%;
  padding: 92px 68px;
  background: #fff;
}
</style>
