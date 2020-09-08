/*
 * @Descripttion: e2e测试样例文件
 * @Author: linkenzone
 * @Date: 2020-09-08 20:48:30
 */
import puppeteer from 'puppeteer';

// 假设有一个需求，用户在登录页面输入错误的用户名和密码，点击登录后，出现错误提示框。
describe('Login', () => {
  it('should login with failure', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.type('#userName', 'mockuser');
    await page.type('#password', 'wrong_password');
    await page.click('button[type="submit"]');
    await page.waitForSelector('.ant-alert-error'); // should display error
    await page.close();
    browser.close();
  });
});