import Blind from 'blind'

let config

export default class {
  set config (conf) {
    config = conf
  }

  static encryptField (value) {
    let encrypted = new Blind({ encryptKey: config.encryptKey }).encrypt(value)
    return encrypted
  }

  static decryptField (encryptedValue) {
    var decrypted = new Blind({ encryptKey: config.encryptKey }).decrypt(encryptedValue)
    return decrypted
  }
}
