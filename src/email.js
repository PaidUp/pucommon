import sgMail from '@sendgrid/mail'

export default class Email {
  constructor (apiKey) {
    sgMail.setApiKey(apiKey)
  }

  sendTemplate (to, templateId, substitutions) {
    const msg = {
      to,
      template_id: templateId,
      substitutions
    }
    sgMail.send(msg)
  }
}
