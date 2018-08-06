import sgMail from '@sendgrid/mail'

export default class Email {
  constructor (apiKey, fromName, fromEmail) {
    this.fromName = fromName
    this.fromEmail = fromEmail
    sgMail.setApiKey(apiKey)
  }

  sendTemplate (toName, toEmail, templateId, substitutions) {
    const msg = {
      personalizations: [
        {
          to: [
            {
              email: toEmail,
              name: toName
            }
          ],
          // 'subject': subject,
          substitutions
        }
      ],
      from: {
        email: this.fromEmail,
        name: this.name
      },
      template_id: templateId

    }
    sgMail.send(msg)
  }
}
