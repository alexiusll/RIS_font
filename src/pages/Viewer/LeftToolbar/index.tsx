/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-03-27 17:29:07
 */
import {
  BarsOutlined,
  DownloadOutlined,
  SettingOutlined,
  TableOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Menu, Popover } from 'antd';
import React, { useState, useEffect } from 'react';
import style from './style.less';

const LeftToolButton: React.FC<{ onClick?: () => void }> = (props) => {
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

const LayoutSettingButton: React.FC<{}> = (props) => {
  const { onClick } = props;
  const [viewLayoutHighLight, setViewLayoutHighLight] = useState({ x: 0, y: 0 });

  return (
    <LeftToolButton>
      <Popover
        placement="right"
        content={() => {
          return (
            <>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: '60px',
                  outline: '1px solid rgb(155, 155, 155)',
                }}
              >
                {[
                  { x: 1, y: 1 },
                  { x: 2, y: 1 },
                  { x: 3, y: 1 },
                  { x: 1, y: 2 },
                  { x: 2, y: 2 },
                  { x: 3, y: 2 },
                  { x: 1, y: 3 },
                  { x: 2, y: 3 },
                  { x: 3, y: 3 },
                ].map((item, index) => {
                  return (
                    <button
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      className={`${style.viewer_layout_btn} ${
                        viewLayoutHighLight.x >= item.x && viewLayoutHighLight.y >= item.y
                          ? style.btnHighLight
                          : null
                      }`}
                      onMouseEnter={() => {
                        setViewLayoutHighLight({ x: item.x, y: item.y });
                      }}
                      onMouseLeave={() => {
                        setViewLayoutHighLight({ x: 0, y: 0 });
                      }}
                    ></button>
                  );
                })}
              </div>
            </>
          );
        }}
        trigger="click"
      >
        <TableOutlined style={{ fontSize: '28px' }} />
      </Popover>
    </LeftToolButton>
  );
};

const LeftToolbar: React.FC<unknown> = () => {
  const [viewLayout, setViewLayout] = useState({ x: 1, y: 1 });

  return (
    <div style={{ display: 'flex' }}>
      <LayoutSettingButton />
    </div>
  );
};

export default LeftToolbar;
