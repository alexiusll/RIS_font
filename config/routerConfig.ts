// https://umijs.org/zh-CN/docs/routing
// 路由配置

export default [
  {
    path: '/',
    component: '@/layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '@/pages/index.tsx',
      },
      {
        component: '@/pages/404',
      },
    ],
  },
];
