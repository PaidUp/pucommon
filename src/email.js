import sgMail from '@sendgrid/mail'

export default class Email {
  constructor (apiKey, fromName, fromEmail) {
    this.fromName = fromName
    this.fromEmail = fromEmail
    sgMail.setApiKey(apiKey)
  }

  sendTemplate (to, templateId, substitutions) {
    const msg = {
      to,
      from: {
        email: this.fromEmail,
        name: this.name
      },
      template_id: templateId,
      substitutions
    }
    sgMail.send(msg)
  }
}
