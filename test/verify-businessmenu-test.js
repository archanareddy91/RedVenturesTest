/*
    Test case to validate the following,
     Open the business page and check the button to open the call pop-up is working or not.
*/

const assert = require('assert')
var homePage = require('./pages/HomePage')

describe('Validate Frontier Internet Service, business functionality', () => {
        

        /*
            Before hook to open the homepage.
        */

        before(function () {
            homePage.openHomePage(undefined);
            
        });

        it('Open and verify the business page', () => {
            $('a[href="/business/"]').click();
            assert.equal($('//section/div/div[1]/a[contains(@href,"tel:")]').isEnabled(), true);
        });

        browser.pause(5000);
    }

);