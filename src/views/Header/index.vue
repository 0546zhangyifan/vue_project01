<template>
  <header class="headClass">
      <div class="head-top">
          <div class="head-left">
              <router-link to="/" class="head-top-logo"></router-link>
              <button class="head-download">下载APP</button>
          </div>
          <router-link to="/search" class="head-top-search"></router-link>
      </div>
      <nav>
          <ul>
              <li v-for="(item, index) in list" :key="item.id">
                  <router-link :to='item.toUrl' class="link" :class="{ active:index===current }" @click="btnList(index)">{{ item.listName }}</router-link>
              </li>
          </ul>
      </nav>
      <!-- <div id="footer-arrow" class="fa buka-toup iconfont" v-if="current===0" @click="gotop">&#xe61d;</div> -->
  </header>
</template>
<script>
export default {
  name: 'PublicHeader',
  props: {
    current: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      list: [
        { id: 1, listName: '推荐', toUrl: '/' },
        { id: 2, listName: '排行', toUrl: '/top' },
        { id: 3, listName: '分类', toUrl: '/category' }
      ]
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
                width: 64px;
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
    nav{
        width: 100%;
        height: 38px;
        ul{
            height: 100%;
            width: 100%;
            display: flex;
            li{
                height: 100%;
                flex: 1;
                line-height: 38px;
                text-align: center;
                .link{
                    display: block;
                    width: 100%;
                    height: 100%;
                    font-size: 16px;
                    color: #333;
                }
                .active{
                    color: #fe960e;
                }
            }
        }
    }
    // .buka-toup{
    //   position: fixed;
    //   font-size: 25px;
    //   bottom: 15px;
    //   width: 40px;
    //   height: 40px;
    //   right: 15px;
    //   text-align: center;
    //   line-height: 40px;
    //   z-index: 999;
    //   color: #fff;
    //   border-radius: 50%;
    //   background: #fe960e;
    //   padding: 5px;
    //   opacity: .8;
    // }
    // .fa{
    //   display: inline-block;
    //   font: normal normal normal 26px/1.2 FontAwesome;
    //   text-rendering: auto;
    //   font-weight: 900;
    // }
}
</style>
