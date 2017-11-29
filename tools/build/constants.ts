import * as path from 'path';

declare var __dirname: string;

// 路径相关
const ROOT: string = path.resolve(__dirname, '../../');
const DIST: string = path.resolve(ROOT, './dist/');
const SRC: string = path.resolve(ROOT, './src/');
const ASSETS: string = path.resolve(ROOT, './assets/');

// 端口
const PROXY: string = 'http://10.1.50.242:8080';
const PORT: number = 8080;

export default {
  ROOT,
  SRC,
  DIST,
  ASSETS,
  PROXY,
  PORT,
};
