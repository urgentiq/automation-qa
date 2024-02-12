const { test, expect, chromium } = require('@playwright/test');
const { LoginPage } = require('../pages/specs/login/LoginPage');


const fs = require('fs');
const path = require('path');

const { getData } = require('../global/data/data');
const { helper, getTodayDate } = require('../global/util/helper');


test.describe('Login', () => {
    test('TC-01 Verify Login as New User', async ({ page }, testInfo) => {
        test.slow();

        var testData = getData('Common');

        const loginPage = new LoginPage(page, testInfo);

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await loginPage.validateLoginSuceesfull('Dashboard');
       
    });
});

test.describe('Inatke', () => {
    test('TC-02 Verify that the search bar is editable ', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var Name = helper.generateRandomString(10);
        const loginPage = new LoginPage(page, testInfo);
        const intakePage = new IntakePage(page,testInfo);
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await intakePage.clickOnIntakeModule();
        await intakePage.clickOnSearchBar();
        await intakePage.vaildateSearchBarFieldEditable(Name);
    });
});

test.describe('Login', () => {
    test('TC-03 Verify Login as New User without validation', async ({ page }, testInfo) => {
        test.slow();

        var testData = getData('Common');

        const loginPage = new LoginPage(page, testInfo);

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await loginPage.validateLoginSuceesfull('Dashboard1');
       
    });
});
