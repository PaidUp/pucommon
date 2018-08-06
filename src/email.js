import sgMail from '@sendgrid/mail'

export default class Email {
  constructor (apiKey, from) {
    this.from = from
    sgMail.setApiKey(apiKey)
    sgMail.setSubstitutionWrappers('{{', '}}')
  }

  sendTemplate (to, templateId, substitutions) {
    const msg = {
      to,
      substitutions,
      from: this.from,
      templateId

    }
    sgMail.send(msg)
  }
}
