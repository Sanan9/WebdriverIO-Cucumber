/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    
     openBladeHq() {
        return browser.url('https://www.bladehq.com/') }

     openBestBuy() {
        return browser.url('https://www.bestbuy.com/') 
     }
     openGenuineKiaParts() {
        return browser.url('https://www.genuinekiaparts.com/')
    }
    openAcademy(){return browser.url('https://www.academy.com/')
   }
}
