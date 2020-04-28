<template>
  <div id="app">
    <PublicHeader :current=0></PublicHeader>
  </div>
</template>

<script>
import PublicHeader from '@/views/Header'

export default {
  name: 'Home',
  components: {
    PublicHeader
  },
  created () {
    this.$axios({
      url: 'http://localhost:8080/buka/api/v3/home?page=1',
      method: 'GET'
    }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang='scss' scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
