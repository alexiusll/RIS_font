/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-04-19 19:30:05
 */
import csTools from 'cornerstone-tools';

const BaseTool = csTools.importInternal('base/BaseTool');

export default class HelloWorldTool extends BaseTool {
  constructor({ name = 'HelloWorld' }) {
    super({
      name,
      supportedInteractionTypes: ['Mouse'],
    });
  }

  preMouseDownCallback(evt) {
    console.log('Hello cornerstoneTools!');
  }

  activeCallback(element) {
    console.log(`Hello element ${element.uuid}!`);
  }

  disabledCallback(element) {
    console.log(`Goodbye element ${element.uuid}!`);
  }
}
