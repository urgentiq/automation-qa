const successlog = require('../../global/util/logger').successlog;
const errorlog = require('../../global/util/logger').errorlog;
const assert = require('assert');
const { expect } = require('jest');

exports.CommonFunc = class CommonFunc {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page, testInfo) {
        this.page = page;
        this.testInfo = testInfo;
    }
    async waitForVisible(locator, timeout) {
        const startTime = Date.now();
        while (Date.now() - startTime < timeout) {
            try {
                if (locator.isVisible()) {
                    return;
                }
            } catch (err) {
                // Handle any error that occurs during visibility check
            }
            await new Promise(resolve => setTimeout(resolve, 100)); // Poll every 100 milliseconds
        }
        throw new Error('Element did not become visible within the specified timeout.');
    }

    async clickOnObject(locator, message) {
        try {
            successlog.info(message);
            const timeout = 5000; // Timeout value in milliseconds
            await this.waitForVisible(locator, timeout); // Wait for the element to become visible
            await locator.click({ force: true });
        } catch (err) {
            errorlog.error("Error occurred while clicking on the object", err);
        }
    }



    async fillOnObject(locator, message, value) {
        try {
            //  await this.page.pause();
            await locator.waitFor();
            this.clickOnObject(locator, message);
            await locator.waitFor();
            await locator.fill(value, { force: true });
            await this.page.waitForTimeout(1000);
            successlog.info(message + " with value as :: " + value);
        } catch (err) {
            errorlog.error("Error occurred while filling the object", err);
        }

    }

    async retrieveInputValue(locator) {
        try {
            const value = await locator.value;
        
            successlog.info(" value retrieved as :: " + value);
            return value
        } catch (err) {
            errorlog.error("Error occurred while retrieved input value = ", err);
        }

    }


    /**
     This functions is used to validate the element is visible
     @param -locator
     @param -message
 */
    async isDisplayed(locator, message) {
        try {
            await locator.waitFor();
            successlog.info(`${message} is visible`);
        } catch (err) {
            errorlog.error("Error occurred while checking if the element is visible", err);
        }
    }


    /**
            This functions is used to hover on  the element
            @param -locator
            @param -message
        */
    async hoverOnObject(locator, message) {
        try {
            await locator.waitFor();
            await locator.hover();
            // await this.page.hover(locator);
            successlog.info(`${message} is hovered successfully`);
        } catch (err) {
            errorlog.error("Error occurred while hovering over the object", err);
        }
    }

    async isEnabled(locator, message) {
        try {
            await locator.waitFor();
            await locator.isEnabled();
            successlog.info(`${message} is enabled`);
        } catch (err) {
            errorlog.error("Error occurred while checking if the element is enabled", err);
        }
    }

    async isDisabled(locator, message) {
        try {
            await locator.waitFor();
            await locator.isEnabled();
            successlog.info(`${message} is disabled`);
        } catch (err) {
            errorlog.error("Error occurred while checking if the element is disabled", err);
        }
    }

    /**
         This functions is used to clear the text
         @param -locator (field name)
         @param -message
     */
    async clearText(locator, message) {
        try {
            await locator.waitFor({ state: 'visible' }); // Wait for the locator element to be visible
            await this.clickOnObject(locator, message); // Click on the locator element
            await locator.fill(''); // Clear the text by filling an empty value
            successlog.info(message + ' text is cleared');
        } catch (err) {
            errorlog.error('Error occurred while clearing the text', err);
        }
    }


    async getText(locator) {
        try {
            await locator.waitFor();
            this.hoverOnObject(locator, message);
            await locator.getText();
            successlog.info(`Text obtained from ${locator} successfully`);
        } catch (err) {
            errorlog.error("Error occurred while getting the text", err);
        }
    }

    async getAttribute(locator) {
        try {
            await locator.waitFor();
            await locator.getAttribute(name);
            successlog.info(`Attribute obtained from ${locator} successfully`);
        } catch (err) {
            errorlog.error("Error occurred while getting the attribute", err);
        }
    }

    async scrollIntoViewElement(locator, message) {
        try {
            //await locator.waitFor();
            await page.scrollTo(0, 0);
            await page.scrollIntoView(locator);
            // await locator.scrollIntoViewElement();
            successlog.info(`${message} element is scrolled into view successfully`);
        } catch (err) {
            errorlog.error("Error occurred while scrolling the element into view", err);
        }
    }

    async keyboardActions(buttonName) {
        try {
            await this.page.keyboard.press(buttonName);
            successlog.info(`Keyboard action "${buttonName}" performed successfully`);
        } catch (err) {
            errorlog.error("Error occurred while performing keyboard action", err);
        }
    }

    async keyboardType(value) {
        try {
            await this.page.keyboard.type(value);
            successlog.info(`Keyboard Type "${value}" performed successfully`);
        } catch (err) {
            errorlog.error("Error occurred while performing keyboard Type", err);
        }
    }


    async uploadImage(locator, data) {
        try {
            const fileChooserPromise = this.page.waitForEvent('filechooser');
            await locator.click();
            const fileChooser = await fileChooserPromise;
            await fileChooser.setFiles(data);
            successlog.info(`Uploaded image with value successfully`);
        } catch (err) {
            errorlog.error("Error occurred while uploading the image", err);
        }
    }

    async uploadImage1(locator, data) {
       // Start waiting for file chooser before clicking. Note no await.
       const fileChooserPromise = page.waitForEvent('filechooser');
       await page.getByText('Upload file').click();
       const fileChooser = await fileChooserPromise;
       await fileChooser.setFiles(path.join(__dirname, 'myfile.pdf'));
    }

    async isCheckboxChecked(locator) {
        try {
            const isChecked = await page.$eval(locator, input => locator.checked);
            successlog.info(`Checkbox is checked`);
            return isChecked;
        } catch (err) {
            errorlog.error("Error occurred while checking if the checkbox is checked", err);
        }

    }


    async waitForTime(locator, message) {
        try {
            await locator.waitFor({ timeout: 1800000 });
            successlog.info(`${message} element waited successfully`);
        } catch (err) {
            errorlog.error("Timeout occurred while waiting for element", err);
        }
    }

    async selectDropdownOption(locator, value, message) {
        try {
            await page.locator().selectOption(value)
            //await selectOption(locator, value);
            successlog.info(`${message} selected option "${value}" from ${locator} successfully`);
        } catch (err) {
            errorlog.error("Error occurred while selecting the dropdown option", err);
        }
    }

    async reloadPageWhenSelectorVisible(page, locator) {
        try {
            await locator.waitFor({ state: 'visible' });
            await page.reload();
            successlog.info('Page reloaded successfully');
        } catch (err) {
            console.error(err);
            errorlog.error('Page reload failed', err);
        }
    }

    async errorMessageDiscard(locator,message){
        try{
            await locator.isVisible();
        }catch(err){
            errorlog.error('Page reload failed', err);
        }
    }

    // async validateSpecialCharacterInInputField(locator,msg){
    //     try{
    //        var expectedmsg=this.page(locator).getText()
    //        console.log(expectedmsg)
    //         assert.ok(msg, expectedmsg);

    //     }catch(err){
    //         errorlog.error("Validation Failed",err)
    //     }Please input a Field name

    // }

    

    async validateTextInHTML() {
        const html = await this.page.content();
        const searchText = 'Please input a Field name';
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
      
        const elementsWithText = this.doc.querySelectorAll(`*:contains('${searchText}')`);
      
        if (elementsWithText.length > 0) {
          console.log(`The text "${searchText}" is present in the HTML document.`);
        } else {
          console.log(`The text "${searchText}" is not present in the HTML document.`);
        }
      }
      
      
      
      
      
      


   

}