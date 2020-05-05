<template>
  <header class="headClass">
    <div class="head-top">
      <div class="head-left">
        <router-link to="/" class="head-top-logo"></router-link>
        <button class="head-download">安装APP</button>
      </div>
      <router-link to="/search" class="head-top-search"></router-link>
    </div>
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'PublicHeader',
  data () {
    return {
      show: false
    }
  },
  methods: {
    btnList (index) {
      this.current = index
    },
    gotop () {
      this.parentElement.scrollTop = 0
    }
  }
}
</script>
<style lang='scss' scoped>
.headClass {
    height: 84px;
    background: #fff;
    position: fixed;
    border-bottom: 1px solid rgba(0,0,0,.18);
    z-index: 90;
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    .head-top{
        display: flex;
        justify-content: space-between;
        height: 40px;
        background: #fff;
        width: 100%;
        margin-top: 5.6px;
        overflow: hidden;
        .head-left{
            height: 100%;
            width: 172px;
            display: flex;
            margin-left: 14px;
            .head-top-logo{
                width: 80px;
                height: 35px;
                background: url('../../assets/icon/logo1.png') no-repeat;
                background-size: 60px 29px;
            }
            .head-download{
                border: none;
                border-radius: 5px;
                text-align: center;
                height: 28px;
                line-height: 28px;
                width: 68px;
                padding: 0 7px;
                margin-top: 2px;
                font-size: 12px;
                color: #fff;
                background: #fe960e;
            }
        }
        .head-top-search{
            width: 120px;
            height: 35px;
            text-align: right;
            background: url('../../assets/icon/search1.png') no-repeat;
            background-size: 26px 26px;
            background-position: 80px 2px
        }
    }
}
</style>
