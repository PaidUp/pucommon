import Blind from 'blind'

let encryptKey

export default class Ncryp {
  static setKey (key) {
    encryptKey = key
  }

  static encryptField (value) {
    let encrypted = new Blind({ encryptKey }).encrypt(value)
    return encrypted
  }

  static decryptField (encryptedValue) {
    var decrypted = new Blind({ encryptKey }).decrypt(encryptedValue)
    return decrypted
  }
}
