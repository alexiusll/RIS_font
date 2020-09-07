/*
 * @Descripttion: 这里定义一些可以全局使用的Model
 * @Author: linkenzone
 * @Date: 2020-09-06 21:24:32
 */

import { Effect, Reducer } from 'umi';
import { message } from 'antd';
// import { ModifyInGroupInfo } from '@/services/global';
// import { InGroupInfoDataType } from './data';

export interface StateType {
  //   inGroupInfo?: InGroupInfoDataType;
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    // modifyInGroupInfo: Effect;
  };
  reducers: {
    save: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'global',

  state: {
    inGroupInfo: undefined,
  },

  effects: {
    // *modifyInGroupInfo({ payload }, { call }) {
    //   const data = yield call(ModifyInGroupInfo, payload);
    //   if (data) {
    //     message.success('修改入组信息成功！');
    //   }
    // },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    // clearSignature(state) {
    //   return { ...state, signature: undefined };
    // },
  },
};

export default Model;
