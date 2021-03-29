/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-03-23 16:26:57
 */
import React, { useEffect, useState } from 'react';
import { Avatar, Menu, Dropdown, Modal } from 'antd';
import { connect, useModel } from 'umi';
import { UserOutlined, HighlightOutlined, LogoutOutlined } from '@ant-design/icons';
import { UseInfoDataType } from '@/models/data';
import Cookies from 'js-cookie';
import { unsetAllCookies } from '@/utils/cookie';

interface AvatarDrowdownProps {
  // onClickSign: () => void;
}

const AvatarDrowdown: React.FC<AvatarDrowdownProps> = (props) => {
  // const { onClickSign } = props;
  const [userInfo, setUserInfo] = useState<UseInfoDataType>();

  // 获取基础信息
  const { initialState, loading, refresh, setInitialState } = useModel('@@initialState');

  // 仅在组件渲染的时候调用一次
  useEffect(() => {
    const use_info = Cookies.get('userInfo');
    // console.log('use_info', use_info);

    if (use_info) {
      setUserInfo(JSON.parse(use_info));
    }
  }, []);

  const onClickOut = () => {
    Modal.confirm({
      title: '确认退出登录？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        // 清空cookie
        unsetAllCookies();
        window.location.href = `${window.location.origin}/#/login`;
      },
    });
  };

  const menu = (
    <Menu style={{ width: 132, textAlign: 'center' }}>
      <Menu.Item
        style={{ fontWeight: 700, fontSize: '14px', fontFamily: 'initial' }}
        onClick={() => {}}
      >
        <HighlightOutlined />
        用户签名
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item
        danger
        style={{ fontWeight: 700, fontSize: '14px', fontFamily: 'initial' }}
        onClick={() => onClickOut()}
      >
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <div style={{ cursor: 'pointer', display: 'flex' }}>
        <div style={{ display: 'block', textAlign: 'center', marginRight: '8px' }}>
          <Avatar icon={<UserOutlined />} size="default" />
        </div>
        <div
          style={{
            color: '#39bbdb',
            display: 'block',
            height: '32px',
            verticalAlign: 'middle',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
          className="invisible-sm"
        >
          {initialState?.userName}
        </div>
      </div>
    </Dropdown>
  );
};

export default connect()(AvatarDrowdown);
