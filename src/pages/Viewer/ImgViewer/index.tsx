/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-04-02 14:41:11
 */
import React, { useEffect } from 'react';

import CornerstoneViewport from 'react-cornerstone-viewport';

import { useResizeDetector } from 'react-resize-detector';

const ImgViewer: React.FC<{}> = () => {
  const { width, height, ref } = useResizeDetector();

  useEffect(() => {
    console.log('ImgViewer: width:', width);
    console.log('ImgViewer: height:', height);
    // 销毁的时候
    return () => {};
  }, [width, height]);

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
    'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.11.dcm',
    'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.12.dcm',
  ];

  return (
    <div style={{ display: 'flex', height: 'calc(100% - 84px)' }} ref={ref}>
      <CornerstoneViewport
        tools={tools}
        imageIds={imageIds}
        style={{ width, height, flexGrow: '1' }}
        resizeRefreshMode="throttle"
      />
    </div>
  );
};

export default ImgViewer;
