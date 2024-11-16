import formData from 'form-data';
import Mailgun from 'mailgun.js';
import {getSingUpTemplate} from "@/email-templates/sign-up-template";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
});


const env = process.env.NODE_ENV
const redirectLink = env == "production" ? "https://www.games-gala.com?wallet=yes" : "http://localhost:3000?wallet=yes"

const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export const sendEmailMailgun = async ({to, subject,}: { to: string; subject: string; }) => {

  const template = getSingUpTemplate({redirectLink});

  try {
    const response = await mg.messages.create(DOMAIN, {
      from: 'notifications@yourdomain.com',
      to,
      subject,
      html: template,
    });

    return {data: response, error: null};
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {error: error.message, data: null};
    }
  }
};
