const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GenuineKiaPartsPage extends Page {
    /**
     * define selectors using getter methods
     */
    /*   
     * overwrite specific options to adapt it to page object
     */
    get titleMyAcoount() { return $('//ul[@class="main-nav"]/a[@href = "account/login"]')}
    get titleCreateUser() { return $('//a[@class="create-user"]')}
    get textBoxEmail() { return $('//input[@id="create_email_address"]')}
    get textBoxPassword() { return $('//input[@id="create_password"]')}
    get textBoxConfirmPassword() { return $('//input[@id="create_confirm"]')}
    get checkBoxTerms() { return $('//input[@id="terms-and-conditions-checkbox"]')}
    get buttonCreateAccount() { return $('//button[@class ="login-user-form-submit block-button btn btn-primary"]')}


  /**
   * Fuction Description... function for create an account !
   *  @author Sanan Aliyev
   *  function cannot be same as button script !!!
   */
    async createAccount() {

      // Pause for 2 seconds
      await browser.pause(2000)

      // Wait for element and click
      //await browser.debug()
     // await this.titleMyAccount.waitForClickable() 
      await this.titleMyAcoount.click()
      
      // Wait for element and click
      await this.titleCreateUser.waitForClickable()
      await this.titleCreateUser.click()
     
     // waiting for shorter than wait for clickable
      await this.textBoxEmail.waitForDisplayed()  
      await this.textBoxEmail.setValue("senan.aliyev7@yahoo.com")
      await this.textBoxConfirmPassword.waitForDisplayed()
      await this.textBoxPassword.setValue("Sa0557600145!!!")
      await this.textBoxConfirmPassword.setValue("Sa0557600145!!!")
      await this.checkBoxTerms.waitForClickable()
      await this.checkBoxTerms.click()
      await browser.debug()
      await this.buttonCreateAccount.waitForExist()
      await this.buttonCreateAccount.click()
      
    }

    open() {return super.openGenuineKiaParts();} // must be indicated on page.js as a return browser

    }
module.exports = new GenuineKiaPartsPage(); 