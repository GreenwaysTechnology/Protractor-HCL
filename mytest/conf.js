exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/hello.spec.js'],
    // capabilities: {
    //     'browserName': 'chrome',
    //     'chromeOptions': {
    //         'args': ["--headless", "--disable-gpu", "--window-size=800,600"]
    //      }
    //  }
    multiCapabilities: [{
        'browserName': 'chrome'
     },{
        'browserName': 'firefox'
     }],
     onPrepare: function(){ //configure junit xml report

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
           consolidateAll: true,
           filePrefix: 'guitest-xmloutput',
           savePath: 'tests/reports'
        }));
    }
 }