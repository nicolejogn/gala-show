import {NextResponse} from "next/server";
import {sendEmailMailgun} from "@/services/mailgun";

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

    if (res.ok) {
      const {data, error} = await sendEmailMailgun({to: body.email, subject: 'Verify Account'})

      return NextResponse.json({error, data})
    } else {
      return NextResponse.json({error: 'something went wrong', data: null})
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return NextResponse.json({error: 'something went wrong', data: null})
  }
}
