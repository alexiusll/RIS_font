/*
 * @Descripttion: dev 下的配置文件，覆盖默认配置
 * @Author: linkenzone
 * @Date: 2021-03-20 23:41:59
 * 配置文件文档 : https://umijs.org/config/
 */

import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: '/ris/', // 配置 webpack 的 publicPath
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  webpack5: {
    // lazyCompilation: {},
  },
  /**
   * 导出的多环境变量命名约定：一律大写且采用下划线分割单词
   * 注意：在添加变量后，需要在src/typing.d.ts内添加该变量的声明，否则在使用变量时IDE会报错。
   */
  define: {
    API_URL: 'http://39.106.111.52:84', // 测试服务器API地址，本系统
    API_AUTH_URL: 'http://39.106.111.52/api', // 测试服务器API地址,用户管理系统
    API_SECRET_KEY: 'XXXXXXXXXXXXXXXX', // API调用密钥
  },
});
