const { randomNumber } = require('./random-number')
const { deepEqual } = require('assert')

describe('random-number.js', () => {
  describe('#randomNumber', () => {
    it('should return a randomNumber cmd', () => {
      const expected = { type: 'randomNumber' }
      const actual = randomNumber()
      deepEqual(actual, expected)
    })
  })
})
