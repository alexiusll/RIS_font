/*
 * @Descripttion: 通用的工具类
 * @Author: linkenzone
 * @Date: 2020-09-06 22:14:37
 */


import moment from 'moment';

/**
 * @description: 去掉请求中的NULL元素
 * @param data: any
 * @return data: any
 */
export function removeNull(data: any) {
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    throw new Error('request data is not a object.');
  }
  // 两层去掉null 和 空对象
  for (const key in data) {
    if (data[key] === null || JSON.stringify(data[key]) === '{}') {
      delete data[key];
    } else if (Object.prototype.toString.call(data[key]) === '[object Object]') {
      for (const _key in data[key]) {
        if (data[key][_key] === null) {
          delete data[key][_key];
        }
      }
    }
  }
  return data;
}

/**
 * @description: 根据获得的生日返回年龄
 * @param birthday: any （传入moment类型即可)
 * @return number
 */
export function getAge(birthday: any) {
  const duration = moment.duration(moment().diff(birthday));
  return duration.years();
}
