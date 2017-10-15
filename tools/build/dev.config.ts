import * as webpack from 'webpack'
import * as webpackMerge from 'webpack-merge'
import * as path from 'path'
import Constants from './constants'
import BaseConfig from './base.config'

var OpenBrowserPlugin = require('open-browser-webpack-plugin')

const devConfig: webpack.Configuration = {

  output: {
    path: Constants.DIST,
    filename: 'js/[name]_[hash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        enforce: 'pre',
        use: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]__[hash:base64:5]'
            }
          },
          'less-loader'
        ],
        include: [path.resolve(Constants.SRC, './styles')]
      }
    ]
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.NamedModulesPlugin(), // 显示模块的相对路径
    new webpack.NoEmitOnErrorsPlugin(), // 编译错误时跳出输出阶段
    new webpack.HotModuleReplacementPlugin(), // webpack模块热替换
    new OpenBrowserPlugin({
      url: 'http://localhost:' + Constants.PORT
    })
  ],

  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true, // 404时替代为index.html
    port: Constants.PORT,
    hot: true, // webpack模块热替换
    inline: true, // 内联模式，实时构建
    compress: true, // gzip压缩
    stats: {
      version: false,
      cached: false,
      chunks: false,
      children: false
    }, // 参考：webpack stats输出信息
    proxy: {
      '/api/v2': {
        target: Constants.PROXY,
      }
    } // 代理相关 https://github.com/chimurai/http-proxy-middleware
  },

  performance: {
    hints: "warning",
    maxAssetSize: 350000 // 350kb(单文件)
  } // 资源文件超过250kb时给出提示
}

export default webpackMerge(BaseConfig, devConfig)