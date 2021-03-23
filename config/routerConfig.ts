/*
 * @Descripttion: 路由配置
 * @Author: linkenzone
 * @Date: 2020-09-04 00:20:59
 * 路由配置 : https://umijs.org/zh-CN/docs/routing
 */

export default [
  {
    path: '/',
    component: '@/layouts/HeaderLayout',
    routes: [
      {
        path: '/',
        component: '@/pages/index.tsx',
      },

      // vtk 的演示代码
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
      // {
      //   path: '/OfficialDemo/OhifViewer',
      //   component: '@/pages/OfficialDemo/OhifViewer',
      // },

      // Cornerstone Demo
      {
        path: '/CornerstoneDemo/First',
        component: '@/pages/CornerstoneDemo/First',
      },

      // 测试权限系统

      {
        path: '/admin',
        name: 'admin',
        component: '@/pages/admin',
        access: 'adminRouteFilter', // 会调用 src/access.ts 中返回的 adminRouteFilter 进行鉴权
      },

      // 404 代码

      {
        component: '404',
      },
    ],
  },
];

// old
// export default [
//   {
//     path: '/',
//     component: '@/layouts/BlankLayout',
//     routes: [
//       {
//         path: '/',
//         component: '@/layouts/HeaderLayout',
//         routes: [
//           {
//             path: '/',
//             component: '@/pages/index.tsx',
//           },

//           // vtk 的演示代码
//           {
//             path: '/OfficialDemo',
//             component: '@/pages/OfficialDemo',
//           },
//           {
//             path: '/OfficialDemo/VTKFilters',
//             component: '@/pages/OfficialDemo/VTKFilters',
//           },

//           {
//             path: '/OfficialDemo/HttpDataSetReader',
//             component: '@/pages/OfficialDemo/HttpDataSetReader',
//           },

//           {
//             path: '/OfficialDemo/ImageSlicing',
//             component: '@/pages/OfficialDemo/ImageSlicing',
//           },

//           {
//             path: '/OfficialDemo/CropWidgets',
//             component: '@/pages/OfficialDemo/CropWidgets',
//           },

//           // ohif ui

//           {
//             path: '/OfficialDemo/OhifUi/',
//             component: '@/pages/OfficialDemo/OhifUi/',
//           },

//           {
//             path: '/OfficialDemo/OhifUi/First',
//             component: '@/pages/OfficialDemo/OhifUi/First',
//           },

//           // ohif viewer
//           // {
//           //   path: '/OfficialDemo/OhifViewer',
//           //   component: '@/pages/OfficialDemo/OhifViewer',
//           // },

//           // Cornerstone Demo
//           {
//             path: '/CornerstoneDemo/First',
//             component: '@/pages/CornerstoneDemo/First',
//           },

//           // 测试权限系统

//           {
//             path: '/admin',
//             name: 'admin',
//             component: '@/pages/admin',
//             access: 'adminRouteFilter', // 会调用 src/access.ts 中返回的 adminRouteFilter 进行鉴权
//           },

//           // 404 代码

//           {
//             component: '404',
//           },
//         ],
//       },
//     ],
//   },
// ];
