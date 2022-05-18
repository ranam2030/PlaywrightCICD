const {test, expect} = require('@playwright/test');

test('First Test', async ({browser})=>{
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto("https://www.google.com/");
});
