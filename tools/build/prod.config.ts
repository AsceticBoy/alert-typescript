import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import * as path from 'path';
import Constants from './constants';
import BaseConfig from './base.config';

const autoprefixer = require('autoprefixer');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const version: string = require('../../package.json').version;

const prodConfig: webpack.Configuration = {
  output: {
    path: Constants.DIST,
    filename: 'js/app-' + version + '-[id].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: ['style-loader', 'css-loader'],
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer()],
              },
            },
            'less-loader',
          ],
        }),
        include: [path.resolve(Constants.SRC, './styles')],
      },
    ],
  },

  plugins: [
    new ExtractTextWebpackPlugin({
      filename: 'css/[name].css',
      allChunks: true,
    }),
    new webpack.HashedModuleIdsPlugin({
      hashDigestLength: 6,
    }), // 生成散列作为模块id
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    }), // js压缩
  ],

  performance: {
    hints: 'error',
    maxAssetSize: 350000, // 350kb(单文件)
  }, // 资源文件超过250kb时给出提示
};

export default webpackMerge(BaseConfig, prodConfig);
