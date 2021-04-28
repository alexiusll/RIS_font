/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-04-09 14:41:07
 */
import { BarsOutlined, DownloadOutlined, SettingOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import style from './style.less';
import { useIntl } from 'umi';

const ToolButton: React.FC<{ onClick?: () => void }> = (props) => {
  const { children, onClick } = props;
  return (
    <Button
      type="link"
      style={{ height: '48px', width: '48px', display: 'inline-block', padding: '0', margin: '0' }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const menu = (
  <Menu style={{ width: 144, textAlign: 'center' }}>
    <Menu.Item className={style.ment_item}>配准融合</Menu.Item>
    <Menu.Item className={style.ment_item}>ROI分析</Menu.Item>
    <Menu.Item className={style.ment_item}>功能分析</Menu.Item>
    <Menu.Item className={style.ment_item}>手术规划</Menu.Item>
    <Menu.Item className={style.ment_item}>药代动力学分析</Menu.Item>
  </Menu>
);

const TopToolbar: React.FC<unknown> = () => {
  return (
    <div style={{ marginRight: '36px', height: '48px', display: 'flex' }}>
      <ToolButton
        onClick={() => {
          console.log('点击上传');
        }}
      >
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
      </ToolButton>
    </div>
  );
};

export default TopToolbar;
