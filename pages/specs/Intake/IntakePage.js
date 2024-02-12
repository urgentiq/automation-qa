const { test, expect} = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const  {CommonFunc} = require('../../../global/common/common');
const successlog = require('../../../global/util/logger').successlog;
const errorlog = require('../../../global/util/logger').errorlog;
const assert = require('assert');
const configPath = path.join(__dirname,'');




exports.IntakePage = class IntakePage {

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
  await this.func.clearText(this.searchBar,"clear Search Bar Filed")
  await this.func.fillOnObject(this.searchBar,"Enter First Name", FirstName)
  await this.page.waitForTimeout(3000);
}

async enterLastName(LastName){
  await this.page.waitForTimeout(1000);
  await this.func.clearText(this.searchBar,"clear Search Bar Filed")
  await this.func.fillOnObject(this.searchBar,"Enter Last Name", LastName)
  await this.page.waitForTimeout(3000);
}

async enterDateOfBirth(DOB){
  await this.page.waitForTimeout(1000);
  await this.func.clearText(this.searchBar,"clear Search Bar Filed")
  await this.func.fillOnObject(this.searchBar,"Enter Last Name", DOB)
  await this.page.waitForTimeout(3000);
}

 
    
}