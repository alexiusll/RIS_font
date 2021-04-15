/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-04-02 14:41:11
 */
import React, { useEffect, useState } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';
import { useResizeDetector } from 'react-resize-detector';
import { connect, Dispatch } from 'umi';
import { StateType } from '../model';

type ImgViewerProps = {
  dispatch: Dispatch;
  ImgViewer2D: StateType;
};

const ImgViewer: React.FC<ImgViewerProps> = (props) => {
  const { ImgViewer2D } = props;
  const { width, height, ref } = useResizeDetector();
  const [GridLayoutItems, setGridLayoutItems] = useState([[1, 1]]);

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
    <div style={{ display: 'flex', height: 'calc(100% - 72px)' }} ref={ref}>
      {GridLayoutItems.map((viewportIndex) => (
        <CornerstoneViewport
          tools={tools}
          imageIds={imageIds}
          style={{ width, height, flexGrow: '1' }}
          resizeRefreshMode="throttle"
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
