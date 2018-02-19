import Blind from 'blind'

let encryptKey

export default class Ncryp {
  set key (key) {
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
