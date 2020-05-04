<template>
    <footer class="public-footer">
        <div class="public-footer-top">
            <a href="javascript:;" class="footer-link" id="download_client_app">下载客户端</a>
        </div>
        <div class="public-footer-bottom">Copyright©buka.cn</div>
    </footer>
</template>
<script>
export default {
  name: 'PublicFooter'
}
</script>
<style lang='scss' scoped>
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
</style>
