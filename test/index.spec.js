/* global describe, it, before */

import chai from 'chai'
import { Email } from '../lib/library.js'

chai.expect()

// const expect = chai.expect

// let lib

describe('Email', () => {
  before(() => {
  })
  describe('Send template', () => {
    it.skip('should return the name', (done) => {
      const email = new Email('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', 'Felipe', 'felipe@getpaidup.com')
      email.sendTemplate('riclara@gmail.com', 'e6be06bd-d125-4dd6-914d-2085f2382441', {
        orgName: 'Org Name',
        userFirstName: 'Ricardo',
        beneficiaryFirstName: 'Juan',
        beneficiaryLastName: 'Lara',
        productName: 'Product Name'
      })
      done()
    })
  })
})
