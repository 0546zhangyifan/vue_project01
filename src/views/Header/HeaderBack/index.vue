<template>
  <nav class="head-detail-bar">
    <a href="javascript:history.back();" class="head-detail-return">
      <span class="return-icon"></span>
    </a>
    <span class="head-detail-center">{{ this.detailName }}</span>
  </nav>
</template>
<script>
export default {
  name: 'HeaderBack',
  props: {
    detailName: {
      type: String,
      default: 'sss'
    }
  }
}
</script>
<style lang='scss' scoped>
.head-detail-bar{
  height: 38px;
  line-height: 38px;
  background: #fff;
  color: #666;
  font-size: 15px!important;
  overflow: hidden;
  position: relative;
  font-family: Microsoft YaHei,Droid Sans Fallback,SimHei,Arial,Helvetica,tahoma,sans-serif;
  .head-detail-return{
    position: absolute;
    top: 5px;
    width: 120px;
    height: 34px;
    display: block;
    text-decoration: none;
    color: inherit;
    .return-icon{
      width: 18px;
      height: 18px;
      position: absolute;
      left: 16px;
      background: url('../../../assets/icon/back01.png') no-repeat;
      display: block;
      background-size: 18px 18px;
      float: left;
      margin-top: 7px;
    }
  }
  .head-detail-center{
    display: block;
    width: 50%;
    position: absolute;
    left: 50%;
    top: 6px;
    margin-left: -25%;
    text-align: center;
    line-height: 28px;
    font-size: 15px!important;
  }
}
</style>
