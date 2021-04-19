/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-04-14 17:25:05
 */
import { Effect, Reducer } from 'umi';

export type StateType = {
  GridLayout: { x: number; y: number };
  activeTool: string;
};

/**
 * @description: 初始状态
 */
const initialState = {
  GridLayout: { x: 1, y: 1 },
  activeTool: 'Wwwc',
};

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {};
  reducers: {
    save: Reducer<StateType>;
    reset: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'ImgViewer2D',

  state: initialState,

  effects: {},

  reducers: {
    /**
     * @description: 储存配置
     * @Param:
     * @param {*} state
     * @param {*} param2
     */
    save(state, { payload }) {
      return { ...state, ...payload };
    },

    /**
     * @description: 初始化
     * @Param:
     */
    reset() {
      return initialState;
    },
  },
};

export default Model;
