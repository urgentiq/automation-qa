const { test } = require('@playwright/test');
const {CommonFunc} = require('../../global/common/common');
const { LoginPage } = require('../../pages/specs/login/LoginPage');
const { PersonalInfoPage} = require('../../pages/specs/intake/PersonalInfoPage');



const { getData } = require('../../global/data/data');
import helper from '../../global/util/helper';




test.describe('Intake-PersonalInformation', () => {
    test('TC-01 Verify whether the First name field is editable  ', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var FirstName = "Sumit1";
        const loginPage = new LoginPage(page, testInfo);
        const personalInfoPage = new PersonalInfoPage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await personalInfoPage.clickOnIntakeModule();
        await personalInfoPage.validateFirstNameEditable(FirstName); 
    });
    
});

test.describe('Intake-PersonalInformation', () => {
    test('TC-02 Verify whether the Last name field is editable   ', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var LastName = "Automation1";
        const loginPage = new LoginPage(page, testInfo);
        const personalInfoPage = new PersonalInfoPage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await personalInfoPage.clickOnIntakeModule();
        await personalInfoPage.validateLastNameEditable(LastName); 
    });
    
});

test.describe('Intake-PersonalInformation', () => {
    test('TC-03 Verify whether the DOB field is editable', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var DOB = "01/09/2002";
        const loginPage = new LoginPage(page, testInfo);
        const personalInfoPage = new PersonalInfoPage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await personalInfoPage.clickOnIntakeModule();
        await personalInfoPage.validateDOBEditable(DOB); 
    });
    
});

test.describe('Intake-PersonalInformation', () => {
    test('TC-04 Verify that the calendar icon is visible and clickable beside the DOB field', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var DOB = "01/09/2002";
        const loginPage = new LoginPage(page, testInfo);
        const personalInfoPage = new PersonalInfoPage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await personalInfoPage.clickOnIntakeModule();
        await personalInfoPage.clickOnCalenderIcon(); 
    });
    
});

test.describe('Intake-PersonalInformation', () => {
    test('TC-05 Verify that clicking on the calendar icon opens the date picker/calendar', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var DOB = "01/09/2002";
        const loginPage = new LoginPage(page, testInfo);
        const personalInfoPage = new PersonalInfoPage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await personalInfoPage.clickOnIntakeModule();
        await personalInfoPage.clickOnCalenderIcon(); 
        await personalInfoPage.clickOnPreviousButton(); 
        await personalInfoPage.selectDateOnDobCalender(); 
    });
    
});

test.describe('Intake-PersonalInformation', () => {
    test('TC-06 Verify that the calendar allows navigation through months/years and selection of a date', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var DOB = "01/09/2002";
        const loginPage = new LoginPage(page, testInfo);
        const personalInfoPage = new PersonalInfoPage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await personalInfoPage.clickOnIntakeModule();
        await personalInfoPage.validateLastNameEditable(DOB); 
    });
    
});


