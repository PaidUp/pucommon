import Blind from 'blind'

export default class Ncryp {
  set key (key) {
    this.encryptKey = key
  }

  static encryptField (value) {
    let encrypted = new Blind({ encryptKey: this.encryptKey }).encrypt(value)
    return encrypted
  }

  static decryptField (encryptedValue) {
    var decrypted = new Blind({ encryptKey: this.encryptKey }).decrypt(encryptedValue)
    return decrypted
  }
}
