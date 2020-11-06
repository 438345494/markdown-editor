const assert = require('assert')
import {isObj } from '../../utils/tools'

describe('tools.js', () => {
  describe('isObj', () => {
    it('Obj("") should return false', () => {
      assert.strictEqual(isObj(""), false)
    })
  })
})