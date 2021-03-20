/*
 * @Descripttion: 定义全局初始数据
 * @Author: linkenzone
 * @Date: 2021-03-19 15:20:17
 */

/**
 * 参考 https://umijs.org/zh-CN/plugins/plugin-initial-state
 * 参考 https://beta-pro.ant.design/docs/initial-state-cn
 * @description: 全局初始数据
 * @Param:
 * TODO 获取用户信息
 */
export async function getInitialState() {
  console.log('生成 全局初始数据...');
  return {
    userName: '用户为 xxx',
  };
}
