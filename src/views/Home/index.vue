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
      bannerList: []
    }
  },
  mounted () {
    /* eslint-disable */
    setTimeout(() => {
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
        loop : true,
      })
    }, 200);
    /* eslint-disable */
  },
  created () {
    this.$axios({
      url: 'buka/api/v3/home?page=1',
      method: 'GET'
    }).then(res => {
      this.bannerList = res.data.datas.items[0].items
      console.log(res.data.datas.items[0].items.length)
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
    .swiper-container{
      height: 240px;
      width: 100%;
      .swiper-wrapper{
        .swiper-slide{
          img{
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
