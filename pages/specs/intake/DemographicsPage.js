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
    this.menu = this.page.locator("//body/div[@id='__next']/div/div/div/div/div/button//*[name()='svg']");  
    this.firstName = this.page.locator("//input[@Name = 'firstName']");
    this.lastName = this.page.locator("//input[@Name = 'lastName']");
    this.dateOfBirth = this.page.locator("//input[@data-testid='birthDate']");
    this.zipField = this.page.locator("//input[@name='demographicszip']");
    this.emailField = this.page.locator("//input[@name='email']");
    this.phoneField = this.page.locator("//input[@name='patientPhoneNumber']");
    this.declinesToProvideEmailCheckBox = this.page.locator("//input[@name='declinesToProvideEmail']");
    this.primaryCareProviderDropdown = this.page.locator("//div[@class='MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6']//span[@class='MuiTouchRipple-root css-w0pj6f']");
    this.createContactButton = this.page.locator("//button[normalize-space()='Create new Contact']");
    this.providerFirstName = this.page.locator("//input[@Name = 'providerFirstName']");
    this.providerLastName = this.page.locator("//input[@Name = 'providerLastName']");
    this.providerPracticeName = this.page.locator("//input[@Name = 'providerPracticeName']");
    this.providerSpecialty = this.page.locator("//input[@Name = 'providerSpecialty']");
    this.providerStreet1 = this.page.locator("(//div[contains(text(),'Start typing an address...')])[2]");
    this.addButton = this.page.locator("//button[normalize-space()='Add']");
    this.providerPhoneNumber = this.page.locator("//input[@name='providerPhoneNumber']");
    this.providerPhoneNumber = this.page.locator("//input[@name='faxPhoneNumber']");

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

 async validateStreet1AlretMessage(value) {
  this.alretMSG = this.page.locator("//p[normalize-space()='"+value+"']");
  await this.func.isDisplayed( this.alretMSG, `Check if ${value} is displayed `)
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

async validateSexAlretMessage(value) {
  this.alretMSG = this.page.locator("//p[normalize-space()='"+value+"']");
  await this.func.isDisplayed( this.alretMSG, `Check if ${value} is displayed `)
  }
  
  async validateStree1AlretMessage(value) {
    this.strret1alretMSG = this.page.locator("//p[normalize-space()='"+value+"']");
    await this.func.isDisplayed( this.strret1alretMSG, `Check if ${value} is displayed `)
  }
  async validateStateAlretMessage(value) {
    this.streetAlretMessg= this.page.locator("//p[normalize-space()='"+value+"']");
    await this.func.isDisplayed( this.streetAlretMessg, `Check if ${value} is displayed `)
  }

  //City Text Section
  async vaildateCityFiledEditable(CityName){
    await this.page.waitForTimeout(1000);
    await this.func.fillOnObject(this.zipField, "Enter City Name", CityName)
    await this.func.clearText(this.cityFiled,"clear City Name")
    await this.page.waitForTimeout(3000);
   }

  async validateCityAlretMessage(value) {
    this.cityalretMSG = this.page.locator("//p[normalize-space()='"+value+"']");
    await this.func.isDisplayed( this.cityalretMSG, `Check if ${value} is displayed `)
  }
  
  //Zip/Postal Code Section
  async vaildateZipFiledEditable(ZipCode){
    await this.page.waitForTimeout(1000);
    await this.func.fillOnObject(this.zipField, "Enter The Zip Code", ZipCode)
    await this.func.clearText(this.cityFiled,"clear Zip Filed")
    await this.page.waitForTimeout(3000);
   }
  
   async validateZipAlretMessage(value) {
    this.cityalretMSG = this.page.locator("//p[normalize-space()='"+value+"']");
    await this.func.isDisplayed( this.cityalretMSG, `Check if ${value} is displayed `)
  }
  
  //Email Field Section
  async enterEmailField(Email){
    await this.page.waitForTimeout(1000);
    await this.func.fillOnObject(this.emailField, "Enter The Zip Code",Email)
   }
  
  async vaildateEmailFieldEditable(Email){
    await this.page.waitForTimeout(1000);
    await this.func.fillOnObject(this.emailField, "Enter Email Text", Email)
    await this.func.clearText(this.emailField,"clear Email Text")
    await this.page.waitForTimeout(3000);
   }
  
   async validateEmailAlretMessage(value) {
    this.cityalretMessg = this.page.locator("//p[normalize-space()='"+value+"']");
    await this.func.isDisplayed( this.cityalretMessg, `Check if ${value} is displayed `)
  }
  
  async clickOnCheckBox() {
    this.func.clickOnObject(this.declinesToProvideEmailCheckBox,"Click On  Declines To Provide Email Check Box ")
    await this.page.waitForTimeout(1000);
  }
  
  //Patient Phone Section
  async enterPhoneField(PhoneNbr){
    await this.page.waitForTimeout(1000);
    await this.func.fillOnObject(this.phoneField, "Enter Phone Nbr",PhoneNbr)
   }
  
  async vaildatePhoneNbrEditable(PhoneNbr){
    await this.page.waitForTimeout(1000);
    await this.func.fillOnObject(this.phoneField, "Enter Phone Nbr", PhoneNbr)
    await this.func.clearText(this.phoneField,"clear Phone Nbr")
    await this.page.waitForTimeout(3000);
   }
  
   async validatePhoneNbrAlretMessage(value) {
    this.phoneNbralretMessg = this.page.locator("//p[normalize-space()='"+value+"']");
    await this.func.isDisplayed( this.phoneNbralretMessg, `Check if ${value} is displayed `)
  }

}



