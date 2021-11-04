<template>
  <div class="post">
    <h1>Postagem</h1>

    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
}

export default Vue.extend({
  async asyncData() {
    await sleep()

    const title = 'My Post Title'
    const content = 'Lorem ipsum dolor sit...'

    return { title, content }
  },
  data() {
    return {
      title: '',
      content: ''
    }
  }
})
</script>
