/*
 * @Author: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @Date: 2022-08-16 14:17:20
 * @LastEditors: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @LastEditTime: 2022-08-17 11:05:22
 * @FilePath: \Blob-Note\blobfore\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const { defineConfig } = require('@vue/cli-service') // @vue/cli-service 提供的 defineConfig 帮手函数，以获得更好的类型提示
const path = require('path');
const HotHashWebpackPlugin = require('hot-hash-webpack-plugin');
const WebpackBar = require('webpackbar');
const resolve = (dir) => path.join(__dirname, '.', dir);
module.exports = {
  transpileDependencies: true, //兼容ie浏览器
  productionSourceMap: false, //生产环境是否要生成sourceMap
  publicPath: process.env.NODE_ENV === 'production' ? '/prod/' : './',// 部署应用包时的基本路径URL
  outputDir: 'dist', // build打包时输出的文件目录
  assetsDir: 'static', //静态文件目录
  filenameHashing: false, // 静态文件中包含hash 要求index的html是vuecli自动生成的
  lintOnSave: false, //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 需要安装插件 cli-plugin-eslint

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/apis'))
      .set('@com', resolve('src/components/common'))
    // 转换base64(为了打包之后css不过大,故不转换base64,limit==1)
    // config.module
    //   .rule("images")
    //   .use("url-loader")
    //   .loader("url-loader")
    //   .tap((options) => this.assign(options, { limit: 1 }));
    // config.module.rule('svg')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/svg'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader');
    config.plugin('define').tap(args => [{
      ...args,
      "window.isDefine": JSON.stringify(true)
    }]);

  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  devServer: {
    host: "localhost",
    // host: "192.168.50.119",
    port: 8091,
    https: false,
    open: true,
    proxy: {
      ["/blobnote"]: {
        target: `http://127.0.0.1:3030`,
        changeOrigin: true,
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    }
  }

}

