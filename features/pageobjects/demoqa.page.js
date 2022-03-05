

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DemoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUserName() {
        return $('#userName');
    }
    get inputUserEmail() {
        return $('#userEmail');
    }
    get inputCurrentAddress() {
        return $('#currentAddress');
    }
    get inputPermanentAddress() { return $('#permanentAddress');}
    get buttonSubmit() { return $('#submit');}
    async submitForm () {
        await this.inputUserName.setValue("Sanan");
        await this.inputUserEmail.setValue("safety@gmail.com");
        await this.inputCurrentAddress.setValue("6101Westgate");
        await this.inputPermanentAddress.setValue("6101Westgate");
        await this.buttonSubmit.click()
    }

    /*   
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('/');
    }
    get buttonToggle(){return $('//button[@title="Toggle"]')}
    get labelDesktop(){return $('//label[@for="tree-node-desktop"]')}
    get labelDocuments(){return $('//label[@for="tree-node-documents"]')}
    get labelDownloads(){return $('//label[@for="tree-node-downloads"]')}
    async clickcheckbox(){
        await this.buttonToggle.click()
        await this.labelDesktop.click()
        await this.labelDocuments.click()
        await this.labelDownloads.click()
    
    }
}


module.exports = new DemoPage();
