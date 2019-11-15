var yolo = {}
module.exports = {
    beforeEach: browser => {
        // browser
        yolo = browser.page.yoodlizePage();
        yolo
            .navigate();
    },
    after: browser => {
        // browser
        yolo
            .end();
    },
    'Navigation: See All X': browser => {
        yolo
            .waitForElementPresent('@pageItself')
            .click('@seeAllX')
            .verify.visible('@filterPlz');
    },
    'Navigation: See All Y': browser => {
        yolo
            .waitForElementPresent('@pageItself')
            .click('@seeAllY')
            .verify.visible('@filterPlz');
    },
    'Navigation: See All Z': browser => {
        yolo
            .waitForElementPresent('@pageItself')
            .click('@seeAllZ')
            .verify.visible('@filterPlz');
    },
    'Navigation: Category X': browser => {
        yolo
            .waitForElementPresent('@pageItself')
            .click('@catX')
            .verify.visible('@filterPlz');
    },
    'Navigation: Category Y': browser => {
        yolo
            .waitForElementPresent('@pageItself')
            .click('@catY')
            .verify.visible('@filterPlz');
    },
    'Navigation: Category Z': browser => {
        yolo
            .waitForElementPresent('@pageItself')
            .click('@catZ')
            .verify.visible('@filterPlz');
    },
    'Search Item': browser => {
        yolo
            .waitForElementPresent('@pageItself')
            .setValue('@searchBard', ['Steam Controller', browser.Keys.ENTER])
            .verify.visible('@filterPlz');
    },

    // Lesson 8
    // 'Navigation: See All': browser => {
    //     browser
    //         .useXpath();
    //     for (var x = 1; x <= 15; x++) {
    //         browser
    //             .waitForElementPresent('(//div[@class="sc-bwzfXH sc-iQNlJl cuvCCm sc-bdVaJa isrEgr"])')
    //             .click(`(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[${x}]`)
    //             .verify.visible('(//div[@class="sc-jKVCRD jSqgxr"])')
    //             .back();
    //     }
    // },
    // 'Navigation: Browse Categories': browser => {
    //     browser
    //         .useXpath();
    //     var category = ["TOOLS", "OUTDOOR", "ELECTRONICS", "PARTY", "RECREATIONAL", "CLOTHING", "HOME", "TOYS", "LAWN", "SPORTING", "VENUES", "MUSIC", "MISC"]
    //     for (var x = 0; x < category.length; x++) {
    //         browser
    //             .waitForElementPresent('(//div[@class="sc-bwzfXH sc-iQNlJl cuvCCm sc-bdVaJa isrEgr"])')
    //             .click(`(//div[contains(text(), "${category[x]}")])[2]`)
    //             .verify.visible('(//div[@class="sc-jKVCRD jSqgxr"])')
    //             .back();
    //     }
    //     browser
    //         .waitForElementPresent('(//div[@class="sc-bwzfXH sc-iQNlJl cuvCCm sc-bdVaJa isrEgr"])')
    //         .click('(//div[contains(text(), "DVDS")])')
    //         .verify.visible('(//div[@class="sc-jKVCRD jSqgxr"])')
    //         .back();
    // },
    // 'Search Item': browser => {
    //     browser
    //         .useXpath()
    //         .waitForElementPresent('(//div[@class="sc-bwzfXH sc-iQNlJl cuvCCm sc-bdVaJa isrEgr"])')
    //         .setValue('//input', ['Steam Controller', browser.Keys.ENTER])
    //         .verify.visible('(//div[@class="sc-jKVCRD jSqgxr"])')
    // },
}