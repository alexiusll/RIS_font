/*
 * @Descripttion: 右侧的工具栏
 * @Author: linkenzone
 * @Date: 2021-03-23 16:26:09
 */

import React, { CSSProperties, useEffect, useState } from 'react';
import { Avatar, Menu, Dropdown, Modal, Button } from 'antd';
import { connect, useModel } from 'umi';
import {
  BarsOutlined,
  DownloadOutlined,
  HomeOutlined,
  SettingOutlined,
  UploadOutlined,
} from '@ant-design/icons';

interface RightToolBarProps {
  // onClickSign: () => void;
  bodyStyle?: CSSProperties;
}

const ToolButton: React.FC<{ onClick?: () => void }> = (props) => {
  const { children, onClick } = props;
  return (
    <Button
      type="link"
      style={{ height: '48px', width: '48px', display: 'inline-block', padding: '0', margin: '0' }}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </Button>
  );
};

const RightToolBar: React.FC<RightToolBarProps> = (props) => {
  const { bodyStyle } = props;
  // 获取基础信息
  const { initialState, loading, refresh, setInitialState } = useModel('@@initialState');

  return (
    <div style={bodyStyle}>
      <ToolButton>
        <UploadOutlined style={{ fontSize: '28px' }} />
      </ToolButton>

      <ToolButton>
        <DownloadOutlined style={{ fontSize: '28px' }} />
      </ToolButton>

      <ToolButton>
        <BarsOutlined style={{ fontSize: '28px' }} />
      </ToolButton>

      <ToolButton>
        <SettingOutlined style={{ fontSize: '28px' }} />
      </ToolButton>

      <ToolButton>
        <HomeOutlined style={{ fontSize: '28px' }} />
      </ToolButton>

      <div
        style={{ display: 'inline-block', width: '2px', backgroundColor: '#39bbdb', height: '' }}
      ></div>
    </div>
  );
};

export default connect()(RightToolBar);
