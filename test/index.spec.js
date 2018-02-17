/* global describe, it, before */

import chai from 'chai'
// import {Calculations} from '../lib/library.js'

chai.expect()

const expect = chai.expect

let lib

describe('Given an instance of my Calculations library', () => {
  before(() => {
    // lib = new Calculations()
  })
  describe('when I need the name', () => {
    it.skip('should return the name', () => {
      expect(lib.name).to.be.equal('Cat')
    })
  })
})
