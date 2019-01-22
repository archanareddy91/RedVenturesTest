/*
    Test case to validate the following,
    1. Open the customer login page.
    2. Check the form elements
    3. Check the login action with invalid username/password.
*/

const assert = require('assert')
var homePage = require('./pages/HomePage')

describe('Validate Frontier Internet Service, MyAccount functionality',() => {
    

    before(function() {
        homePage.openHomePage(undefined);
        $('//a[text()="My Account"]').click();
        $('//button[@data-i18n="fid.cancel"]').waitForDisplayed(60000)
     });
    
    it('Check for the invalid username/password.', () => {
        var userName = 'archana'
        var userPWd = 'archanaredventures'

        var expectedErrorMessage = "Incorrect Frontier ID or Password. Please try again."

        $$("input").forEach (
            (element) => {
                if(element != null) {
                     if (element.getAttribute("ng-model") == "login.loginId"){
                         if(element.isDisplayed()){
                            console.log(element.getAttribute("ng-model"))
                            console.log(element.isDisplayed())
                            element.setValue("nanda")
                         }
                     }
                     if (element.getAttribute("ng-model") == "login.password"){
                        if(element.isDisplayed()){
                           console.log(element.getAttribute("ng-model"))
                           console.log(element.isDisplayed())
                           element.setValue("nanda")
                        }
                    }
                }
            }
        )
        
        
        $('//button[@data-i18n="fid.login-button"]').click()
        $('//*[@id="ng-app"]/body/section/div[5]/div/div/div/div/div/div[3]/div[1]/div/p[1]').waitForDisplayed("30000")
        actualErrorMessage = $('//*[@id="ng-app"]/body/section/div[5]/div/div/div/div/div/div[3]/div[1]/div/p[1]').getText()
        console.log(actualErrorMessage)
        assert.equal(actualErrorMessage,expectedErrorMessage);
        
    });
    browser.pause(5000);
}

);