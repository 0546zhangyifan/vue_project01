<template>
  <div id="footer-arrow" class="fa buka-toup iconfont" @click="gotop" v-gotop>&#xe61d;</div>
</template>
<script>
export default {
  name: 'Gotop',
  methods: {
    gotop () {
      this.$el.parentElement.scrollTop = 0
    }
  }
}
</script>
<style lang='scss' scoped>
.buka-toup{
    position: fixed;
    font-size: 25px;
    bottom: 15px;
    width: 40px;
    height: 40px;
    right: 15px;
    text-align: center;
    line-height: 40px;
    z-index: 999;
    color: #fff;
    border-radius: 50%;
    background: #fe960e;
    padding: 5px;
    opacity: .8;
}
.fa{
    display: inline-block;
    font: normal normal normal 26px/1.2 FontAwesome;
    text-rendering: auto;
    font-weight: 900;
}
</style>
