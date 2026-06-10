// generate-report.js

const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports/json',
  reportPath: 'reports/html-report',
  metadata: {
    browser: {
      name: 'multiple',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: process.platform,
      version: process.version
    }
  },
  customData: {
    title: 'Reporte de Automatización',
    data: [
      { label: 'Proyecto', value: 'Playwright + Cucumber + POM' },
      { label: 'Framework', value: 'Playwright' },
      { label: 'Runner', value: 'Cucumber JS' },
      { label: 'Reporte', value: 'Multiple Cucumber HTML Reporter' }
    ]
  }
});
