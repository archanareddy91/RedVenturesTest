const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'error',
        path: '/wd/hub',
        capabilities: {
            browserName: 'chrome'
        }
    });

    await browser.url('http://www.google.com');

    const title = await browser.getTitle();
    console.log('Title was: ' + title);

    await browser.deleteSession();
})().catch((e) => console.error(e));