/*
 * @Descripttion:
 * @Author: linkenzone
 * @Date: 2021-03-02 11:56:21
 */
import vtkGenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';

import vtkVolume from 'vtk.js/Sources/Rendering/Core/Volume';
import vtkVolumeMapper from 'vtk.js/Sources/Rendering/Core/VolumeMapper';
import vtkHttpDataSetReader from 'vtk.js/Sources/IO/Core/HttpDataSetReader';
import vtkColorTransferFunction from 'vtk.js/Sources/Rendering/Core/ColorTransferFunction';
import vtkPiecewiseFunction from 'vtk.js/Sources/Common/DataModel/PiecewiseFunction';

import vtkColorMaps from 'vtk.js/Sources/Rendering/Core/ColorTransferFunction/ColorMaps';

import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
const Demo = () => {
  useEffect(() => {
    const container = document.createElement('div');
    document.querySelector('body').appendChild(container);

    // We use the wrapper here to abstract out manual RenderWindow/Renderer/OpenGLRenderWindow setup
    const genericRenderWindow = vtkGenericRenderWindow.newInstance();
    genericRenderWindow.setContainer(container);
    genericRenderWindow.resize();

    const renderer = genericRenderWindow.getRenderer();
    const renderWindow = genericRenderWindow.getRenderWindow();

    // --- Set up the volume actor ---

    const actor = vtkVolume.newInstance();
    const mapper = vtkVolumeMapper.newInstance();

    // tell the actor which mapper to use
    actor.setMapper(mapper);

    // --- set up our color lookup table and opacity piecewise function

    const lookupTable = vtkColorTransferFunction.newInstance();
    const piecewiseFun = vtkPiecewiseFunction.newInstance();

    // set up color transfer function
    lookupTable.applyColorMap(vtkColorMaps.getPresetByName('Cool to Warm'));
    // hardcode an initial mapping range here.
    // Normally you would instead use the range from
    // imageData.getPointData().getScalars().getRange()
    lookupTable.setMappingRange(0, 256);
    lookupTable.updateRange();

    // set up simple linear opacity function
    // This assumes a data range of 0 -> 256

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= 8; i++) {
      piecewiseFun.addPoint(i * 32, i / 8);
    }

    // set the actor properties
    actor.getProperty().setRGBTransferFunction(0, lookupTable);
    actor.getProperty().setScalarOpacity(0, piecewiseFun);

    // --- load remote dataset ---

    const reader = vtkHttpDataSetReader.newInstance({ fetchGzip: true });

    // wire up the reader to the mapper
    mapper.setInputConnection(reader.getOutputPort());

    reader
      .setUrl('https://kitware.github.io/vtk-js/data/volume/LIDC2.vti')
      .then(() => reader.loadData())
      .then(() => {
        // --- Add volume actor to scene ---
        renderer.addVolume(actor);

        // update lookup table mapping range based on input dataset
        const range = reader.getOutputData().getPointData().getScalars().getRange();
        lookupTable.setMappingRange(...range);
        lookupTable.updateRange();

        // --- Reset camera and render the scene ---
        renderer.resetCamera();
        renderWindow.render();
      });

    // 销毁的时候
    return () => {};
  }, []);

  return <></>;
};

export default Demo;
