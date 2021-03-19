/*
 * @Descripttion: 权限管理
 * @Author: linkenzone
 * @Date: 2021-03-19 15:26:31
 * 参考 https://beta-pro.ant.design/docs/authority-management-cn
 */

/**
 * @description: 示例定义
 * 该文件需要返回一个 function，返回的 function 会在应用初始化阶段被执行，执行后返回的对象将会被作为用户所有权限的定义。
 * 对象的每个 key 对应一个 boolean 值，只有 true 和 false，代表用户是否有该权限。
 * @Param: initialState  来自于全局初始化数据，你可以基于这些数据来初始化用户权限。
 * @param {*} initialState
 */
export default (initialState: any) => {
  console.log('权限管理模块初始化...');
  console.log('权限管理:initialState:', initialState);
  return {
    canReadFoo: true,
    canUpdateFoo: () => true,
    canDeleteFoo: (data: any) => data?.status < 1, // 按业务需求自己任意定义鉴权函数
  };
};
