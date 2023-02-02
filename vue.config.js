module.exports = {
  // 将打包后的绝对路径改为相对路径
  publicPath: '',
  lintOnSave: false,
  // 设置打包时不生成sourceMap
  productionSourceMap: false,

  devServer: {
    //   overlay: { //关闭检查蒙层
    //       warnings: false,
    //       errors: false
    //   },
    open: true, // 配置是否自动启动浏览器
    //   port: 8080, // 端口号
    //   host: '0.0.0.0',
    //   https: false, // 是否使用https, https使用node的一个内部默认的ca证书
    //   proxy: 'http://127.0.0.1:8080/' // 配置跨域处理,只有一个代理
    proxy: {
      // 配置多个跨域代理
      '/api': {
        //要访问的跨域的api的域名
        target: 'http://192.168.3.110:3000/mock/18/',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
