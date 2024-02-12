const { test, expect, chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const  {CommonFunc} = require('../../../global/common/common');
const successlog = require('../../../global/util/logger').successlog;
const errorlog = require('../../../global/util/logger').errorlog;



exports.DashboardPage = class DashboardPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page,testInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.func = new CommonFunc(this.page,this.testInfo) 

    // application
    this.addVisitButton = this.page.locator("//button[normalize-space()='Add Visit']");
    this.personalInformation = this.page.locator("//button[normalize-space()='Personal Information']");
       
  }


  async clickOnAddVisitButton(){
    await this.page.waitForTimeout(3000);
    this.func.isDisplayed(this.addVisitButtont,"Add Visit Button is displayed")
    this.func.clickOnObject(this.addVisitButton,"Click on Add Visit Button")
    await this.page.waitForTimeout(3000);
}

async validateAddVisitButton(){
  await this.page.waitForTimeout(1000);
  this.func.isDisplayed(this.personalInformation,"Personal Information is displayed")
  await this.page.waitForTimeout(3000);
}

 
    
}