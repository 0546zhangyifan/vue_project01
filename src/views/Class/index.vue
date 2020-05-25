<template>
  <div id="app">
    <PublicHeader>
      <HeaderBack :detailName="className"></HeaderBack>
    </PublicHeader>
    <van-list class="mangalist-main" ref="xxx" v-model="loading" :offset=200 :finished="finished" finished-text="没有更多数据啦(*^﹏^*)" @load="onLoad">
      <a :href="`/m/${item.mid}`" class="manga-item" v-for="(item, index) in classList" :key="index">
        <span class="img_wraper" style="width: 108.75px;height: 163.125px;">
          <img v-lazy="`${item.logodir}/32h.jpg`">
        </span>
        <p>
          <span class="manga-item-name">
            <span class="manga-item-name_2">{{ item.name }}</span>
          </span>
            <span class="manga-item-author">{{ item.author }}</span>
        </p>
      </a>
      <PublicFooter></PublicFooter>
    </van-list>
  </div>
</template>
<script>
import PublicHeader from '@/components/Header'
import HeaderBack from '@/components/Header/HeaderBack'
import PublicFooter from '@/components/Footer'
import Qs from 'qs'
import { mapGetters } from 'vuex'

export default {
  name: 'Class',
  data () {
    return {
      classList: [],
      classListLength: 15,
      startId: 0,
      loading: false,
      finished: false
    }
  },
  components: {
    PublicHeader,
    HeaderBack,
    PublicFooter
  },
  methods: {
    onLoad () {
      this.$axios({
        url: 'buka/category/ajax_group',
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        data: {
          fun: this.theInformation.fun,
          param: this.theInformation.param,
          gname: this.theInformation.gname,
          count: this.theInformation.count,
          start: this.startId
        },
        transformRequest: [function (data) {
          return Qs.stringify(data)
        }]
      }).then(res => {
        this.loading = false
        this.classList.push(...(res.data.datas.items))
        this.classListLength = res.data.datas.items.length
      }).catch(err => {
        console.log(err)
      })
      if (this.classListLength < 15) {
        this.finished = true
      }
      // console.log(this.classListLength)
      this.startId += 16
      // console.log(this.$refs.xxx.$el.scrollHeight - this.$refs.xxx.$el.scrollTop - this.$refs.xxx.$el.clientHeight)
    }
  },
  computed: {
    ...mapGetters('class', ['className', 'theInformation'])
  }
}
</script>
<style lang='scss' scoped>
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
    overflow: auto;
    .manga-item{
      float: left;
      text-align: left;
      width: 29%;
      margin-left: 3.3%;
      display: block;
      text-decoration: none;
      color: inherit;
      height: 228.125px;
      overflow: hidden;
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
}
</style>
<style lang='scss'>
// .van-list__finished-text{
//   clear: both;
//   bottom: 30px;
//   color: #B5B5B5;
//   text-align: center;
//   font-size: 14px;
// }
</style>
