/*
    Test case to validate the following,
    1. To check the sub-menu items getting listed for Plans and Pricing Menu,
*/

const assert = require('assert')
var homePage = require('./pages/HomePage')

describe('Validate Frontier Internet Service, MyAccount functionality',() => {
    

    before(function() {
        homePage.openHomePage(undefined);
     });
    

    it('Verify the plans and pricing sub-menu items', () => {
        var plans =["High Speed Internet","FiOS Internet","Wireless Services"];

        $('//a[text()="Internet"]').moveTo();

        console.log($$('//*[@id="menu-item-4314"]/ul/li').length)

        i = 1;
        len = $$('//*[@id="menu-item-4314"]/ul/li').length
        console.log('eleements length:',len)
        
        $$('//*[@id="menu-item-4314"]/ul/li').forEach(
            
            () => {
                if (i <= len) {
                    console.log($('//*[@id="menu-item-4314"]/ul/li['+i+']').getText())
                    assert.equal($('//*[@id="menu-item-4314"]/ul/li['+i+']').getText(),plans[i-1]);
                    i = i+1;
                }
            }
        );
       
    });
    browser.pause(5000);
}

);