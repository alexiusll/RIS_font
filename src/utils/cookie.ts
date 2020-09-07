/*
 * @Descripttion: 与cookie相关的操作
 * @Author: linkenzone
 * @Date: 2020-09-04 00:24:19
 */

import Cookies from 'js-cookie';

/**
 * @description: 清除与项目有关的所有 cookies
 * @param null
 * @return null 
 */
export const unsetAllCookies = () => {
  const keys = document.cookie.match(/[^ =;]+(?==)/g);
  if (keys) {
    // 打印当前浏览器的 window.location.hostname
    // eslint-disable-next-line no-console
    console.log('window.location.hostname', window.location.hostname);
    keys.forEach(key => {
      if (/token_?\d*/.test(key)) {
        // 匹配token
        Cookies.remove(key, { path: '/', domain: window.location.hostname });
      } else if (/user_signature/.test(key)) {
        // 匹配user_signature
        Cookies.remove(key, { path: '/', domain: window.location.hostname });
      } else if (/userInfo/.test(key)) {
        // 匹配userInfo
        Cookies.remove(key, { path: '/', domain: window.location.hostname });
      }
    });
  }
};
