<template>
  <div id="app">
    <PublicHeader :current=2></PublicHeader>
  </div>
</template>
<script>
import PublicHeader from '@/views/Header'

export default {
  name: 'Category',
  components: {
    PublicHeader
  }
}
</script>
<style lang='scss' scoped>
#app {
  h1 {
    height: 200px;
  }
}
</style>
