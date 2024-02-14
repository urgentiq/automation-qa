const { test, expect, chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const  {CommonFunc} = require('../../../global/common/common');
const successlog = require('../../../global/util/logger').successlog;
const errorlog = require('../../../global/util/logger').errorlog;



exports.SearchBarPage = class SearchBarPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page,testInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.func = new CommonFunc(this.page,this.testInfo) 

    // application
    this.intake = this.page.locator("//p[normalize-space()='Intake']");
    this.searchBar = this.page.locator("//input[@placeholder='Search patient by first/last name or DOB (mm/dd/yyyy)']");
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
 
 async clickOnSearchBar(){
  await this.page.waitForTimeout(3000);
  this.func.isDisplayed(this.searchBar,"Search Bar Field is displayed")
  this.func.clickOnObject(this.searchBar,"Click On Search Bar Filed")
  await this.page.waitForTimeout(3000);
 }
 
 async vaildateSearchBarFieldEditable(Name){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.searchBar,"Enter First Name", Name)
  await this.page.waitForTimeout(4000);
  await this.func.clearText(this.searchBar,"clear Search Bar Filed")
  await this.page.waitForTimeout(3000);
 }
 
 async enterFirstName(FirstName){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.searchBar,"Enter First Name", FirstName)
  await this.page.waitForTimeout(3000);
 }
 
 async enterLastName(LastName){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.searchBar,"Enter Last Name", LastName)
  await this.page.waitForTimeout(3000);
 }
 
 async enterDateOfBirth(DOB){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.searchBar,"Enter Last Name", DOB)
  await this.page.waitForTimeout(3000);
 }
 
 async enterFirstNameInPersonalInfo(FirstName){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.firstName, "Enter the First Name",FirstName)
  await this.page.waitForTimeout(3000);
 }
 
 async validateFirstNameEditable(FirstName){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.firstName, "Enter the First Name",FirstName)
  await this.func.clearText(this.firstName,"clear First Name Filed")
  await this.page.waitForTimeout(3000);
 }
 
 async enterLastNameInPersonalInfo(LastName){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.lastName, "Enter the Last Name",LastName)
  await this.page.waitForTimeout(3000);
 }
 
 async validateLastNameEditable(LastName){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.lastName, "Enter the Last Name",LastName)
  await this.func.clearText(this.lastName,"clear Last Name Filed")
  await this.page.waitForTimeout(3000);
 }
 
 async validateDOBEditable(DOB){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.dateOfBirth, "Enter the Date of Birth",DOB)
  await this.func.clearText(this.dateOfBirth,"clear Last Name Filed")
  await this.page.waitForTimeout(3000);
 }
 
 async enterDateOfBirthInPersonalInfo(DOB){
  await this.page.waitForTimeout(1000);
  await this.func.fillOnObject(this.dateOfBirth, "Enter the Date of Birth",DOB)
  await this.page.waitForTimeout(3000);
 }
}