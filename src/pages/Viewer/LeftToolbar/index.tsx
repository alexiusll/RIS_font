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
import ConnectedToolButton from './ConnectedToolButton';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import type { StateType } from '../model';

const LayoutSettingButton: React.FC<{ dispatch: Dispatch }> = (props) => {
  const { onClick, dispatch } = props;
  const [viewLayoutHighLight, setViewLayoutHighLight] = useState({ x: 0, y: 0 });

  return (
    <Button
      type="link"
      style={{ height: '48px', width: '48px', display: 'block', padding: '0', margin: '0' }}
    >
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
                      onClick={() => {
                        dispatch({
                          type: 'ImgViewer2D/save',
                          payload: { GridLayout: { x: item.x, y: item.y } },
                        });
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
    </Button>
  );
};

type LeftToolbarProps = {
  dispatch: Dispatch;
  ImgViewer2D: StateType;
};

const LeftToolbar: React.FC<LeftToolbarProps> = (props) => {
  const { ImgViewer2D, dispatch } = props;

  return (
    <div>
      <LayoutSettingButton dispatch={dispatch} />
      <span style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ConnectedToolButton toolName="Wwwc" />
        <ConnectedToolButton toolName="Zoom" />
        <ConnectedToolButton toolName="Pan" />
        <ConnectedToolButton toolName="Length" />
        <ConnectedToolButton toolName="Angle" />
        <ConnectedToolButton toolName="Bidirectional" />
        <ConnectedToolButton toolName="FreehandRoi" />
        <ConnectedToolButton toolName="Eraser" />

        <ConnectedToolButton toolName="HelloWorld" />
      </span>
    </div>
  );
};

const mapStateToProps = ({ ImgViewer2D }: { ImgViewer2D: StateType }) => {
  return {
    ImgViewer2D,
  };
};

export default connect(mapStateToProps)(LeftToolbar);
