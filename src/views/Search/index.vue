<template>
  <div class="search-main" style="height: 0px; display: block;">
    <div class="serach-head">
      <div class="search-head-input">
        <div class="search-head-input-wraper">
          <span class="search-icon"></span>
          <input type="text" class="search-keyword" id="keyword" placeholder="漫画 | 作者 | 资讯 | 漫展" v-model="searchVal" />
        </div>
      </div>
      <a href="javascript:;" class="cancel-btn" @click="recall">取消</a>
    </div>
    <div class="search-center">
      <div class="search-lists" v-if="searchVal && !isSearch">
        <a href="javascript:;" class="search-item" v-for="(item,index) in searchList" :key="index" @click="thisInfo(item)">{{ item[0] }}</a>
      </div>
      <div class="mangalist-main nopadding" style="margin-top:0px;" v-if="isSearch">
        <a :href="`/m/${item.mid}`" class="manga-item" style="height: 213.125px;" v-for="(item,index) in searchInfoList" :key="index">
          <span class="img_wraper" style="width: 108.75px; height: 163.125px;">
            <img
              :src="`${item.logodir}/32h.jpg`"
              style="width: 100%; height: 163.125px;"
            />
          </span>
          <p style="margin-bottom:10px;" class="ellipis">
            <span class="manga-item-name">
              <span class="manga-item-name_2">{{ item.name}} </span>
            </span>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Qs from 'qs'
export default {
  name: 'Search',
  data () {
    return {
      searchVal: '',
      isSearch: false,
      searchList: [],
      searchInfoList: [],
      searchZi: '',
      startId: 0,
      countNum: 100
    }
  },
  watch: {
    searchVal (newVal, oldVal) {
      clearTimeout(this.timer)
      if (newVal) {
        this.timer = setTimeout(() => {
          this.searchInfo()
          this.isSearch = false
          this.searchInfoList = []
        }, 500)
      }
    }
  },
  methods: {
    recall () {
      this.$router.back()
    },
    onLoad () {
      this.$axios({
        url: 'buka/search/ajax_search',
        method: 'POST',
        data: {
          key: this.searchZi,
          start: this.startId,
          count: this.countNum
        },
        transformRequest: [function (data) {
          return Qs.stringify(data)
        }]
      }).then(res => {
        this.searchInfoList = res.data.datas.items
      }).catch(err => {
        console.log(err)
      })
    },
    thisInfo (item) {
      this.isSearch = true
      this.searchZi = item[0]
      this.onLoad()
    },
    searchInfo () {
      this.$axios({
        url: 'buka/search/ajax_tips',
        method: 'POST',
        data: {
          key: this.searchVal
        },
        transformRequest: [function (data) {
          return Qs.stringify(data)
        }]
      }).then(res => {
        this.searchList = res.data.datas
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.search-main{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  background: #fff;
  font-size: 14px;
  font-family: Microsoft YaHei,Droid Sans Fallback,SimHei,Arial,Helvetica,tahoma,sans-serif;
  color: #333;
  .serach-head{
    height: 49px;
    .search-head-input{
      width: 79%;
      float: left;
      position: relative;
      height: 100%;
      .search-head-input-wraper{
        padding: 7px 14px;
        background: #e4e5e7;
        border-radius: 3px;
        height: 35px;
        margin-left: 14px;
        margin-top: 7px;
        .search-icon{
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url(../../assets/icon/search2.png) no-repeat;
          background-size: 20px 20px;
          position: absolute;
          left: 22px;
          top: 15px;
        }
        .search-keyword{
          width: 80%;
          border-radius: 3px;
          position: absolute;
          top: 8.5px;
          left: 50px;
          line-height: 30px;
          border: none;
          background: #e4e5e7;
          outline:none;
        }
      }
    }
    .cancel-btn{
      line-height: 48px;
      float: right;
      width: 19%;
      text-align: center;
      margin-left: 2.8px;
      display: block;
      color: inherit;
      height: auto;
      -webkit-tap-highlight-color: transparent;
    }
  }
  .search-center{
    width: 100%;
    border-top: 1px solid #f1f1f1;
    padding: 14px 0;
    background: #fff;
    .search-lists{
      .search-item{
        display: block;
        height: 42px;
        line-height: 42px;
        padding-left: 14px;
        color: #999;
        cursor: pointer;
      }
    }
    .mangalist-main{
      overflow: hidden;
      text-align: center;
      color: #B5B5B5;
      margin-top: 0px;
      .manga-item{
        float: left;
        text-align: left;
        width: 29%;
        margin-left: 12.4px;
        .ellipis{
          margin-top: 4.2px;
          width: 100%;
          .manga-item-name{
            display: block;
            width: 100%;
            color: #333!important;
            .manga-item-name_2{
              width: 100%;
              max-height: 38px;
              line-height: 18px;
              float: left;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -moz-box-orient: vertical;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
    .nopadding{
      padding: 0!important;
    }
  }
}
</style>
<style lang='scss'>
.van-list__finished-text{
  clear: both;
  bottom: 30px;
  color: #B5B5B5;
  text-align: center;
  font-size: 14px;
}
</style>
