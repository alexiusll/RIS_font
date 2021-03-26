/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-03-23 23:03:47
 */
import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';
import ImageFileTable from './components/ImageFileTable';

const ImageFileManagment: React.FC<{}> = () => {
  return (
    <div style={{ padding: '24px' }}>
      <ImageFileTable></ImageFileTable>
    </div>
  );
};

export default ImageFileManagment;
