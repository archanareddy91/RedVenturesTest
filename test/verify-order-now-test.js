/*
    Test case to validate the following,
    1. Check for the availability of order now button in the HomePage
    2. Check the plans that get displayed for order now.
*/

var assert = require('assert');
var homePage = require('./pages/HomePage');

describe('Validate Frontier Internet Service, Order Now functionality',() => {
    
    before(function() {
        homePage.openHomePage(undefined);
    })

    it('Check the order now link availability.', () => {
        $('a[href="/cart"]').waitForDisplayed(30000)
        assert.equal($('a[href="/cart"]').isEnabled(),true)
    });

    it('Click and check the order now button.', () => {
        $('a[href="/cart"]').waitForDisplayed(30000)
        assert.equal($('a[href="/cart"]').isEnabled(),true)
        $('a[href="/cart"]').click()
        $('#js-track-wp-hero-button').waitForDisplayed(20000)
        assert.equal($('#js-track-wp-hero-button').isEnabled(),true)
    });

    it('Should display the plans.', () => {
        $('#js-track-wp-hero-button').click()
        $('//div[@data-preamp="pricing-grid"]/div/div/div[1]/div').waitForDisplayed(20000)
       
        i = 1;
        len = $$('//div[@data-preamp="pricing-grid"]/div/div/div[1]/div/div').length 
        console.log('eleements length:',len)
        
        $$('//div[@data-preamp="pricing-grid"]/div/div/div[1]/div/div').forEach(
            
            () => {
                if (i <= len) {
                    assert.equal($('//div[@data-preamp="pricing-grid"]/div/div/div[1]/div/div['+i+']//a[@id="js-track-plans-pricing-button-'+i+'"]').isDisplayed(),true)
                    i = i+1;
                }
            }
        );
        
    });
  
    browser.pause(5000);
}

);