import sgMail from '@sendgrid/mail'

export default class Email {
  constructor (apiKey, fromName, fromEmail) {
    this.fromName = fromName
    this.fromEmail = fromEmail
    sgMail.setApiKey(apiKey)
    sgMail.setSubstitutionWrappers('{{', '}}')
  }

  sendTemplate (to, templateId, substitutions) {
    const msg = {
      to,
      substitutions,
      from: {
        email: this.fromEmail,
        name: this.name
      },
      template_id: templateId

    }
    sgMail.send(msg)
  }
}
