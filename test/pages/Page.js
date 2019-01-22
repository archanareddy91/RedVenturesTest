function open(urlPath) {
    
    browser.url(urlPath)
    console.log("Page Opened")
}

exports.openPage = open