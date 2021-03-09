/*
 * @Descripttion:
 * @Author: linkenzone
 * @Date: 2021-03-02 11:56:21
 */
import vtkGenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';

import vtkHttpDataSetReader from 'vtk.js/Sources/IO/Core/HttpDataSetReader';
// import vtkColorTransferFunction from 'vtk.js/Sources/Rendering/Core/ColorTransferFunction';
// import vtkPiecewiseFunction from 'vtk.js/Sources/Common/DataModel/PiecewiseFunction';
import vtkImageMapper from 'vtk.js/Sources/Rendering/Core/ImageMapper';
import vtkImageSlice from 'vtk.js/Sources/Rendering/Core/ImageSlice';
import vtkInteractorStyleImage from 'vtk.js/Sources/Interaction/Style/InteractorStyleImage';
import ImageConstants from 'vtk.js/Sources/Rendering/Core/ImageMapper/Constants';

import { useEffect } from 'react';

const { SlicingMode } = ImageConstants;

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

    // renderer camera to parallel projection
    renderer.getActiveCamera().setParallelProjection(true);

    // --- Set up interactor style for image slicing

    const istyle = vtkInteractorStyleImage.newInstance();
    istyle.setInteractionMode('IMAGE_SLICING');
    renderWindow.getInteractor().setInteractorStyle(istyle);

    // --- Set up the slicing actor ---

    const actor = vtkImageSlice.newInstance();
    const mapper = vtkImageMapper.newInstance();

    mapper.setSliceAtFocalPoint(true);
    mapper.setSlicingMode(SlicingMode.Z);

    // tell the actor which mapper to use
    actor.setMapper(mapper);

    // --- set up default window/level ---

    actor.getProperty().setColorWindow(255);
    actor.getProperty().setColorLevel(127);

    // --- load remote dataset ---

    const reader = vtkHttpDataSetReader.newInstance({ fetchGzip: true });

    // wire up the reader to the mapper
    mapper.setInputConnection(reader.getOutputPort());

    reader
      .setUrl('https://kitware.github.io/vtk-js/data/volume/LIDC2.vti')
      .then(() => reader.loadData())
      .then(() => {
        // --- Add volume actor to scene ---
        renderer.addActor(actor);

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
