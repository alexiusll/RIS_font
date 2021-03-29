/*
 * @Descripttion:
 * @Author: linkenzone
 * @Date: 2021-03-02 11:12:47
 */
import React, { useEffect, useState } from 'react';
import { Avatar, Menu, Dropdown, Modal } from 'antd';
import { connect, useModel, SelectLang } from 'umi';
import { UserOutlined, HighlightOutlined, LogoutOutlined } from '@ant-design/icons';
import { UseInfoDataType } from '@/models/data';
import Cookies from 'js-cookie';
import { unsetAllCookies } from '@/utils/cookie';
import styles from './index.less';

import AvatarDrowdown from './AvatarDrowdown';
import RightToolBar from './RightToolBar';

interface GlobalHeaderRightProps {
  onClickSign: () => void;
}

const GlobalHeaderRight: React.FC<GlobalHeaderRightProps> = (props) => {
  const className = styles.right;

  // 获取基础信息
  const { initialState, loading, refresh, setInitialState } = useModel('@@initialState');

  // 仅在组件渲染的时候调用一次
  useEffect(() => {}, []);

  return (
    <div className={className}>
      {/* <RightToolBar bodyStyle={{ marginRight: '36px', height: '48px', display: 'flex' }} /> */}

      <AvatarDrowdown />

      <span style={{ display: 'inline-block', marginLeft: '12px' }}>
        <SelectLang />
      </span>
    </div>
  );
};

export default connect()(GlobalHeaderRight);
