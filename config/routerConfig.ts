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

          // vtk 的演示代码
          {
            path: '/OfficialDemo/VTKFilters',
            component: '@/pages/OfficialDemo/VTKFilters',
          },

          {
            path: '/OfficialDemo/HttpDataSetReader',
            component: '@/pages/OfficialDemo/HttpDataSetReader',
          },

          {
            path: '/OfficialDemo/ImageSlicing',
            component: '@/pages/OfficialDemo/ImageSlicing',
          },

          {
            path: '/OfficialDemo/CropWidgets',
            component: '@/pages/OfficialDemo/CropWidgets',
          },

          // ohif ui

          {
            path: '/OfficialDemo/OhifUi/',
            component: '@/pages/OfficialDemo/OhifUi/',
          },

          {
            path: '/OfficialDemo/OhifUi/First',
            component: '@/pages/OfficialDemo/OhifUi/First',
          },

          // ohif viewer
          {
            path: '/OfficialDemo/OhifViewer',
            component: '@/pages/OfficialDemo/OhifViewer',
          },

          // Cornerstone Demo
          {
            path: '/CornerstoneDemo/First',
            component: '@/pages/CornerstoneDemo/First',
          },

          // 404 代码

          {
            component: '404',
          },
        ],
      },
    ],
  },
];
