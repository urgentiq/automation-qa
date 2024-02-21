const { test } = require('@playwright/test');
const {CommonFunc} = require('../../global/common/common');
const { LoginPage } = require('../../pages/specs/login/LoginPage');
const {DemographicsPage} = require('../../pages/specs/intake/DemographicsPage');



const { getData } = require('../../global/data/data');
import helper from '../../global/util/helper';


test.describe('Inatke-Demographics', () => {
    test('TC-01 Verify whether user is able to select any Sex from the Sex dropdown menu ', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       var value = "Female";
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        await demographicsPage.clickOnGenderDropdown();
        await demographicsPage.selectGenderOption(value);
    });
});

test.describe('Inatke-Demographics', () => {
    test('TC-02 Verify what happen if the user leave the Sex dropdown blank and click on Save button', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        await demographicsPage.clickOnSaveButton();
    });
});

test.describe('Inatke-Demographics', () => {
    test('TC-03 Verify Street 1 field is editable', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       var Name = helper.generateRandomString(10);
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        await demographicsPage.vaildateStreetFieldEditable(Name);
    });
});

test.describe('Inatke-Demographics', () => {
    test('TC-04 Verify whether the system provides suggestions when the user types a address in the Street 1 field', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       var Name = "S Adelaide Ave";
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        await demographicsPage.enterTextStreetFiled(Name);
        // await demographicsPage. vaildateStreetSuggestionListOption();
    });
});


test.describe('Inatke-Demographics', () => {
    test('TC-05 Verify whether the system provides suggestions when the user types a numeric digit in the Street 1 field', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       var Name = "123";
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        // await demographicsPage.vaildateStreetNoResult(Name);
    });
});

test.describe('Inatke-Demographics', () => {
    test('TC-06 Verify what happen if the user leave the Street 1 field blank and click on Save button', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       var Name = "123";
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        await demographicsPage.clickOnSaveButton();
    });
});

Pending
test.describe('Inatke-Demographics', () => {
    test('TC-07 Verify that when the user selects an address in the Street 1 field, the City, State, and Zip fields are populated automatically.', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       var Name = "123";
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        await demographicsPage.clickOnSaveButton();
    });
});
test.describe('Inatke-Demographics', () => {
    test('TC-08 Verify City field is editable .', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       var CityName = "Reynoldsburg";
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        // await demographicsPage.vaildateCityFiledEditable(CityName);
    });
});

test.describe('Inatke-Demographics', () => {
    test('TC-09 Verify what happen if the user leave the City field blank and click on Save button', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       var CityName = "Reynoldsburg";
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        await demographicsPage.clickOnSaveButton();
    });
});

test.describe('Inatke-Demographics', () => {
    test('TC-10 Verify that user is able to select any state from the State dropdown', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       var CityName = "Reynoldsburg";
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        await demographicsPage.clickOnSaveButton();
    });
});

test.describe('Inatke-Demographics', () => {
    test('TC-11 Verify what happen if the user leave the State field blank and click on Save button', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       var CityName = "Reynoldsburg";
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        await demographicsPage.clickOnSaveButton();
    });
});

test.describe('Inatke-Demographics', () => {
    test('TC-12 Verify Zip field is editable', async ({ page }, testInfo) => {
        test.slow();
 
       var testData = getData('Common');
       var ZipCode = "123456";
       const loginPage = new LoginPage(page, testInfo);
       const demographicsPage = new DemographicsPage(page,testInfo)
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await demographicsPage.clickOnIntakeModule();
        await demographicsPage.clickOnDemographicsSectionModule();
        await demographicsPage.clickOnSaveButton();
    });
});




