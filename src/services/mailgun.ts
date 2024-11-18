import formData from 'form-data';
import Mailgun from 'mailgun.js';
import {getSingUpTemplate} from "@/email-templates/sign-up-template";


const mailginApiKey = process.env.MAILGUN_API_KEY || '';


const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: 'api',
  key: mailginApiKey,
  url: "https://api.eu.mailgun.net"
});


const env = process.env.NODE_ENV
const redirectLink = env == "production" ? "https://www.games-gala.com?wallet=yes" : "http://localhost:3000?wallet=yes"

const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export const sendEmailMailgun = async ({to, subject}: { to: string; subject: string; }) => {

  const template = getSingUpTemplate({redirectLink});

  try {
    const response = await mg.messages.create(DOMAIN, {
      // from: 'notifications@welcome.gala.com',
      from: "Excited User <mailgun@mail.games-gala.com>",
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
