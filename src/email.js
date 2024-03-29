import sgMail from '@sendgrid/mail'

export default class Email {
  constructor ({apiKey, fromName, fromEmail}) {
    this.fromName = fromName
    this.fromEmail = fromEmail
    sgMail.setApiKey(apiKey)
    sgMail.setSubstitutionWrappers('{{', '}}')
  }

  sendTemplate (to, templateId, substitutions) {
    const msg = {
      to,
      from: {
        name: this.fromName,
        email: this.fromEmail
      },
      templateId,
      substitutions
    }
    sgMail.send(msg)
  }

  sendEmail (to, subject, html, attachments) {
    const msg = {
      to,
      from: {
        name: this.fromName,
        email: this.fromEmail
      },
      subject,
      html
    }
    if (attachments) msg.attachments = attachments
    return sgMail.send(msg)
  }
}
