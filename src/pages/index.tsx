/*
 * @Descripttion:
 * @Author: linkenzone
 * @Date: 2021-03-02 11:12:47
 */
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'umi';
import { useModel, useAccess, Access } from 'umi';
import { connect } from 'umi';
import { useIntl } from 'umi';
import { Breadcrumb, Card, Row, Col, Spin, DatePicker, Button } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import style from './index.less';

import ImgViewer from './Viewer/ImgViewer';

const { NODE_ENV, REACT_APP_ENV } = process.env;

export default () => {
  const { initialState, loading, refresh, setInitialState } = useModel('@@initialState');

  // 国际化配置
  const intl = useIntl();

  const access = useAccess(); // access 实例的成员: canReadFoo, canUpdateFoo, canDeleteFoo
  const foo = { status: 2 };

  const [count, setCount] = useState(1);

  useEffect(() => {
    // console.log('NODE_ENV:', NODE_ENV);
    // console.log('REACT_APP_ENV:', REACT_APP_ENV);
    // console.log('API_URL', API_URL);
    // console.log('API_AUTH_URL', API_URL);

    // const tmp = undefined;

    // console.log('tmp === undefined', tmp === undefined);
    // console.log('tmp === null', tmp === null);
    // console.log('tmp ?? false', tmp ?? false);

    // const tmp2 = null;

    // console.log('tmp2 === undefined', tmp2 === undefined);
    // console.log('tmp2 === null', tmp2 === null);
    // console.log('tmp2 ?? false', tmp2 ?? false);

    // 销毁的时候
    return () => {};
  }, []);

  useEffect(() => {
    console.log('count:', count);

    // setCount(count + 1);

    // 销毁的时候
    return () => {};
  }, [count]);

  return (
    <div className={style.main_body}>
      <Card>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <UserOutlined />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
        <h2>示例页面</h2>
      </Card>

      <Row>
        <Col>
          <Card title="Default size card" extra={<a href="#">More</a>}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col>
          <Card title="Default size card" extra={<a href="#">More</a>}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col>
          <Card title="Default size card" extra={<a href="#">More</a>}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>

      <div>全局初始数据 --- {initialState?.userName}</div>

      <div>权限管理模块 --- {initialState?.userName}</div>
      <div>
        <Access accessible={access.canReadFoo} fallback={<div>Can not read foo content.</div>}>
          <div>Foo content.</div>
        </Access>
        <Access accessible={access.canUpdateFoo()} fallback={<div>Can not update foo.</div>}>
          <div>Update foo.</div>
        </Access>
        <Access accessible={access.canDeleteFoo(foo)} fallback={<div>Can not delete foo.</div>}>
          <div>Delete foo.</div>
        </Access>
      </div>

      <div>
        国际化测试 --- 当前语言为：
        {intl.formatMessage({
          id: 'navbar.lang',
        })}
      </div>

      <DatePicker></DatePicker>

      <div>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </Button>
      </div>
    </div>
  );
};
