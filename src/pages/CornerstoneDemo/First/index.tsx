/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-03-15 11:32:19
 */
import { Button } from 'antd';

import cornerstone from 'cornerstone-core';
import cornerstoneMath from 'cornerstone-math';
import cornerstoneTools from 'cornerstone-tools';
import Hammer from 'hammerjs';

import cornerstoneWebImageLoader from 'cornerstone-web-image-loader';

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneTools.init();

import React, { useEffect } from 'react';

cornerstoneWebImageLoader.external.cornerstone = cornerstone;

const Demo: React.FC<{}> = () => {
  const containerRef: any = React.useRef();

  useEffect(() => {
    const url =
      'https://rawgit.com/cornerstonejs/cornerstoneWebImageLoader/master/examples/Renal_Cell_Carcinoma.jpg';

    const RotateTool = cornerstoneTools.RotateTool;
    const LengthTool = cornerstoneTools.LengthTool;
    const PanTool = cornerstoneTools.PanTool;
    const ZoomMouseWheelTool = cornerstoneTools.ZoomMouseWheelTool;

    const element = containerRef.current;
    console.log('element', element);

    console.log('cornerstoneTools', cornerstoneTools);

    cornerstone.enable(element);
    cornerstone.loadImage(url).then(function (image: any) {
      cornerstone.displayImage(element, image);

      // Adds tool to ALL currently Enabled elements
      cornerstoneTools.addTool(RotateTool);
      cornerstoneTools.addTool(PanTool);
      cornerstoneTools.addTool(ZoomMouseWheelTool);

      // OR add the tool to a specific Enabled element
      // cornerstoneTools.addToolForElement(element, ZoomMouseWheelTool);

      // cornerstoneTools.setToolActive('Rotate', { mouseButtonMask: 1 });

      // cornerstoneTools.mouseInput.enable(element);
      // cornerstoneTools.mouseWheelInput.enable(element);
      // cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
      // cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
      // cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
      // cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel
    });

    // 销毁的时候
    return () => {};
  }, []);

  return (
    <>
      <div style={{ width: '512px', height: '512px', position: 'relative' }}>
        <div
          ref={containerRef}
          style={{ width: '512px', height: '512px', top: '0', position: 'absolute', left: '0' }}
        ></div>
      </div>

      <Button
        type="primary"
        onClick={() => {
          cornerstoneTools.setToolActive('Pan', { mouseButtonMask: 1 });
        }}
      >
        工具1 Pan tool
      </Button>

      <Button
        type="primary"
        onClick={() => {
          cornerstoneTools.setToolActive('Rotate', { mouseButtonMask: 1 });
        }}
      >
        工具2 Rotate
      </Button>

      <Button
        type="primary"
        onClick={() => {
          cornerstoneTools.setToolActive('ZoomMouseWheel', { mouseButtonMask: 1 });
        }}
      >
        工具3 ZoomMouseWheel
      </Button>
    </>
  );
};

export default Demo;
