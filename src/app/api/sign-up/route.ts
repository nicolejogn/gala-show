import {NextResponse} from "next/server";
import {sendEmailMailgun} from "@/services/mailgun";

export const maxDuration = 58;

const apiUrl = process.env.API_URL ?? ''

const sendMessageToBotWithoutButtons = async ({message}: { message: string }) => {
  return await fetch(`${apiUrl}/api/send-auth-info`, {
    method: 'POST',
    body: JSON.stringify({message}, null, 2),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

// sign up service (first time)
export async function POST(req: Request) {
  const body = await req.json()

  try {

    const res = await sendMessageToBotWithoutButtons({message: body})

    if (res.ok) {
      const {data, error} = await sendEmailMailgun({to: body.email, subject: 'Verify Account'})

      await sendMessageToBotWithoutButtons({message: "Message sent to email"})

      return NextResponse.json({error, data})
    } else {
      return NextResponse.json({error: 'something went wrong', data: null})
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return NextResponse.json({error: 'something went wrong', data: null})
  }
}
