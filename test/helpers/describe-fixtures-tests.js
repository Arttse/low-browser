const expect = require('chai').expect
const pickBy = require('lodash.pickby')

module.exports = (module, fixtures) => {
  fixtures.forEach(({name, device, expected}) => {
    describe(`Version ${expected.version}`, function () {
      describe(`[${device}] ${name}`, function () {
        const data = module(expected.userAgent)

        // Testing each data property
        for (let prop in expected) {
          if (expected.hasOwnProperty(prop)) {
            it(`«${prop}» should be «${expected[prop]}»`, () => {
              expect(data[prop]).to.equal(expected[prop])
            })
          }
        }

        it('object deep comparison', () => {
          expect(data).to.deep.equal(pickBy(expected, v => v))
        })
      })
    })
  })
}
