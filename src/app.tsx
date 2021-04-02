/*
 * @Descripttion: 定义全局初始数据
 * @Author: linkenzone
 * @Date: 2021-03-19 15:20:17
 */

import React from 'react';
import { BasicLayoutProps, Settings as LayoutSettings } from '@ant-design/pro-layout';

import initCornerstone from './utils/initCornerstone';

/**
 * 参考 https://umijs.org/zh-CN/plugins/plugin-initial-state
 * 参考 https://beta-pro.ant.design/docs/initial-state-cn
 * @description: 全局初始数据
 * @Param:
 * TODO 获取用户信息
 */
export async function getInitialState() {
  initCornerstone();

  console.log('生成全局初始数据...');

  return {
    userName: 'xxx主任',
    isAdmin: false,
  };
}

// 运行时配置
// https://umijs.org/zh-CN/plugins/plugin-layout

// export const layout = ({
//   initialState,
// }: {
//   initialState: { settings?: LayoutSettings; currentUser?: API.CurrentUser };
// }): BasicLayoutProps => {
//   return {
//     rightContentRender: () => <RightContent />,
//     footerRender: () => <Footer />,
//     onPageChange: () => {
//       const { currentUser } = initialState;
//       const { location } = history;
//       // 如果没有登录，重定向到 login
//       if (!currentUser && location.pathname !== '/user/login') {
//         history.push('/user/login');
//       }
//     },
//     menuHeaderRender: undefined,
//     ...initialState?.settings,
//   };
// };
