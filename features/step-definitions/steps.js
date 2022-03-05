const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const DemoPage = require("../pageobjects/demoqa.page")
const AutomationPracticePage = require("../pageobjects/automationpractice.page")
const BladehqPage = require("../pageobjects/bladehq.page")
const BestbuyPage = require("../pageobjects/bestbuy.page")  
const GenuineKiaPartsPage = require("../pageobjects/genuinekiaparts.page")
const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When(/^I submit a form$/, async () => {
    await DemoPage.open()
    await DemoPage.submitForm()
});






When(/^I click a Checkboxes$/, async () => {
    await DemoPage.open()
    
    await DemoPage.clickcheckbox()
});

When(/^I click button add to cart$/, async () => {
    await BladehqPage.open()
    await BladehqPage.clickbuttonAddToCart()
});

When(/^I open best buy website and sign in$/, async () => {
    await BestbuyPage.open()
    await BestbuyPage.clickbuttonSignIn2()
}); 
When(/^I submit an email and password$/, async () => {
    await GenuineKiaPartsPage.open()
    await GenuineKiaPartsPage.createAccount()
});
