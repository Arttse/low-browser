const describeFixturesTests = require('./helpers/describe-fixtures-tests')
const m = require('../dist/low-browser.umd')
const fixtures = require('./fixtures/internet-explorer')

describe('Internet Explorer', function () {
  describeFixturesTests(m, fixtures)
})
