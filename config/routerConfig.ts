// https://umijs.org/zh-CN/docs/routing
// 路由配置

export default [
    {
      path: '/',
      component: '@/layouts/BlankLayout',
      routes: [
        {
          path: '/',
          component: '@/layouts/BasicLayout',
          routes: [
            {
              path: '/',
              component: '@/pages/SampleList',
            },
            {
              path: '/sample',
              component: '@/layouts/CrfDetailLayout',
              exact: false,
              routes: [
                {
                  path: '/sample/:id(\\d+)/filter_cycle/:id(\\d+)',
                  component: '@/pages/CrfDetail/filter_cycle',
                  exact: true,
                },
                {
                  path: '/sample/:id(\\d+)/treatment_cycle/:id(\\d+)',
                  component: '@/pages/CrfDetail/TreatmentCycle',
                  exact: true,
                },
                {
                  path: '/sample/:id(\\d+)/out_cycle/:id(\\d+)',
                  component: '@/pages/CrfDetail/OutCycle',
                  exact: true,
                },
                {
                  path: '/sample/:id(\\d+)/out_security_cycle/:id(\\d+)',
                  component: '@/pages/CrfDetail/outSecurityCycle',
                  exact: true,
                },
                {
                  path: '/sample/:id(\\d+)/lifetime_cycle/:id(\\d+)',
                  component: '@/pages/CrfDetail/LifeTimeCycle',
                  exact: true,
                },
                {
                  path: '/sample/:id(\\d+)/unplanned_cycle/:id(\\d+)',
                  component: '@/pages/CrfDetail/UnplannedCycle',
                  exact: true,
                },
                {
                  path: '/sample/:id(\\d+)/summary',
                  component: '@/pages/CrfDetail/Summary',
                  exact: true,
                },
              ],
            },
          ],
        },
        {
          component: '@/pages/404',
        },
      ],
    },
  ];
  