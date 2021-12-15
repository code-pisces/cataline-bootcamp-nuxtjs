<template>
  <LoginTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import authLoginMiddleware from '@/middleware/authLoginMiddleware'

export default Vue.extend({
  middleware: [authLoginMiddleware]
})
</script>
