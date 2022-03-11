const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AcademyPage extends Page {
    /**
     * define selectors using getter methods
     */
    /*   
     * overwrite specific options to adapt it to page object
     */
    open() {return super.openAcademy();}

    get buttonSignIn(){ return $('//button[@aria-label = "Sign In"]') }
    get buttonSignIn2(){ return $('//a[@aria-label = "Sign In"]')}
    get inputEmail(){ return $('//input[@name= "signInData.email"]') }
    get inputPassword(){ return $('//input[@name= "signInData.password"]') }
    get buttonClose(){return $('//button[@aria-label="close promotion dialog"]')}
    get buttonSignIn3(){ return $('//button[@data-testid="signin-btn"]') }
    

    async clickbuttonSignIn3() {
      await this.buttonSignIn.waitForDisplayed();
      await this.buttonSignIn.click();
      await this.buttonSignIn2.waitForDisplayed();
      await this.buttonSignIn2.click();
      await browser.pause(2000);
      await this.inputEmail.waitForDisplayed();
      await this.inputEmail.setValue('safety7@yahoo.com')
    
      await this.inputPassword.setValue('Sa0557600150#')
      await browser.pause(4000);
      if (this.buttonClose.isExisting() === true) {
        await this.buttonClose.click()
        await this.buttonSignIn3.waitForClickable();
        await this.buttonSignIn3.click();
      } else {
        //await driver.hideKeyboard()
        
        
        //await this.buttonSignIn3.waitForClickable();
       // await driver.setImplicitWaitTimeout(5000);
        
        await this.buttonSignIn3.click() 
      }

      }


    }

module.exports = new AcademyPage();