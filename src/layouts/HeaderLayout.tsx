/*
 * @Descripttion: 通用头部菜单
 * @Author: linkenzone
 * @Date: 2020-09-06 21:24:32
 */

import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import { Link, useIntl, connect, Dispatch } from 'umi';
import React, { useEffect, useState } from 'react';
import RightContent from '@/components/GlobalHeader/RightContent';
import logoImg from '@/assets/rayplus.png';
import { UseInfoDataType } from '@/models/data';
// import SignModal from '../components/SignModal/index';
import style from './index.less';

export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem; // proLayout的组件
  };
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings; // layout 的设置
  dispatch: Dispatch;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;

  const [title, setTitle] = useState('临床试验样本');

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
      setTitle('临床试验样本');
    }
  }, [props.location]);

  return (
    <>
      <ProLayout
        title="临床试验管理"
        logo={logoImg}
        menuHeaderRender={logoDom => {
          // 渲染 logo 和 title
          return (
            <>
              <Link to="/">{logoDom}</Link>
              <h1
                style={{
                  fontSize: 22,
                  // width: '300px',
                  color: '#39bbdb',
                  lineHeight: '70px',
                }}
              >
                {title}
              </h1>
            </>
          );
        }}
        layout="topmenu"
        navTheme="light"
        disableMobile
        fixSiderbar={false}
        // contentWidth = 'Fluid'
        rightContentRender={() => <RightContent onClickSign={SignModal_OpenHandler} />}
        contentStyle={{ margin: '0', backgroundColor: 'white', minHeight: 800 }}
        className={style.custom_layout}
      >
        {children}
      </ProLayout>

      {/* <SignModal visible={SignModalVisible} closeHandler={SignModal_closeHandler} /> */}
    </>
  );
};

export default BasicLayout;
