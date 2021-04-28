/*
 * @Descripttion: 通用头部菜单
 * @Author: linkenzone
 * @Date: 2020-09-06 21:24:32
 */

import type {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import type { Dispatch } from 'umi';
import { Link, useIntl, connect } from 'umi';
import React, { useEffect, useState } from 'react';
import RightContent from '@/components/PageHeader/RightContent';
import logoImg from '@/assets/rayplus.png';
import { UseInfoDataType } from '@/models/data';
// import SignModal from '../components/SignModal/index';
import style from './index.less';

export interface BasicLayoutProps extends ProLayoutProps {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  breadcrumbNameMap: { [path: string]: MenuDataItem }; // proLayout的组件
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings; // layout 的设置
  dispatch: Dispatch;
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;

  const [title, setTitle] = useState('医学影像处理系统');

  const [SignModalVisible, setSignModalVisible] = useState(false);

  // const SignModal_closeHandler = () => {
  //   setSignModalVisible(false);
  // };

  const SignModal_OpenHandler = () => {
    setSignModalVisible(true);
  };

  // 仅在组件渲染的时候调用一次
  useEffect(() => {
    const { hash } = window.location;
    const path_list = hash.split('/');
    // console.log('path_list', path_list);
    if (path_list[1] === 'sample') {
      setTitle('CRF详情');
    } else {
      setTitle('医学影像处理系统');
    }
  }, [props.location]);

  return (
    <>
      <ProLayout
        title="医学影像处理系统"
        logo={logoImg}
        menuHeaderRender={(logoDom) => {
          // 渲染 logo 和 title
          return (
            <div style={{ paddingLeft: '16px' }}>
              <Link to="/">{logoDom}</Link>
              <h1
                style={{
                  fontSize: 22,
                  color: '#39bbdb',
                  lineHeight: '48px',
                }}
              >
                {title}
              </h1>
            </div>
          );
        }}
        layout="top"
        navTheme="light"
        disableMobile
        fixSiderbar={false}
        // contentWidth = 'Fluid'
        rightContentRender={() => <RightContent onClickSign={SignModal_OpenHandler} />}
        contentStyle={{ margin: '0', backgroundColor: 'white' }}
        className={style.custom_layout}
      >
        {children}
      </ProLayout>

      {/* <SignModal visible={SignModalVisible} closeHandler={SignModal_closeHandler} /> */}
    </>
  );
};

export default BasicLayout;
