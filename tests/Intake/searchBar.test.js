const { test } = require('@playwright/test');
const {CommonFunc} = require('../../global/common/common');
const { LoginPage } = require('../../pages/specs/login/LoginPage');
const {SearchBarPage} = require('../../pages/specs/intake/SearchBarPage');



const { getData } = require('../../global/data/data');
import helper from '../../global/util/helper';


test.describe('Inatke-SearchBar', () => {
    test('TC-01 Verify that the search bar is editable ', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var Name = helper.generateRandomString(10);
        const loginPage = new LoginPage(page, testInfo);
        const searchBarPage= new SearchBarPage(page,testInfo);
       

        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await searchBarPage.clickOnIntakeModule();
        await searchBarPage.vaildateSearchBarFieldEditable(Name);
    });
});

test.describe('Inatke-SearchBar', () => {
    test('TC-02 Verify whether the user can search for an existing patient by entering the patients first name ', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var FirstName = 'Sumit1';
        const loginPage = new LoginPage(page, testInfo);
        const searchBarPage = new SearchBarPage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await searchBarPage.clickOnIntakeModule();
        await searchBarPage.clickOnSearchBar();
        await searchBarPage.vaildateSearchBarFieldEditable(FirstName);
    });
});

test.describe('Inatke-SearchBar', () => {
    test('TC-03 Verify whether the user can search for an existing patient by entering the patients last name ', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var LastName = 'Automation1';
        const loginPage = new LoginPage(page, testInfo);
        const searchBarPage = new SearchBarPage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await searchBarPage.clickOnIntakeModule();
        await searchBarPage.clickOnSearchBar();
        await searchBarPage.vaildateSearchBarFieldEditable(LastName);
    });
});

test.describe('Inatke-SearchBar', () => {
    test('TC-04 Verify whether the system provides suggestions based on the users search when the user types a patients first/last name or DOB (MM/DD/YYYY)', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var FirstName = "Sumit1";
        var LastName = "Automation1"
        var DOB = '10/19/1998';
        const loginPage = new LoginPage(page, testInfo);
        const searchBarPage = new SearchBarPage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await searchBarPage.clickOnIntakeModule();
        await searchBarPage.clickOnSearchBar();
        await searchBarPage.enterFirstName(FirstName);
        await searchBarPage.enterLastName(LastName)
        await searchBarPage.enterDateOfBirth(DOB);
    });
});

test.describe('Inatke-SearchBar', () => {
    test('TC-05 Verify whether the user can search for an existing patient by entering the patients DOB(MM/DD/YYYY)', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var DOB = '10/19/1998';
        const loginPage = new LoginPage(page, testInfo);
        const searchBarPage = new SearchBarPage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await searchBarPage.clickOnIntakeModule();
        await searchBarPage.clickOnSearchBar();
        await searchBarPage.enterDateOfBirth(DOB);
    });
});

test.describe('Inatke-SearchBar', () => {
    test('TC-06 Verify if, while using Elasticsearch to search for a patient, the patients details (first/last name or DOB - MM/DD/YYYY) match exactly ', async ({ page }, testInfo) => {
        test.slow();
 
        var testData = getData('Common');
        var DOB = '10/19/1998';
        const loginPage = new LoginPage(page, testInfo);
        const searchBarPage = new SearchBarPage(page,testInfo);
       
        await loginPage.gotoLegacyApp();
        await loginPage.loginToApplication(testData[0].userid, testData[0].password);
        await searchBarPage.clickOnIntakeModule();
        await searchBarPage.clickOnSearchBar();
        await searchBarPage.enterDateOfBirth(DOB);
    });
});