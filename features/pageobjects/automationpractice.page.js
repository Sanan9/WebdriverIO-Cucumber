const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AutomationPracticePage extends Page {
    /**
     * define selectors using getter methods
     */
    /*   
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('/');
    }
    get titlePrintedChiffonDress(){return $$('//img[@title="Faded Short Sleeve T-shirts"]')}
    get buttonAddToCart(){return $('//button[@name="Submit"]')} 
    async clickbuttonAddToCart()
    {   await this.titlePrintedChiffonDress[0].click()
        
        await this.buttonAddToCart.click()
    }
}
module.exports = new AutomationPracticePage();