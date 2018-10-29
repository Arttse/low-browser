const describeFixturesTests = require('./helpers/describe-fixtures-tests')
const m = require('../dist/low-browser.umd')
const fixtures = require('./fixtures/microsoft-edge')

describe('Microsoft Edge', function () {
  describeFixturesTests(m, fixtures)
})
