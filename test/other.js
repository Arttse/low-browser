const expect = require('chai').expect
const pickBy = require('lodash.pickby')
const m = require('../dist/low-browser.umd')

describe('Other', function () {
  describe('check first function argument type', function () {
    it('undefined', function () {
      expect(() => m(undefined)).to.throw(TypeError)
    })

    it('null', function () {
      expect(() => m(null)).to.throw(TypeError)
    })

    it('boolean#true', function () {
      expect(() => m(true)).to.throw(TypeError)
    })

    it('boolean#false', function () {
      expect(() => m(false)).to.throw(TypeError)
    })

    it('string#empty', function () {
      expect(() => m('')).to.not.throw()
    })

    it('string', function () {
      expect(() => m('some user agent')).to.not.throw()
    })

    it('number#integer', function () {
      expect(() => m(123)).to.throw(TypeError)
    })

    it('number#float', function () {
      expect(() => m(123.0987)).to.throw(TypeError)
    })

    it('number#NaN', function () {
      expect(() => m(NaN)).to.throw(TypeError)
    })

    it('array:empty', function () {
      expect(() => m([])).to.throw(TypeError)
    })

    it('array', function () {
      expect(() => m([1, '2', [], [1, '2'], undefined, null, true])).to.throw(TypeError)
    })

    it('plain object:empty', function () {
      expect(() => m({})).to.throw(TypeError)
    })

    it('plain object', function () {
      expect(() => m({a: 1, b: null, c: undefined, d: [], e: {foo: true, bar: false}})).to.throw(TypeError)
    })

    it('function', function () {
      expect(() => m(() => console.log('test'))).to.throw(TypeError)
    })

    it('symbol', function () {
      expect(() => m(Symbol())).to.throw(TypeError)
    })
  })

  describe('check returned data when first argument is empty', function () {
    const data = m('')
    const expected = {
      userAgent: '',
      name: undefined,
      version: undefined,
      core: undefined,
      coreVersion: undefined,
      os: undefined,
      osBuild: undefined,
      gamePlatform: undefined
    }

    // Testing each data property
    for (let prop in expected) {
      if (expected.hasOwnProperty(prop)) {
        it(`«${prop}» should be «${expected[prop]}»`, () => {
          expect(data[prop]).to.equal(expected[prop])
        })
      }
    }

    it('object deep comparison', () => {
      expect(data).to.deep.equal(pickBy(expected, (v, k) => k === 'userAgent' && v === '' ? true : v))
    })
  })
})
