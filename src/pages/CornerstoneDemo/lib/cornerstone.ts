/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-03-15 14:58:44
 *
 */

// \OhifViewers\platform\core\src\lib\cornerstone.js

import cornerstone from 'cornerstone-core';
import cornerstoneTools from 'cornerstone-tools';

/**
 * @description: 获得边界框
 * @param {any} context
 * @param {any} textLines
 * @param {any} x
 * @param {any} y
 * @param {any} options
 * @return {*}
 */
const getBoundingBox = (context: any, textLines: any, x: any, y: any, options: any) => {
  // 判断 textlines对象类型，如果不是数组
  if (Object.prototype.toString.call(textLines) !== '[object Array]') {
    // 则将 textlines的类型转换为数组
    textLines = [textLines];
  }

  const padding = 5;
  // defaultFont = `${defaultFontSize}px Arial`
  const font = cornerstoneTools.textStyle.getFont();
  // defaultFontSize 为 15
  const fontSize = cornerstoneTools.textStyle.getFontSize();

  context.save();
  context.font = font;
  context.textBaseline = 'top';

  // 找出 文本数据数组中最长的文本宽度
  let maxWidth = 0;
  textLines.forEach((text: any) => {
    // 在当前字体中 获得文本宽度
    const width = context.measureText(text).width;
    // 找到当前文本行中 最大的宽度
    maxWidth = Math.max(maxWidth, width);
  });

  // 用当前的 text box ，计算 bounding box 的大小
  const width = maxWidth + padding * 2;
  const height = padding + textLines.length * (fontSize + padding);

  // 是否 在x轴居中
  if (options && options.centering && options.centering.x === true) {
    x -= width / 2;
  }

  // 是否 在y轴居中
  if (options && options.centering && options.centering.y === true) {
    y -= height / 2;
  }

  const boundingBox = {
    width,
    height,
    left: x,
    top: y,
  };

  context.restore();

  // 返回 bounding box，用于 pointNearHandle
  return boundingBox;
};

export { getBoundingBox };
