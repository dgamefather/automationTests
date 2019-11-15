module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        pageItself: {
            selector: '(//div[@class="sc-bwzfXH sc-iQNlJl cuvCCm sc-bdVaJa isrEgr"])',
            locateStrategy: 'xpath'
        },
        seeAllX: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]',
            locateStrategy: 'xpath'
        },
        seeAllY: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]',
            locateStrategy: 'xpath'
        },
        seeAllZ: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]',
            locateStrategy: 'xpath'
        },
        catX: {
            selector: '(//div[contains(text(), "ELECTRONICS")])[2]',
            locateStrategy: 'xpath'
        },
        catY: {
            selector: '(//div[contains(text(), "DVDS")])',
            locateStrategy: 'xpath'
        },
        catZ: {
            selector: '(//div[contains(text(), "TOYS")])[2]',
            locateStrategy: 'xpath'
        },
        searchBard: {
            selector: '(//input)',
            locateStrategy: 'xpath'
        },
        filterPlz: {
            selector: '(//div[@class="sc-jKVCRD jSqgxr"])',
            locateStrategy: 'xpath'
        },
    }
}