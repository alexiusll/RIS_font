/*
 * @Descripttion:
 * @Author: linkenzone
 * @Date: 2021-03-02 11:12:47
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

// 以下变量声明对应config.[env].ts文件内define的变量
declare const API_URL: string;
declare const API_AUTH_URL: string;
declare const API_SECRET_KEY: string;

// 避免ts文件中报错
declare module 'vtk.js/*';

declare module '@ohif/ui';

declare module '@ohif/viewer';

declare module 'react-vtk-js';

declare module 'cornerstone-core';
declare module 'cornerstone-tools';
declare module 'cornerstone-web-image-loader';
declare module 'hammerjs';
declare module 'cornerstone-math';
