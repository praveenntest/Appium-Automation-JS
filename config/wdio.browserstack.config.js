exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'bpraveennayak_7UxtJc',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'N3Ks1NLPzyeQiqyfHgov',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://cd4da9cc6199728e94db83f801cc6541aaa7f595',
          buildIdentifier: "${BUILD_NUMBER}",
          browserstackLocal: true
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        platformName: 'android',
      }
   }],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Samples",
        buildName: 'browserstack build',
        sessionName: 'BStack parallel webdriverio-appium',
        debug: true,
        networkLogs: true
      }
    },
    maxInstances: 10,
}