/* global describe, it, before */

import chai from 'chai'
import { Sequence } from '../lib/library.js'

chai.expect()

// const expect = chai.expect

// let lib

describe('Given an instance of my Calculations library', () => {
  before(() => {
    Sequence.setConfig({
      functionName: 'sequence-dev:2',
      db: '1',
      host: 'develop.rd7ge9.ng.0001.use1.cache.amazonaws.com',
      port: '6379'
    })
    for (let index = 0; index < 10; index++) {
      Sequence.next('invoice2').then(seq => {
        console.log('index: ' + index + 'SEQ: ', seq)
      })
    }
  })
  describe('when I need the name', () => {
    it.skip('should return the name', (done) => {
      console.log('avut: ', Sequence)
    })
  })
})
