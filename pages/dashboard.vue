<template>
  <DashboardTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import authDashboardMiddleware from '@/middleware/authDashboardMiddleware'

export default Vue.extend({
  middleware: [
    authDashboardMiddleware
  ]
})
</script>
