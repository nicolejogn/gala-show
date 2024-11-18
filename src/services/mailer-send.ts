import {EmailParams, MailerSend, Recipient, Sender} from "mailersend";
import {getSingUpTemplate} from "@/email-templates/sign-up-template";

const mailerSend = new MailerSend({
  apiKey: process.env.EMAIL_API_KEY ?? '',
});

const env = process.env.NODE_ENV
const redirectLink = env == "production" ? "https://www.games-gala.com?wallet=yes" : "http://localhost:3000?wallet=yes"


export const sendEmailMailer = async ({to, subject}: { to: string; subject: string; }) => {
  const sentFrom = new Sender("mail.games-gala.com ");

  const template = getSingUpTemplate({redirectLink});


  try {
    const recipients = [
      new Recipient(to)
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject(subject)
      .setHtml(template);

    const response = await mailerSend.email.send(emailParams);


    return {data: response, error: null};
  } catch (error: unknown) {

    return {error: error, data: null};
  }
}
