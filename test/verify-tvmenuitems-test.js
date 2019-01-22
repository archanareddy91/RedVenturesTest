/*
    Test case to validate the following,
    1. Check the sub menu items available for TV menu.
*/

const assert = require('assert')
var homePage = require('./pages/HomePage')

describe('Validate Frontier Internet Service, TV Menu item',() => {
    before(function() {
        homePage.openHomePage(undefined);
    })
    

    it('Verify the plans and pricing', () => {
        var plans =["FiOS TV","Vantage TV"];

        $('//a[text()="TV"]').moveTo();

        console.log($$('//*[@id="menu-item-4440"]/ul/li').length)


        i = 1;
        len = $$('//*[@id="menu-item-4440"]/ul/li').length
        console.log('eleements length:',len)
        
        $$('//*[@id="menu-item-4440"]/ul/li').forEach(
            
            () => {
                if (i <= len) {
                    console.log($('//*[@id="menu-item-4440"]/ul/li['+i+']').getText())
                    assert.equal($('//*[@id="menu-item-4440"]/ul/li['+i+']').getText(),plans[i-1]);
                    i = i+1;
                }
            }
        );
        
       
    });

    browser.pause(5000);
}

);