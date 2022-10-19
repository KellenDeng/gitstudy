const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭语法检查
  lintOnSave: false,

  //开启代理服务器：方式1
  /* devServer: {
    proxy: 'http://localhost:5000'
  }, */
  devServer: {
    proxy: {
      '/mystudent': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/mystudent': '' },
        ws: true,
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },

      }
    }
  }
})

