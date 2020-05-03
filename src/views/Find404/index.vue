<template>
  <div id="app">
    <h1>这页面在下没写~</h1>
    <div class="back">
      <i @click="goback">点这儿</i>
    </div>
  </div>
</template>
<script>

export default {
  name: 'find404',
  methods: {
    goback () {
      this.$router.back()
    }
  }
}
</script>
<style lang='scss' scoped>
#app {
  h1 {
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
  .back{
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    font-weight: 900;
    text-align: center;
  }
}
</style>
