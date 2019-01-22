/*
    Test case to validate the following,
    1. Check the tool tip of the menu item.
*/

const assert = require('assert')
var homePage = require('./pages/HomePage')

describe('Validate Frontier Internet Service, tooltip of menu item.',() => {
    before(function() {
        homePage.openHomePage(undefined);
    }) 

    it('Verify the plans and pricing', () => {
        var plans =["FiOS TV","Vantage TV"];
        var expectedTitle = 'Home Phone Service'
        var actualTitle = $('//a[text()="Phone"]').getAttribute('title')
        console.log(actualTitle)
        assert.equal(actualTitle,expectedTitle)
    });

    browser.pause(5000);
}

);