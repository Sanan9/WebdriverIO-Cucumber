
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BladehqPage extends Page {
    /**
     * define selectors using getter methods
     */
    /*   
     * overwrite specific options to adapt it to page object
     */
    open() {return super.openBladeHq();}
  
    get titleKnives(){ return $$('//li[@class="nav-item dropdown main-dropdown"]') }
    get titleBenchmadeBugoutAXIS(){ return $('//*[@src="//www.bladehq.com/imgs/knives/manual-knives/benchmade-manual/535-bugout/Benchmade-Bugout-AXIS-Lock-Black-CF-Elite-TM-Black-535BK-2-BHQ-98607-jr-thumb.jpg"]')}
    get checkMarkBox(){ return $('label.checkboxCustomization') }
    get inputCustomize(){ return $('//input[@name="custom_text"]') }
    get buttonAddToCart(){ return $('//button[@name="submit"]') }

    async clickbuttonAddToCart() {
      await this.titleKnives[0].waitForDisplayed();
      await this.titleKnives[0].click();
      await this.titleBenchmadeBugoutAXIS.waitForDisplayed();
      await this.titleBenchmadeBugoutAXIS.click();
      await browser.pause(2000);
      await this.checkMarkBox.waitForDisplayed();
      await this.checkMarkBox.click()
      await browser.pause(2000)
      await this.inputCustomize.waitForDisplayed();
      await this.inputCustomize.setValue("Sanan Aliyev")
      await this.buttonAddToCart.scrollIntoView()
      await this.buttonAddToCart.click() 
      }


    }

module.exports = new BladehqPage();