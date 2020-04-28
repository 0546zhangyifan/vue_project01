module.exports = {
  devServer: {
    proxy: {
      // key: value
      //      key - 前缀
      //      value - 是跟 http-proxy-middleware 相同的一个配置对象
      '/buka': {
        // 目标地址，只写主机
        target: 'http://m.buka.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/buka': ''
        }
      }
    }
  }
}
