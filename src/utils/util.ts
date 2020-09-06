import moment from 'moment';

// 去掉请求中的NULL元素
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
