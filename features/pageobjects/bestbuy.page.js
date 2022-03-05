const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BestbuyPage extends Page {
    /**
     * define selectors using getter methods
     */
    /*   
     * overwrite specific options to adapt it to page object
     */
    open() {return super.openBestBuy();} // must be indicated on page.js as a return browser
    get buttonclose()  {return $$('//button[@aria-label="Close"]')}
    get titleAccount() { return $('//*[@class="v-p-right-xxs line-clamp"]') }
    get buttonSignIn() { return $('//*[@class="c-button c-button-secondary c-button-sm sign-in-btn"]') }
    get textBoxEmail() { return $('input[type="email"]') }
    get textBoxPassword() { return $('input[type="password"]') }
    get buttonSignIn2() { return $('//button[@data-track="Sign In"]') }


    async clickbuttonSignIn2() {
      await browser.pause(2000)
      await this.buttonclose[1].waitForDisplayed()
      await this.buttonclose[1].click()
      await this.titleAccount.waitForClickable()
      await this.titleAccount.click()
      await this.buttonSignIn.waitForClickable()
      await this.buttonSignIn.click()
      await this.textBoxEmail.waitForDisplayed()
      await this.textBoxEmail.setValue("senan.aliyev7@yahoo.com")
      await this.textBoxPassword.setValue("Sa0557600145!!!")


      await this.buttonSignIn2.click()
    }

    }
module.exports = new BestbuyPage();