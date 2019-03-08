const path = require('path')
module.exports = {
  // 将 examples 目录添加为新的页面
  pages: {
    index: {
      // page 的入口
      entry: "examples/main.js",
      // 模板来源
      template: "public/index.html",
      // 输出文件名
      filename: "index.html"
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
    .rule('compile')
    .test(/\.js$/)
    .include
      .add(path.resolve(__dirname, './packages'))
      .end()
      .use("babel")
      .loader('babel-loader')
      .options({
        presets: [
          ['@babel/preset-env', { modules: false }]
        ]
      })
  }
};
