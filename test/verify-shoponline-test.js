/*
    Test case to validate the following,
    1. Check the shoponline cart button.
    2. Check the availability of the service, for particular location.
*/


var assert = require('assert')
var homePage = require('./pages/HomePage');

describe('Validate Frontier Internet Service, Shoponline functionality',() => {
    before(function() {
        homePage.openHomePage(undefined);
    })

    it('Clicking shoponline button should open the cart page.', () => {
        $('#js-track-nav-shop-online').waitForDisplayed(30000)
        $('#js-track-nav-shop-online').click();
        $('#address').waitForDisplayed();
        assert.equal($('button[form="address-form"]').isEnabled(),false)
    });

    it('Checking the availability of the service.', () => {
        var address = '4418 Hamilton Ave'
        $('#address').setValue(address)
        assert.equal($('button[form="address-form"]').isEnabled(),true)
        $('button[form="address-form"]').click()
        $('button[class="box button button--primary"]').waitForDisplayed(30000)
        assert.equal($('h1[class="headline-primary"]').getText(),"Looks like Frontier Internet isn't available in your area.")
        
    });

    browser.pause(5000);
}

);