<template>
  <header class="headClass">
    <div class="head-top">
      <div class="head-left">
        <router-link to="/" class="head-top-logo"></router-link>
        <!-- <button class="head-download">安装APP</button> -->
        <van-button type="primary" text="安装APP" @click="show = true" class="head-download"></van-button>
      </div>
      <router-link to="/search" class="head-top-search"></router-link>
    </div>
    <slot></slot>
    <van-overlay :show="show">
      <div class="wrapper">
        <!-- 插入 -->
        <div class="download-modal-dialog">
          <div class="dialog-top">
            <p class="dialog-top-close">
              <van-icon name="cross" @click.stop="show = false"></van-icon>
            </p>
            <p class="dialog-logo">
              <span class="dialog-top-log-img"></span>
              <span class="dialog-log-text">请选择需要下载的客户端类型</span>
            </p>
          </div>
          <div class="dialog-btns">
            <a href="javascript:;" class="dialog-btns-apple">
              <img src="../../assets/icon/iphone.png" alt="" />
              <span>iPhone</span>
            </a>
            <a href="javascript:;" class="dialog-btns-apple">
               <img src="../../assets/icon/ipad.png" alt="" />
              <span>iPad</span>
            </a>
            <a href="javascript:;" class="dialog-btns-android">
              <img src="../../assets/icon/android.png" alt="" />
              <span>Android</span>
            </a>
            <a href="javascript:;" class="dialog-btns-android" style="margin-left: 2%;">
              <img src="../../assets/icon/AndroidHD.png" alt="" />
              <span>AndroidHD</span>
            </a>
          </div>
        </div>
        <!-- 插入 -->
      </div>
    </van-overlay>
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
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .download-modal-dialog{
    width: 80% !important;
    max-width: 265px !important;
    height: 215px;
    padding: 2%;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 3px;
    .dialog-top{
      position: relative;
      height: 80px;
      .dialog-top-close{
        font-size: 20px;
        display: inline-block;
        color: #fe960e;
        width: 20%;
        height: 30px
      }
      .dialog-logo{
        color: #999;
        position: absolute;
        left: 50%;
        width: 200px;
        margin-left: -90px;
        top: 10px;
        text-align: center;
        .dialog-top-log-img{
          width: 150px;
          height: 50px;
          background: url('../../assets/icon/download.png') no-repeat;
          background-size: 150px 38px;
          display: block;
          margin: 0 auto
        }
        .dialog-log-text{
          display: block;
          margin-top: -5px;
          font-size: 14px;
        }
      }
    }
    .dialog-btns{
      overflow: hidden;
      font-size: 13px;
      a{
        display: flex;
        align-items: center;
        height: 55px;
        img{
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
      }
      .dialog-btns-apple{
        width: 49%;
        // display: block;
        float: left;
        height: 55px;
        margin-top: 2%;
        border-radius: 3px;
        line-height: 50px;
        color: #fff;
        background: #fe960e;
        &:nth-of-type(2){
          margin-left: 2%;
        }
      }
      .dialog-btns-android{
        background: #a4c639;
        width: 49%;
        // display: block;
        float: left;
        height: 55px;
        margin-top: 2%;
        border-radius: 3px;
        line-height: 50px;
        color: #fff;
      }
    }
  }
}
</style>
