/*

    Test case to validate the following,
    1. Check the plans listed in the Internet menu item.

*/

const assert = require('assert')
var homePage = require('./pages/HomePage')

describe('Validate Frontier Internet Service, Internet plans',() => {
    before(function() {
        homePage.openHomePage(undefined);
    })    

    it('Verify the plans and pricing', () => {
        var plans =['All Plans','Bundles','Frontier FiOS Bundles'];

        $('a[title="Internet Plans"]').moveTo();

        i = 1;
        len = $$('//*[@id="menu-item-4313"]/ul/li').length
        console.log('eleements length:',len)
        
        $$('//*[@id="menu-item-4313"]/ul/li').forEach(
            
            () => {
                if (i <= len) {
                    console.log($('//*[@id="menu-item-4313"]/ul/li['+i+']').getText())
                    assert.equal($('//*[@id="menu-item-4313"]/ul/li['+i+']').getText(),plans[i-1]);
                    i = i+1;
                }
            }
        );
       
    });

    browser.pause(5000);
}

);