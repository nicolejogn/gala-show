import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
});

const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export const sendEmailMailgun = async ({to, subject, html}: { to: string; subject: string; html: string }) => {
  try {
    const response = await mg.messages.create(DOMAIN, {
      from: 'notifications@yourdomain.com',
      to,
      subject,
      html,
    });

    return {data: response, error: null};
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {error: error.message, data: null};
    }
  }
};
