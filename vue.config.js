let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@@', resolve('src/components'))
  },
  devServer:{ //这里面的某一配置项不受支持
      open: true, // 是否自动打开浏览器页面
      host: 'localhost', // 指定使用一个 host。默认是 localhost 或者 '127.0.0.1'
      port: 8080, // 端口地址
      https: false, // 使用https提供服务
      proxy: null, // string | Object 代理设置
  }
}
