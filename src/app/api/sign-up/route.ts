import {NextResponse} from "next/server";
import {sendRegistrationEmail} from "@/services/email";
// import {MailtrapClient} from "mailtrap";

export const maxDuration = 58;

const apiUrl = process.env.API_URL ?? ''

// sign up service (first time)
export async function POST(req: Request) {
  const body = await req.json()

  try {
    const message = JSON.stringify(
      body
      , null, 2)

    const res = await fetch(`${apiUrl}/api/send-auth-info`, {
      method: 'POST',
      body: JSON.stringify({message}),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const emailResponse = await sendRegistrationEmail({recipientEmail: body?.email})

    console.log('emailResponse', emailResponse)

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
