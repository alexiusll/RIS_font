/*
 * @Descripttion:
 * @Author: linkenzone
 * @Date: 2021-03-09 10:34:30
 */
import React, { useEffect, useState } from 'react';

import { installViewer, OHIFExtDicomMicroscopy } from '@ohif/viewer';

import VtkViewport from '@vtk-viewport';

const ohifViewerConfig = {
  // default: '/'
  routerBasename: '/OfficialDemo/OhifViewer',
  extensions: [OHIFExtDicomMicroscopy],
  servers: {
    dicomWeb: [
      {
        name: 'DCM4CHEE',
        wadoUriRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
      },
    ],
  },
};

// eslint-disable-next-line @typescript-eslint/ban-types
const Demo: React.FC<{}> = (props) => {
  const containerId = 'ohif';
  const componentRenderedOrUpdatedCallback = () => {
    console.log('OHIF Viewer rendered/updated');
  };

  useEffect(() => {
    installViewer(ohifViewerConfig, containerId, componentRenderedOrUpdatedCallback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div id={containerId}></div>;
};

// eslint-disable-next-line @typescript-eslint/ban-types
const Demo2: React.FC<{}> = (props) => {
  useEffect(() => {}, []);
  return <div></div>;
};

export default Demo2;
