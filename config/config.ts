// https://umijs.org/config/
import { defineConfig } from 'umi';
import routerConfig from './routerConfig';
import proxy from './proxy';

// process.env包含着关于系统环境的信息
const { REACT_APP_ENV } = process.env;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  copy: ['/src/assets/favicon.png'],
  publicPath: '/', //静态资源
  history: { type: 'hash' }, // 使用hash路由
  hash: true,
  mock: false, //关闭mock
  routes: routerConfig,
  dynamicImport: {}, // 启动按需加载
  locale: {
    default: 'zh-CN',
  },
  theme: {
    'primary-color': '#39bbdb',
  },
  dva: {
    //dva 配置
    //hmr: true,
  },
  proxy: proxy[REACT_APP_ENV || 'dev'],
});
