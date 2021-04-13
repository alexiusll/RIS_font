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

const LeftToolbar: React.FC<unknown> = () => {
  const [viewLayoutHighLight, setViewLayoutHighLight] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  });

  return (
    <div style={{ display: 'flex' }}>
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
                    [1, 1],
                    [1, 2],
                    [1, 3],
                    [2, 1],
                    [2, 2],
                    [2, 3],
                    [3, 1],
                    [3, 2],
                    [3, 3],
                  ].map((number, index) => {
                    return (
                      <button
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        className={`${style.viewer_layout_btn} ${
                          viewLayoutHighLight[number] ? style.btnHighLight : null
                        }`}
                        onMouseEnter={() => {}}
                        onMouseLeave={() => {}}
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
    </div>
  );
};

export default LeftToolbar;
