/*
 * @Descripttion:
 * @Author: linkenzone
 * @Date: 2021-03-02 11:56:21
 */

import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';

import { useEffect } from 'react';

// import controlPanel from './controller.html';

const controlPanel = () => {
  return (
    <table>
      <tr>
        <td>
          <select className="representations" style={{ width: '100%' }}>
            <option value="0">Points</option>
            <option value="1">Wireframe</option>
            <option value="2" selected>
              Surface
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <td>
          <input className="resolution" type="range" min="4" max="80" value="6" />
        </td>
      </tr>
    </table>
  );
};

const SimpleDemo: React.FC<unknown> = () => {
  // 初始化
  useEffect(() => {
    // ----------------------------------------------------------------------------
    // Standard rendering code setup
    // ----------------------------------------------------------------------------

    const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({ background: [0, 0, 0] });
    const renderer = fullScreenRenderer.getRenderer();
    const renderWindow = fullScreenRenderer.getRenderWindow();

    // 销毁
    return () => {};
  }, []);
  return <></>;
};

export default SimpleDemo;

// // -----------------------------------------------------------
// // UI control handling
// // -----------------------------------------------------------

// fullScreenRenderer.addController(controlPanel);
// const representationSelector = document.querySelector('.representations');
// const resolutionChange = document.querySelector('.resolution');

// representationSelector.addEventListener('change', (e) => {
//   const newRepValue = Number(e.target.value);
//   actor.getProperty().setRepresentation(newRepValue);
//   renderWindow.render();
// });

// resolutionChange.addEventListener('input', (e) => {
//   const resolution = Number(e.target.value);
//   coneSource.setResolution(resolution);
//   renderWindow.render();
// });
