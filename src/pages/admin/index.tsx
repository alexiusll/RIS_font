/*
 * @Descripttion: 权限插件测试页面
 * @Author: linkenzone
 * @Date: 2021-03-22 23:36:06
 */

import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC<{}> = () => (
  <Result
    title="进入了admin页面"
    subTitle="进入了admin页面"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
