/*
 * @Descripttion: 项目的配置文件
 * @Author: linkenzone
 * @Date: 2020-09-04 00:20:42
 * 配置文件文档 : https://umijs.org/config/
 */

import { defineConfig } from 'umi';
import routerConfig from './routerConfig';
import proxy from './proxy';
import chainWebpack from './chainWebpack';

// process.env包含着关于系统环境的信息
const { REACT_APP_ENV } = process.env;

export default defineConfig({
  // 设置 node_modules 目录下依赖文件的编译方式。
  nodeModulesTransform: {
    // 默认是 all，全部编译
    type: 'none',
    exclude: [],
  },

  // 设置要复制到输出目录的文件或文件夹
  copy: ['/src/assets/favicon.png'],
  // 配置 webpack 的 publicPath
  // 在dev 下为 /
  // 在prod 下为
  publicPath: process.env.NODE_ENV === 'production' ? '/static/ris/' : '/',
  // 使用hash路由
  history: { type: 'hash' },
  // 配置是否让生成的文件包含 hash 后缀
  hash: true,
  //关闭mock
  mock: false,
  // 是否启用按需加载
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  // 国际化插件，用于解决 i18n 问题
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  // 配置主题，实际上是配 less 变量
  theme: {
    'primary-color': '#39bbdb',
  },
  // 开启 dva
  dva: {
    // 表示是否启用 dva model 的热更新
    hmr: true,
  },
  // antd 配置
  antd: {
    // 开启暗色主题
    // dark: true,
    // 开启紧凑主题
    // compact: true,
  },

  // 配置标题
  title: false,

  // 配置代理 proxy 配置仅在 dev 时生效。
  proxy: proxy[REACT_APP_ENV || 'dev'],
  // 使用 webpack 5 代替 webpack 4 进行构建。
  webpack5: {},
  // 导入 webpack 的配置
  chainWebpack: chainWebpack,
  // 导入路由
  routes: routerConfig,

  // 忽略 moment 的 locale 文件，用于减少尺寸
  ignoreMomentLocale: true,

  // 使用 esbuild 作为压缩器
  // 试验性功能，可能有坑，但效果拔群。
  // esbuild: {},
});
