<template>
  <div id="app">
    <PublicHeader>
      <HeaderList :current="2"></HeaderList>
    </PublicHeader>
    <section class="main" style="min-height: 490px;">
      <a v-for="(item, index) in categoryList" :key="index" @click="storage(item)" class="class-item" :class="{'class-item-center':item.isCenter===1}">
        <div class="class-item-img">
          <img v-lazy="item.img" />
        </div>
        <div class="class-item-font">{{ item.gname }}</div>
      </a>
    </section>
  </div>
</template>
<script>
import PublicHeader from '@/views/Header'
import HeaderList from '@/views/Header/HeaderList'
import { mapMutations } from 'vuex'

export default {
  name: 'Category',
  components: {
    PublicHeader,
    HeaderList
  },
  data () {
    return {
      categoryList: []
    }
  },
  methods: {
    ...mapMutations('class', ['SET_CLASS']),
    storage (item) {
      this.SET_CLASS(item)
      this.$router.push('/class')
    }
  },
  created () {
    this.$axios({
      url: '/data/category.json',
      method: 'GET'
    }).then(res => {
      this.categoryList = res.data
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
    margin-top: 78px;
    padding: 28px 14px 0px 14px;
    flex-direction: column;
    overflow: auto;
    .class-item{
      text-align: center;
      margin-bottom: 18.2px;
      float: left;
      width: 30%;
      height: 126px;
      font-size: 14px;
      color: #333;
      .class-item-img{
        width: 77px;
        height: 77px;
        margin: 0 auto 9.1px;
        border-radius: 50%;
        img{
          width: 100%;
          border: none;
          border-radius: 50%;
        }
      }
      .class-item-font{
        font-size: 14px;
        height: 19px;
        line-height: 19px;
      }
    }
    .class-item-center{
      margin-left: 17.3px;
      margin-right: 17.3px;
    }
  }
}
</style>
