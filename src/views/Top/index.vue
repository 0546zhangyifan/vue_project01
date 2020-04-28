<template>
  <div id="app">
    <PublicHeader :current=1></PublicHeader>
  </div>
</template>

<script>
import PublicHeader from '@/views/Header'

export default {
  name: 'Search',
  components: {
    PublicHeader
  }
}
</script>

<style lang='scss' scoped>
</style>
