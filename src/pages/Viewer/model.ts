/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-04-14 17:25:05
 */
import type { Reducer } from 'umi';
import { Effect } from 'umi';

import HelloWorldTool from '@/lib/cornerstoneTools/HelloWorldTool';

export type StateType = {
  GridLayout: { x: number; y: number };
  activeTool: string;
  cornerstoneElement: any;
  tools: any;
};

/**
 * @description: 初始状态
 */
const initialState = {
  GridLayout: { x: 1, y: 1 },
  activeTool: 'Wwwc',
  cornerstoneElement: null,
  tools: [
    // Mouse
    {
      name: 'Wwwc',
      mode: 'active',
      modeOptions: { mouseButtonMask: 1 },
    },
    {
      name: 'Zoom',
      mode: 'active',
      modeOptions: { mouseButtonMask: 2 },
    },
    {
      name: 'Pan',
      mode: 'active',
      modeOptions: { mouseButtonMask: 4 },
    },
    'Length',
    'Angle',
    'Bidirectional',
    'FreehandRoi',
    'Eraser',

    // 自定义工具
    {
      name: 'HelloWorld',
      mode: 'active',
      toolClass: HelloWorldTool,
      props: { name: 'HelloWorld' },
    },

    // Scroll
    { name: 'StackScrollMouseWheel', mode: 'active' },
    // Touch
    { name: 'PanMultiTouch', mode: 'active' },
    { name: 'ZoomTouchPinch', mode: 'active' },
    { name: 'StackScrollMultiTouch', mode: 'active' },
  ],
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
