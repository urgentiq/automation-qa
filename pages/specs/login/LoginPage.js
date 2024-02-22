const { expect } = require('@playwright/test');
import {config} from '../../../global/config/config.json';
const  {CommonFunc} = require('../../../global/common/common');
const successlog = require('../../../global/util/logger').successlog;
const errorlog = require('../../../global/util/logger').errorlog;

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page,testInfo) {
    this.page = page;
    this.testInfo = testInfo;

    // application
    this.userId = this.page.locator("xpath=//input[@id='identifier-field']");
    this.continueButton = this.page.locator("xpath = //button[normalize-space()='Continue']");
    this.password = this.page.locator("xpath=//input[@id='password-field']");
    this.signInWithGoogle = this.page.locator("xpath=.//button[text()='Sign in with Google']");
    this.dasboardHeading = this.page.locator("//p[text()='Dashboard']");
    this.pageTitle = this.page.locator("xpath=(//p[contains(text(), 'Dashboard')])[1]");
    this.func = new CommonFunc(this.page,this.testInfo)    
  }

  async gotoLegacyApp() {
    var url="https://uat-ui.urgentiq.com";
    successlog.info(url);
    await this.page.goto(url, { waitUntil: 'networkidle' },{ timeout: 30000 });  
  }

  async gotoNewApp(){
    var url = config.newApplicationUrl;
    successlog.info(url); 
  
  }

  async loginToApplication(username, passwd) {
    await this.page.window
   
    await this.func.fillOnObject(this.userId,"Enter the username",username);
    //await this.page.waitForTimeout(2000);
    await this.func.clickOnObject(this.continueButton,"Click on the Continue button");
     await this.page.waitForTimeout(2000);
    await this.func.fillOnObject(this.password,"Enter the password",passwd);
    //await this.page.waitForTimeout(2000);
    await this.func.clickOnObject(this.continueButton,"Click on the Continue button"); 
  }

  async validateLoginSuceesfull(Name){
    await this.page.waitForTimeout(5000);
    this.pageTitle = this.page.locator(`xpath=(//p[text()='${Name}'])[1]`)
    await this.func.isDisplayed( this.pageTitle, `Check if ${Name} is displayed `)
    
}
}