const { test } = require('@playwright/test');
const {CommonFunc} = require('../global/common/common');
const { LoginPage } = require('../pages/specs/login/LoginPage');
const { DashboardPage } = require('../pages/specs/Dashboard/DashboardPage');





const { getData } = require('../global/data/data');
import helper from '../global/util/helper';


test.describe('Dashboard', () => {
    test('TC-01 Dashboard: Verify that Add Visit button is clickable', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        const loginPage = new LoginPage(page, testInfo);
        const dasboardPage = new DashboardPage(page,testInfo);

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await dasboardPage.clickOnAddVisitButton();
        await dasboardPage.validateAddVisitButton();
       
    });
});


