const {test, expect} = require('@playwright/test');

test('Enter First name', async ({browser})=>{
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto("https://fluentforms.com/forms/contact-form-demo/");
    await page.locator('#ff_3_names_first_name_').type("Masud");
    await page.locator('#ff_3_names_last_name_').type("Rana");
    await page.locator('#ff_3_email').type("mr22@gmail.com");
    await page.locator('#ff_3_subject').type("Test Subject");
    await page.locator('#ff_3_message').type("This is the test messages");
    await page.locator('text=Submit Form').click();
    //Thank you for your message. We will get in touch with you shortly
    const loce = page.locator('.ff-message-success');
    await expect(loce).toHaveText("Thank you for your message. We will get in touch with you shortly");

});

