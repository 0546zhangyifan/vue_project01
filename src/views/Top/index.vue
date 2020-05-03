<template>
  <div id="app">
    <PublicHeader>
      <HeaderList :current=1></HeaderList>
    </PublicHeader>
    <section class="mangalist-main">
      <div class="manga-item" v-for="(item, index) in mainList" :key="item.id">
        <router-link :to='`/detail/${item.mid}`'>
          <span class="img_wraper">
            <img v-lazy='`${item.logodir}/32h.jpg`'>
          </span>
          <p>
            <span class="manga-item-name">
              <span class="manga-item-name_2">
                  <span>{{ index+1 }}.</span>
                  <span class="manga-item-finish" v-if="item.finish==1">[完]</span>
                  {{ item.name }}
              </span>
            </span>
            <span class="manga-item-author">{{ item.author }}</span>
          </p>
        </router-link>
      </div>
      <footer class="public-footer">
        <div class="public-footer-top">
          <a href="javascript:;" class="footer-link" id="download_client_app">下载客户端</a>
        </div>
        <div class="public-footer-bottom">Copyright©buka.cn</div>
      </footer>
    </section>
  </div>
</template>

<script>
import PublicHeader from '@/views/Header'
import HeaderList from '@/views/Header/HeaderList'
export default {
  name: 'Top',
  data () {
    return {
      mainList: []
    }
  },
  components: {
    PublicHeader,
    HeaderList
  },
  created () {
    this.$axios({
      url: 'buka/ranking/get_data',
      method: 'POST'
    }).then(res => {
      this.mainList = res.data.datas.items
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang='scss' scoped>
@charset "utf-8";
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .mangalist-main{
    height: 100%;
    width: 100%;
    flex: 1;
    margin-top: 84px;
    padding-top: 12px;
    flex-direction: column;
    overflow: auto;
    .manga-item{
      float: left;
      text-align: left;
      width: 29%;
      margin-left: 3.3%;
      a{
        display: block;
        text-decoration: none;
        color: inherit;
        height: 228.125px;
        .img_wraper{
          width: 108.75px;
          height: 163.125px;
          img{
            width: 108.75px;
            display: inline;
            height: auto;
          }
        }
        p{
          margin-top: 4.2px;
          width: 100%;
          .manga-item-name{
            display: block;
            width: 100%;
            color: #333!important;
            .manga-item-name_2{
              width: 100%;
              min-height: 19px;
              line-height: 19px;
              max-height: 38px;
              float: left;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              font-size: 14px;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              .manga-item-finish{
                color: #EA6644;
                white-space: nowrap;
              }
            }
          }
          .manga-item-author{
            color: #999;
            width: 100%;
            height: 16px;
            line-height: 16px;
            display: block;
            font-size: 12px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .public-footer{
      clear: both;
      display: block;
      margin-top: 21px;
      margin-bottom: 14px;
      text-align: center;
      font-size: 14px;
      font-family: Microsoft YaHei,Droid Sans Fallback,SimHei,Arial,Helvetica,tahoma,sans-serif;
      .public-footer-top{
        .footer-link{
          display: inline-block;
          color: #333;
        }
      }
      .public-footer-bottom{
        font-size: 12px;
        margin: 4px 0;
        color: #ccc
      }
    }
  }
}
</style>
