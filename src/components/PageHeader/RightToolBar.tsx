/*
 * @Descripttion: 右侧的工具栏
 * @Author: linkenzone
 * @Date: 2021-03-23 16:26:09
 */

import React, { CSSProperties, useEffect, useState } from 'react';
import { Avatar, Menu, Dropdown, Modal, Button, Badge, Popover } from 'antd';
import { connect, useModel } from 'umi';
import {
  BarsOutlined,
  BellOutlined,
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

  const menu = (
    <Menu style={{ width: 144, textAlign: 'center' }}>
      <Menu.Item style={{ fontWeight: 700, fontSize: '14px', fontFamily: 'initial' }}>
        配准融合
      </Menu.Item>
      <Menu.Item style={{ fontWeight: 700, fontSize: '14px', fontFamily: 'initial' }}>
        ROI分析
      </Menu.Item>
      <Menu.Item style={{ fontWeight: 700, fontSize: '14px', fontFamily: 'initial' }}>
        功能分析
      </Menu.Item>
      <Menu.Item style={{ fontWeight: 700, fontSize: '14px', fontFamily: 'initial' }}>
        手术规划
      </Menu.Item>
      <Menu.Item style={{ fontWeight: 700, fontSize: '14px', fontFamily: 'initial' }}>
        药代动力学分析
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={bodyStyle}>
      {/* <ToolButton>
        <UploadOutlined style={{ fontSize: '28px' }} />
      </ToolButton>

      <ToolButton>
        <DownloadOutlined style={{ fontSize: '28px' }} />
      </ToolButton>

      <Dropdown overlay={menu} placement="bottomCenter" arrow>
        <a
          style={{
            height: '48px',
            width: '48px',
            textAlign: 'center',
            paddingTop: '10px',
          }}
        >
          <BarsOutlined style={{ fontSize: '28px', display: 'block' }} />
        </a>
      </Dropdown>

      <ToolButton>
        <SettingOutlined style={{ fontSize: '28px' }} />
      </ToolButton> */}

      <ToolButton>
        <HomeOutlined style={{ fontSize: '28px' }} />
      </ToolButton>

      <div
        style={{
          display: 'inline-block',
          width: '2px',
          backgroundColor: '#39bbdb',
          height: '32px',
          marginTop: '8px',
          marginLeft: '8px',
          marginRight: '8px',
        }}
      />

      <Popover placement="bottom" title={'消息通知'} content={'xxxx'} trigger="click">
        <ToolButton>
          <Badge count={10} overflowCount={99} size="small" offset={[2, 5]}>
            <BellOutlined style={{ fontSize: '28px', color: '#39bbdb' }} />
          </Badge>
        </ToolButton>
      </Popover>
    </div>
  );
};

export default connect()(RightToolBar);
