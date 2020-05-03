<template>
  <nav>
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        <router-link :to='item.toUrl' class="link" :class="{ active:index===current }" @click="btnList(index)">{{ item.listName }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'HeaderList',
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
  }
}
</script>
<style lang='scss' scoped>
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
</style>
