<template>
  <div id="app">
    <PublicHeader>
      <HeaderList :current=0></HeaderList>
    </PublicHeader>
    <section class="main" ref="main">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
              <img :src="item.pic_url" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- 以下是轮播图下面的信息 -->
      <div class="home-module" v-for="(item1, index1) in mainList" :key="item1.id">
        <p class="home-module-title">
            <span class="home-module-title-icon"></span>
            <span>{{ item1.title }}</span>
        </p>
        <div v-for="(item2, index2) in mainList[index1].items" :key="index2" class="manga-item" :class="{ 'manga-list-item-big':item2.type==1, 'manga-list-item-lr':item2.type==2 }" >
            <div class="manga-item-pic">
                <img :alt="item2.title" v-lazy="item2.pic_url">
            </div>
            <p class="manga-list-item-name">{{ item2.title }}</p>
            <p class="manga-list-item-small">{{ item2.subtitle }}</p>
        </div>
      </div>
      <!-- 底部 -->
      <div class="home-module" v-for="(item3, index3) in bottomList" :key="item3.id">
        <div class="manga-item manga-list-item-lr" v-for="item4 in bottomList[index3].items" :key="item4.id">
          <div class="manga-item-pic">
            <img :alt="item4.title" v-lazy="item4.pic_url">
          </div>
            <p class="manga-list-item-name">{{ item4.title }}</p>
        </div>
      </div>
      <footer>
        <p class="footer-logo"></p>
        <a class="footer-download">安装客户端</a>
        <p class="footer-copyright">Copyright©buka.cn</p>
      </footer>
      <Gotop></Gotop>
    </section>
  </div>
</template>

<script>
import PublicHeader from '@/components/Header'
import HeaderList from '@/components/Header/HeaderList'
import Gotop from '@/components/Gotop'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Home',
  components: {
    PublicHeader,
    HeaderList,
    Gotop
  },
  data () {
    return {
      bannerList: [],
      mainList: [],
      bottomList: []
    }
  },
  methods: {
    getBottom () {
      this.$axios({
        url: 'buka/api/v3/home',
        params: {
          page: 2
        },
        method: 'GET'
      }).then(res => {
        this.bottomList = res.data.datas.items
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.$axios({
      url: 'buka/api/v3/home',
      params: {
        page: 1
      },
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
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          }
        })
        /* eslint-disable */
      })
    }).catch(err => {
      console.log(err)
    });
    this.$nextTick(() => {
      this.getBottom()
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
    margin-top: 84px;
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
          height: 19px;
          line-height: 19px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden
        }
        .manga-list-item-small{
          font-size: 12px;
          color: #999;
          width: 100%;
          height: 16px;
          line-height: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: keep-all;
          white-space: nowrap;
        }
      }
      .manga-list-item-big{
        width: 100%;
      }
      .manga-list-item-lr{
        width: 50%;
        padding: 0 0.5%;
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
