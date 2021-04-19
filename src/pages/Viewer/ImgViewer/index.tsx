/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-04-02 14:41:11
 */
import React, { useEffect, useState } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';
import { useResizeDetector } from 'react-resize-detector';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import type { StateType } from '../model';
import style from './style.less';

import cornerstoneTools from 'cornerstone-tools';

import HelloWorldTool from '@/lib/cornerstoneTools/HelloWorldTool';

type ImgViewerProps = {
  dispatch: Dispatch;
  ImgViewer2D: StateType;
};

const ImgViewer: React.FC<ImgViewerProps> = (props) => {
  const { ImgViewer2D } = props;
  const { width, height, ref } = useResizeDetector();
  const [GridLayoutItems, setGridLayoutItems] = useState<number[]>([]);
  const [activeViewportIndex, setActiveViewportIndex] = useState(1);
  const [activeTool, setActiveTool] = useState('Wwwc');

  useEffect(() => {
    console.log('ImgViewer: width:', width);
    console.log('ImgViewer: height:', height);

    // 销毁的时候
    return () => {};
  }, [width, height]);

  useEffect(() => {
    console.log('ImgViewer2D:', ImgViewer2D);

    // 生成坐标
    return () => {};
  }, [ImgViewer2D]);

  useEffect(() => {
    const _nums = ImgViewer2D.GridLayout.x * ImgViewer2D.GridLayout.y;

    const _list = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= _nums; i++) {
      _list.push(i);
    }

    setGridLayoutItems(_list);

    // 生成坐标
    return () => {};
  }, [ImgViewer2D.GridLayout]);

  const tools = [
    // Mouse
    {
      name: 'Wwwc',
      mode: 'active',
      modeOptions: { mouseButtonMask: 1 },
    },
    {
      name: 'Zoom',
      mode: 'active',
      modeOptions: { mouseButtonMask: 2 },
    },
    {
      name: 'Pan',
      mode: 'active',
      modeOptions: { mouseButtonMask: 4 },
    },
    'Length',
    'Angle',
    'Bidirectional',
    'FreehandRoi',
    'Eraser',

    // 自定义工具
    {
      name: 'HelloWorld',
      mode: 'active',
      toolClass: HelloWorldTool,
      props: { name: 'HelloWorld' },
    },

    // Scroll
    { name: 'StackScrollMouseWheel', mode: 'active' },
    // Touch
    { name: 'PanMultiTouch', mode: 'active' },
    { name: 'ZoomTouchPinch', mode: 'active' },
    { name: 'StackScrollMultiTouch', mode: 'active' },
  ];

  useEffect(() => {
    // 初始化

    // 销毁的时候
    return () => {};
  }, []);

  const imageIds = [
    'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.9.dcm',
    'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.10.dcm',
    'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.11.dcm',
  ];

  return (
    <div style={{ display: 'flex', height: 'calc(100% - 72px)', flexWrap: 'wrap' }} ref={ref}>
      {GridLayoutItems.map((viewportIndex) => (
        <CornerstoneViewport
          key={viewportIndex}
          tools={tools}
          imageIds={imageIds}
          activeTool={ImgViewer2D?.activeTool}
          style={{
            minWidth: (width ?? 0) / ImgViewer2D.GridLayout.x,
            height: (height ?? 0) / ImgViewer2D.GridLayout.y,
            flex: '1',
          }}
          className={
            GridLayoutItems.length > 1 && activeViewportIndex === viewportIndex
              ? style.viewport_wrapper_active
              : style.viewport_wrapper
          }
          setViewportActive={() => {
            setActiveViewportIndex(viewportIndex);
          }}
          resizeRefreshMode="throttle"

          // onElementEnabled={elementEnabledEvt => {
          //   const cornerstoneElement = elementEnabledEvt.detail.element;

          //   // Wait for image to render, then invert it
          //   cornerstoneElement.addEventListener(
          //     'cornerstoneimagerendered',
          //     imageRenderedEvent => {
          //       cornerstoneTools.addToolForElement(cornerstoneElement, HelloWorldMouseTool);
          //     }
          //   );
          // }}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ ImgViewer2D }: { ImgViewer2D: StateType }) => {
  return {
    ImgViewer2D,
  };
};

export default connect(mapStateToProps)(ImgViewer);
