/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-03-23 22:57:37
 */
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useResizeDetector } from 'react-resize-detector';

import style from './style.less';

import RightToolBar from '@/components/PageHeader/RightToolBar';

import ImgViewer from './ImgViewer';

// 引入 样式
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import { Button, Switch } from 'antd';

// const ResponsiveGridLayout = WidthProvider(Responsive);

const ResponsiveGridLayout = Responsive;

/**
 * @description: 初始布局
 * @Param:
 */
const initialLayout = [
  { i: 'top', x: 0, y: 0, w: 12, h: 1, static: true, resizeHandles: [] },
  { i: 'left', x: 0, y: 1, w: 1, h: 10, resizeHandles: ['e', 'se'] },
  { i: 'right', x: 11, y: 1, w: 1, h: 10 },
  { i: 'img', x: 1, y: 1, w: 10, h: 10 },
];

const Contents = {
  top: (
    <>
      <div className={`${style.layout_items_header} rgl-drag-zone`}>顶部工具栏</div>
      <RightToolBar bodyStyle={{ marginRight: '36px', height: '48px', display: 'flex' }} />
    </>
  ),
  left: <div className={`${style.layout_items_header} rgl-drag-zone`}>左侧工具栏</div>,
  right: <div className={`${style.layout_items_header} rgl-drag-zone`}>右侧工具栏</div>,
  img: (
    <>
      <div className={`${style.layout_items_header} rgl-drag-zone`}>阅片区</div>
      <ImgViewer />
    </>
  ),
};

const Viewer: React.FC<{}> = () => {
  const [layouts, setLayouts] = useState<any>(undefined);

  const [top, setTop] = useState(true);
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(true);

  const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');

  const { width, height, ref } = useResizeDetector();

  useEffect(() => {
    setLayouts({ lg: initialLayout });
    // 销毁的时候
    return () => {};
  }, []);

  useEffect(() => {
    // console.log('Viewer: width:', width);
    // console.log('Viewer: height:', height);
    // 销毁的时候
    return () => {};
  }, [width, height]);

  const generateDOM = () => {
    if (!layouts) return <></>;

    return _.map(layouts[currentBreakpoint], (item: any) => {
      return (
        <div
          key={item.i}
          className={item.i === 'img' ? style.layout_items_viewer : style.layout_items}
        >
          {Contents[item.i]}
        </div>
      );
    });
  };

  return (
    <div style={{ backgroundColor: '#1b2436' }}>
      <div style={{ backgroundColor: '#1b2436', padding: '8px', color: 'white' }}>
        <div>
          顶部工具栏{' '}
          <Switch
            checked={top}
            onChange={(e) => {
              setTop(e);

              let _layouts;

              if (e) {
                for (const item of layouts[currentBreakpoint]) {
                  if (item.y === 0) {
                    item.y += 1;
                  }
                }

                _layouts = {
                  ...layouts,
                  [currentBreakpoint]: [
                    ...layouts[currentBreakpoint],
                    { i: 'top', x: 0, y: 0, w: 12, h: 1, static: true, resizeHandles: [] },
                  ],
                };
              } else {
                for (const item of layouts[currentBreakpoint]) {
                  if (item.y === 1) {
                    item.y -= 1;
                  }
                }

                _layouts = {
                  ...layouts,
                  [currentBreakpoint]: layouts[currentBreakpoint].filter(
                    ({ i }: any) => i !== 'top',
                  ),
                };
              }

              // console.log('_layouts', _layouts);

              setLayouts(_layouts);
            }}
          />
        </div>

        <div>
          左侧工具栏{' '}
          <Switch
            checked={left}
            onChange={(e) => {
              setLeft(e);

              let _layouts;

              if (e) {
                _layouts = {
                  ...layouts,
                  [currentBreakpoint]: [
                    ...layouts[currentBreakpoint],
                    { i: 'left', x: 0, y: 1, w: 1, h: 10, resizeHandles: ['e', 'se'] },
                  ],
                };
              } else {
                _layouts = {
                  ...layouts,
                  [currentBreakpoint]: layouts[currentBreakpoint].filter(
                    ({ i }: any) => i !== 'left',
                  ),
                };
              }

              // console.log('_layouts', _layouts);

              setLayouts(_layouts);
            }}
          />
        </div>

        <div>
          右侧工具栏{' '}
          <Switch
            checked={right}
            onChange={(e) => {
              setRight(e);

              let _layouts;

              if (e) {
                _layouts = {
                  ...layouts,
                  [currentBreakpoint]: [
                    ...layouts[currentBreakpoint],
                    { i: 'right', x: 11, y: 1, w: 1, h: 10 },
                  ],
                };
              } else {
                _layouts = {
                  ...layouts,
                  [currentBreakpoint]: layouts[currentBreakpoint].filter(
                    ({ i }: any) => i !== 'right',
                  ),
                };
              }

              // console.log('_layouts', _layouts);

              setLayouts(_layouts);
            }}
          />
        </div>
      </div>

      <div style={{ padding: '8px' }} ref={ref}>
        <ResponsiveGridLayout
          width={width || 0}
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          isBounded={true}
          rowHeight={100}
          verticalCompact={true}
          compactType="horizontal"
          draggableHandle=".rgl-drag-zone"
          margin={[4, 4]}
          // WidthProvider option
          measureBeforeMount={false}
          onLayoutChange={(_layout: any, _layouts: any) => {
            // console.log('onLayoutChange _layout', _layout);
            // console.log('onLayoutChange _layouts', _layouts);
            setLayouts(_layouts);
          }}
          resizeHandles={['se']}
          resizeHandle={(resizeHandleAxis: any) => {
            // console.log('resizeHandleAxis', resizeHandleAxis);
            if (resizeHandleAxis === 'e') {
              return (
                <div
                  className={style.custom_resizable_handle}
                  style={{ bottom: '50%', transform: 'rotate(0deg)', cursor: 'ew-resize' }}
                ></div>
              );
            }
            return <div className={style.custom_resizable_handle}></div>;
          }}
        >
          {generateDOM()}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Viewer;
