import Cookies from 'js-cookie';

// 清除与项目有关的所有 cookies
export const unsetAllCookies = () => {
  const keys = document.cookie.match(/[^ =;]+(?==)/g);
  if (keys) {
    console.log('window.location.hostname', window.location.hostname);
    keys.forEach(key => {
      if (/token_?\d*/.test(key)) {
        // 匹配token
        // Cookies.remove(key);
        Cookies.remove(key, { path: '/', domain: window.location.hostname });
      } else if (/user_signature/.test(key)) {
        // 匹配user_signature
        // Cookies.remove(key);
        Cookies.remove(key, { path: '/', domain: window.location.hostname });
      } else if (/userInfo/.test(key)) {
        // 匹配userInfo
        // Cookies.remove(key);
        Cookies.remove(key, { path: '/', domain: window.location.hostname });
      }
    });
  }
};
