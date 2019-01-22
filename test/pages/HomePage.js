var openPage = require('./Page')
var homePageUrl = "https://internet.frontier.com/"
function openHomePage () {
    console.log("Opening the home page...")
    openPage.openPage(homePageUrl)
    $('#js-track-nav-shop-online').waitForDisplayed(30000)
    
}

exports.openHomePage = openHomePage