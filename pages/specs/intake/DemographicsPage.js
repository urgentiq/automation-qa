const { test, expect, chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const  {CommonFunc} = require('../../../global/common/common');
const successlog = require('../../../global/util/logger').successlog;
const errorlog = require('../../../global/util/logger').errorlog;



exports.DemographicsPage = class DemographicsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page,testInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.func = new CommonFunc(this.page,this.testInfo) 

    // application
    this.intake = this.page.locator("//p[normalize-space()='Intake']");
    this.demographics = this.page.locator("//button[normalize-space()='Demographics']");
    this.genderDropdown = this.page.locator("//div[@id='mui-component-select-sex']");
    this.saveButton = this.page.locator("//button[normalize-space()='Save']");
    this.dropdownListGender = this.page.locator("//ul[@role='listbox']/li");
    this.maleGneder = this.page.locator("//ul[@role='listbox']/li[text()='Female']");
    this.street = this.page.locator("//div[contains(text(),'Start typing an address...')]");
    this.streetDroupdownList = this.page.locator('//div[@id="react-select-2-listbox"]//div[@aria-disabled="false"]');
    this.streetDropdownNoResult = this.page.locator("//div[contains(text(),'No results')]");
    this.cityFiled = this.page.locator("//input[@id=':re:']");
    this.menu = this.page.locator("//div[@class='css-1m92dtn']//button[@type='button']");  
    this.firstName = this.page.locator("//input[@Name = 'firstName']");
    this.lastName = this.page.locator("//input[@Name = 'lastName']");
    this.dateOfBirth = this.page.locator("//input[@data-testid='birthDate']");

  }

  async clickOnIntakeModule(){
    await this.page.waitForTimeout(3000);
    this.func.clickOnObject(this.menu,"Click On Menu Button")
    this.func.isDisplayed(this.intake,"Intake Module is displayed")
    this.func.clickOnObject(this.intake,"Click on Intake Module")
    await this.page.waitForTimeout(3000);
 }
// Click on Demographics Section
 async clickOnDemographicsSectionModule(){
  await this.page.waitForTimeout(3000);
  this.func.clickOnObject(this.menu,"Click On Menu Button")
  // this.func.clickOnObject(this.intake,"Click on Intake Module")
  this.func.isDisplayed(this.demographics,"Demographics Section is displayed")
  this.func.clickOnObject(this.demographics,"Click on Intake Module")
  await this.page.waitForTimeout(3000);
}

async clickOnGenderDropdown(){
  await this.page.waitForTimeout(3000);
  this.func.clickOnObject(this.genderDropdown,"Click On Gender DropDown")
  await this.page.waitForTimeout(3000);
}

async selectDropdownOption(locator, value, message){
  await this.page.waitForTimeout(3000);
  this.func.page.selectDropdownOption(this.dropdownListGender,Male ,"Click On Gender DropDown")
  await this.page.waitForTimeout(3000);
}

// Click On Save Button
async clickOnSaveButton(){
  await this.page.waitForTimeout(3000);
  this.func.clickOnObject(this.saveButton,"Click Save Button")
  await this.page.waitForTimeout(3000);
}

// Enter the Text in Street 1 Field
async enterTextStreetFiled(Name){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.street,"Enter First Name", Name)
  await this.page.waitForTimeout(3000);
}

// Validate Stret Filed is Editable
async vaildateStreetFieldEditable(Name){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.street,"Enter First Name", Name)
  await this.page.waitForTimeout(4000);
  await this.func.clearText(this.street,"clear Search Bar Filed")
  await this.page.waitForTimeout(3000);
 }

 //Validate Street Sugestion List
 async vaildateStreetSuggestionListOption() {
  try {
      const element = await page.$(''); 
  } catch (error) {
      console.error('Error retrieving search result:', error);
      return 'error';
  }
}

// Validate No Result Found in the Street Dropdown list
async vaildateStreetNoResult(Name){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.street,"Enter First Name", Name)
  await this.page.waitForTimeout(4000);
  await this.func.isDisplayed(this.streetDropdownNoResult, "No Result is Displayed");
  await this.page.waitForTimeout(3000);
 }

 async selectGenderOption(value) {
  try {
    // Find the option with the specified value
    const dropDownList = `//ul[@role='listbox']/li[text()='${value}']`;
    const option = await this.page.waitForSelector(dropDownList);
    await option.click();
    console.log(`Selected option: ${dropDownList}`);
    // Wait for a brief moment to ensure the selection is reflected
    await this.page.waitForTimeout(1000); // Adjust as needed
  } catch (error) {
    console.error('Error selecting gender option:', error);
  }
}

}



