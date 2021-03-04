/*
 * @Descripttion: 路由配置
 * @Author: linkenzone
 * @Date: 2020-09-04 00:20:59
 * 路由配置 : https://umijs.org/zh-CN/docs/routing
 */

export default [
  {
    path: '/',
    component: '@/layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '@/layouts/HeaderLayout',
        routes: [
          {
            path: '/',
            component: '@/pages/index.tsx',
          },
          {
            path: '/OfficialDemo',
            component: '@/pages/OfficialDemo',
          },

          {
            path: '/OfficialDemo/VTKFilters',
            component: '@/pages/OfficialDemo/VTKFilters',
          },

          {
            path: '/OfficialDemo/HttpDataSetReader',
            component: '@/pages/OfficialDemo/HttpDataSetReader',
          },

          {
            component: '404',
          },
        ],
      },
    ],
  },
];
