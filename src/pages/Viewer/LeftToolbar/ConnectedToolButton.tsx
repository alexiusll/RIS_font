/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-04-19 17:21:35
 */
import { Button, Dropdown, Menu, Popover } from 'antd';
import React, { useState, useEffect } from 'react';
import style from './style.less';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import type { StateType } from '../model';

const LeftToolButton: React.FC<{
  dispatch: Dispatch;
  toolName: string;
  ImgViewer2D: StateType;
}> = (props) => {
  const { ImgViewer2D, toolName, dispatch } = props;
  return (
    <Button
      type="link"
      style={{ height: '48px', display: 'block', padding: '8px', margin: '0' }}
      onClick={() => {
        dispatch({
          type: 'ImgViewer2D/save',
          payload: { activeTool: toolName },
        });
      }}
      className={`${style.LeftToolButton} ${
        ImgViewer2D?.activeTool === toolName ? style.LeftToolButton_active : ''
      }`}
    >
      {toolName}
    </Button>
  );
};

const mapStateToProps = ({ ImgViewer2D }: { ImgViewer2D: StateType }) => {
  return {
    ImgViewer2D,
  };
};

const ConnectedToolButton = connect(mapStateToProps)(LeftToolButton);

export default ConnectedToolButton;
