const { test } = require('@playwright/test');
const {CommonFunc} = require('../global/common/common');
const { LoginPage } = require('../pages/specs/login/LoginPage');
const {IntakePage} = require('../pages/specs/Intake/IntakePage');


const { getData } = require('../global/data/data');
import helper from '../global/util/helper';


test.describe('Inatke', () => {
    test('TC-01 Verify that the search bar is editable ', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var Name = helper.generateRandomString(10);
        const loginPage = new LoginPage(page, testInfo);
        const intakePage = new IntakePage(page,testInfo);
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await intakePage.clickOnIntakeModule();
        // await intakePage.clickOnSearchBar();
        await intakePage.vaildateSearchBarFieldEditable(Name);
    });
});

test.describe('Intake', () => {
    test('TC-02 Verify whether the user can search for an existing patient by entering the patients first name ', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var FirstName = 'Sumit1';
        const loginPage = new LoginPage(page, testInfo);
        const intakePage = new IntakePage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await intakePage.clickOnIntakeModule();
        await intakePage.clickOnSearchBar();
        await intakePage.vaildateSearchBarFieldEditable(FirstName);
    });
});

test.describe('Intake', () => {
    test('TC-03 Verify whether the user can search for an existing patient by entering the patients last name ', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var LastName = 'Automation1';
        const loginPage = new LoginPage(page, testInfo);
        const intakePage = new IntakePage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await intakePage.clickOnIntakeModule();
        await intakePage.clickOnSearchBar();
        await intakePage.vaildateSearchBarFieldEditable(LastName);
    });
});

test.describe('Intake', () => {
    test('TC-04 Verify that the search bar is editable ', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var DOB = '10/19/1998';
        const loginPage = new LoginPage(page, testInfo);
        const intakePage = new IntakePage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await intakePage.clickOnIntakeModule();
        await intakePage.clickOnSearchBar();
        await intakePage.enterDateOfBirth(DOB);
    });
});


