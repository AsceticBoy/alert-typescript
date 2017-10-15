import * as webpack from 'webpack'
import * as path from 'path'
import Constants from './constants'

var HtmlWebpackPlugin = require('html-webpack-plugin')

declare var process: NodeJS.Process

const baseConfig: webpack.Configuration = {

  entry: {
    'polyfills': ['babel-polyfill'],
    'vendors': [
      'react',
      'react-dom'
    ],
    'main': path.resolve(Constants.SRC, './entry.tsx'),
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: [Constants.ASSETS, '/node_modules/']
      }, // ts|tsx
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'image/[name][hash:8].[ext]',
            limit: 8192,
          }
        },
        include: Constants.ASSETS
      }, // image
      {
        test: /\.(mp3|mp4|wav)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'audio/[name].[ext]'
          }
        },
        include: Constants.ASSETS
      }, // video
      {
        test: /\.(woff|woff2|eot|svg|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'font/[name].[ext]'
          }
        },
        include: Constants.ASSETS
      } // font
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }), // 定义全局变量
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'polyfills'],
    }), // 抽离公共模块并缓存
    new HtmlWebpackPlugin({
      title: 'Alert',
      filename: 'index.html',
      template: path.resolve(Constants.ASSETS, './templates/index.html'),
      inject: true, // 注入Js
      hash: true, // 生成hash追加到Js Css etc...后面
      //chunks: ['vendors', 'polyfills', 'main'] // 设置了这个选项所有chunk(entry入口)都需要手动插入，不会自动添加，且不需要.js(加了就匹配不到了)
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // 自动补充扩展名
    alias: {
      Components: path.resolve(Constants.SRC, './components'),
      Styles: path.resolve(Constants.SRC, './styles')
    } // ../../styles/... -> Styles/...
  }

}

export default baseConfig