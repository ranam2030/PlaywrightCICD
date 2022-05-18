const {test, expect} = require('@playwright/test');

test('First Test', async ({browser})=>{
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto("https://www.facebook.com/");
    await expect(page).toHaveTitle("Facebook – log in or sign up");
});

test('Create New Account', async ({browser})=>{
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto("https://www.facebook.com/");
    await page.locator('text=Create New Account').click();
    await page.locator('[aria-label="First name"]').type("Masud");
    await page.locator('[aria-label="Surname"]').type("Rana");
    await page.locator('[aria-label="Mobile number or email address"]').type("016478338938");
    await page.locator('[aria-label="New password"]').type("masud1234");
    await page.screenshot({ path: 'screenshot.png' });

});