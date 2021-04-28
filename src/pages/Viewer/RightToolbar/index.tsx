/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-04-22 17:01:46
 */
/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-03-27 17:29:07
 */
import {
  BarsOutlined,
  DownloadOutlined,
  SettingOutlined,
  TableOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Menu, Popover } from 'antd';
import React, { useState, useEffect } from 'react';
import style from './style.less';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import type { StateType } from '../model';

import cornerstone from 'cornerstone-core';

import cornerstoneTools from 'cornerstone-tools';

type LeftToolbarProps = {
  dispatch: Dispatch;
  ImgViewer2D: StateType;
};

const LeftToolbar: React.FC<LeftToolbarProps> = (props) => {
  const { ImgViewer2D, dispatch } = props;

  useEffect(() => {
    console.log('ImgViewer2D.cornerstoneElement', ImgViewer2D.cornerstoneElement);

    // const toolData =
    //   ImgViewer2D.cornerstoneElement
    //     ? cornerstoneTools.getToolState(ImgViewer2D.cornerstoneElement, 'Length')
    //     : null;

    // console.log('toolData', toolData);

    // 销毁的时候
    return () => {};
  }, [ImgViewer2D]);

  return <div></div>;
};

const mapStateToProps = ({ ImgViewer2D }: { ImgViewer2D: StateType }) => {
  return {
    ImgViewer2D,
  };
};

export default connect(mapStateToProps)(LeftToolbar);
