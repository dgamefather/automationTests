module.exports = {
    before: browser => {
        browser
            .url('https://alpha.yoodlize.com/')
    },
    after: browser => {
        browser
            .end();
    },
    'Navigation: See All': browser => {
        browser
            .useXpath();
        for (var x = 1; x <= 15; x++) {
            browser
                .waitForElementPresent('(//div[@class="sc-bwzfXH sc-iQNlJl cuvCCm sc-bdVaJa isrEgr"])')
                .click(`(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[${x}]`)
                .pause(2000)
                .verify.visible('(//div[@class="sc-jKVCRD jSqgxr"])')
                .back();
        }
    },
    'Navigation: Browse Categories': browser => {
        browser
            .useXpath();
        var category = ["TOOLS", "OUTDOOR", "ELECTRONICS", "PARTY", "RECREATIONAL", "CLOTHING", "HOME", "TOYS", "LAWN", "SPORTING", "VENUES", "MUSIC", "MISC"]
        for (var x = 0; x < category.length; x++) {
            browser
                .waitForElementPresent('(//div[@class="sc-bwzfXH sc-iQNlJl cuvCCm sc-bdVaJa isrEgr"])')
                .click(`(//div[contains(text(), "${category[x]}")])[2]`)
                .pause(2000)
                .verify.visible('(//div[@class="sc-jKVCRD jSqgxr"])')
                .back();
        }
        browser
            .waitForElementPresent('(//div[@class="sc-bwzfXH sc-iQNlJl cuvCCm sc-bdVaJa isrEgr"])')
            .click('(//div[contains(text(), "DVDS")])')
            .pause(2000)
            .verify.visible('(//div[@class="sc-jKVCRD jSqgxr"])')
            .back();
    },
    'Search Item': browser => {
        browser
            .useXpath()
            .waitForElementPresent('(//div[@class="sc-bwzfXH sc-iQNlJl cuvCCm sc-bdVaJa isrEgr"])')
            .setValue('//input', ['Steam Controller', browser.Keys.ENTER])
            .pause(2000)
            .verify.visible('(//div[@class="sc-jKVCRD jSqgxr"])')
    },
}