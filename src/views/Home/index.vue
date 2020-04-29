<template>
  <div id="app">
    <PublicHeader :current=0></PublicHeader>
    <section class="main">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
              <img :src="item.pic_url" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- 以下是轮播图下面的信息 -->
      <div class="home-module">
        <p class="home-module-title">
            <span class="home-module-title-icon"></span>
            <span>布卡娘推荐</span>
        </p>
        <div class="manga-item manga-list-item-big">
            <div class="manga-item-pic">
                <img height="180.00px" alt="英雄？我早就不当了" src="http://c-r7.ibuka.cn/auto/appRecom/202001091736_5e16f41070ff5.jpg" lazy="loaded">
            </div>
            <p class="manga-list-item-name">英雄？我早就不当了</p>
            <p class="manga-list-item-small">一个脱离了中二病的传说级英雄</p>
        </div>
        <!--  -->
        <div class="manga-item manga-list-item-lr manga-list-item-l">
            <div class="manga-item-pic">
                <img height="117.49px" alt="阿多尼斯" src="http://c-r7.ibuka.cn/auto/appRecom/202004171622_5e99674a1cca6.jpg" lazy="loaded">
            </div>
            <p class="manga-list-item-name">阿多尼斯</p>
            <p class="manga-list-item-small">让世界屈服于她的脚下</p>
        </div>
        <div class="manga-item manga-list-item-lr manga-list-item-r">
            <div class="manga-item-pic">
                <img height="117.49px" alt="蛇蝎不好惹：弃后也妖娆" src="http://c-r7.ibuka.cn/auto/appRecom/20181030141438_5bd7f6ce193c9.jpg" lazy="loaded">
            </div>
            <p class="manga-list-item-name">蛇蝎不好惹：弃后也妖娆</p>
            <p class="manga-list-item-small">化身蛇蝎，也要向害我的人复仇</p>
        </div>
        <div class="manga-item manga-list-item-lr manga-list-item-l">
            <div class="manga-item-pic">
                <img height="117.49px" alt="无限使徒与十二战姬" src="http://c-r7.ibuka.cn/auto/appRecom/202004171719_5e99748846840.jpg" lazy="loaded">
            </div>
            <p class="manga-list-item-name">无限使徒与十二战姬</p>
            <p class="manga-list-item-small">最强使徒（单身狗）讨老婆之路</p>
        </div>
        <div class="manga-item manga-list-item-lr manga-list-item-r">
            <div class="manga-item-pic">
                <img height="117.49px" alt="兼职神仙" src="http://i-cdn.ibuka.cn/auto/appRecom/20190114142552_5c3c2b6fddf66.jpg" lazy="loaded">
            </div>
            <p class="manga-list-item-name">兼职神仙</p>
            <p class="manga-list-item-small">我是天才、帅又多金，还是神</p>
        </div>
        <div class="manga-item manga-list-item-lr manga-list-item-l">
            <div class="manga-item-pic">
                <img height="117.49px" alt="据说我是王的女儿？" src="http://i-cdn.ibuka.cn/auto/appRecom/20190730152518_5d3ff0dea1d9a.jpg" lazy="loaded">
            </div>
            <p class="manga-list-item-name">据说我是王的女儿？</p>
            <p class="manga-list-item-small">重生成婴儿给暴君当女儿</p>
        </div>
        <div class="manga-item manga-list-item-lr manga-list-item-r">
            <div class="manga-item-pic">
                <img height="116.36px" alt="大理寺日志" src="http://i-cdn.ibuka.cn/auto/appRecom/20160927160211_57ea2782d6a50.jpg" lazy="loaded">
            </div>
            <p class="manga-list-item-name">大理寺日志</p>
            <p class="manga-list-item-small">白猫警长，升堂~~</p>
        </div>
      </div>
      <footer>
        <p class="footer-logo"></p>
        <a class="footer-download">安装客户端</a>
        <p class="footer-copyright">Copyright©buka.cn</p>
      </footer>
    </section>
  </div>
</template>

<script>
import PublicHeader from '@/views/Header'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Home',
  components: {
    PublicHeader
  },
  data () {
    return {
      bannerList: [],
      mainList: []
    }
  },
  // mounted () {
  //   /* eslint-disable */
  //   setTimeout(() => {
  //   new Swiper('.swiper-container', {
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable :true,
  //     },
  //     loop : true,
  //   })
  //   }, 200);
  //   /* eslint-disable */
  // },
  created () {
    this.$axios({
      url: 'buka/api/v3/home?page=1',
      method: 'GET'
    }).then(res => {
      this.bannerList = res.data.datas.items[0].items
      this.mainList = res.data.datas.items.slice(1)
      this.$nextTick(() => {
        /* eslint-disable */
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          loop : true,
        })
        /* eslint-disable */
        console.log(this.mainList[0].title)
      })
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
  .main{
    height: 100%;
    width: 100%;
    flex: 1;
    margin-top: 89px;
    padding: 7.5px;
    flex-direction: column;
    overflow: auto;
    .swiper-container{
      height: 240px;
      width: 100%;
      margin-bottom: 18px;
      .swiper-wrapper{
        .swiper-slide{
          img{
            width: 100%;
          }
        }
      }
    }
    .home-module{
      margin-bottom: 18px;
      .home-module-title{
        margin: 0;
        font-size: 15px;
        height: 17px;
        line-height: 17px
        span{
          float: left;
        }
        .home-module-title-icon{
          display: inline-block;
          border-radius: 3px;
          margin-top: 1px;
          width: 3px;
          height: 15px;
          background: #fe960e;
          margin-right: 10px
        }
      }
      .manga-item{
        display: inline-block;
        margin-top: 12px;
        position: relative;
        .manga-item-pic{
          position: relative;
          img{
            width: 100%;
            display: block;
            border-radius: 3px
          }
        }
        p{
          margin: 0;
          text-align: left;
        }
        .manga-list-item-name{
          font-size: 14px;
          color: #333;
          margin: 5px 0;
          max-height: 38px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden
        }
        .manga-list-item-small{
          font-size: 12px;
          color: #999;
        }
      }
      .manga-list-item-big{
        width: 100%;
      }
      .manga-list-item-lr{
        width: 49%;
      }
      .manga-list-item-l{
        margin-right: 1%
      }
      .manga-list-item-r{
        margin-left: 1%
      }
    }
    footer{
      text-align: center;
      height: 107px;
      width: 100%;
      .footer-logo{
        margin: 10px auto 0;
        width: 145px;
        height: 30px;
        background: url('../../assets/icon/footerImg.png') no-repeat;
        background-size: 145px 30px;
      }
      .footer-download{
        display: inline-block;
        padding: 10px 15px;
        border-radius: 5px;
        margin-top: 10px;
        font-size: 15px;
        color: #fff;
        background: #fe960e;
      }
      .footer-copyright{
        color: #999;
        font-size: 13px;
        margin: 10px 0;
      }
    }
  }
}
</style>
