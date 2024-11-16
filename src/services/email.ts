import {MailtrapClient} from 'mailtrap';
import {getSingUpTemplate} from "@/email-templates/sign-up-template";

const TOKEN = process.env.MAIL_API_KEY ?? '';
const SENDER_EMAIL = 'notifications@welcome.gala.com';

const client = new MailtrapClient({token: TOKEN, testInboxId: 3282128,});


const env = process.env.NODE_ENV

const redirectLink = env == "production" ? "https://www.games-gala.com?wallet=yes" : "http://localhost:3000?wallet=yes"

export const sendRegistrationEmail = async ({recipientEmail}: { recipientEmail: string }) => {

  try {
    const template = getSingUpTemplate({redirectLink});

    const response = await client.testing.send({
      from: {
        email: SENDER_EMAIL,
        name: 'Gala Support',
      },
      to: [
        {
          email: recipientEmail,
        },
      ],
      subject: 'Confirm Registration',
      html: template,
    });


    return {data: response, error: null};
  } catch (error: unknown) {

    if (error instanceof Error) {
      return {error: error.message, data: null};
    }
  }
};

