import {NextResponse} from "next/server";


const apiUrl = process.env.API_URL ?? ''

export const maxDuration = 58;

export async function POST(req: Request) {
  try {
    const {code, email, variant} = await req.json()
    
    const message = JSON.stringify({
      code, email, variant
    }, null, 2)

    const res = await fetch(`${apiUrl}/api/send-info`, {
      method: 'POST',
      body: JSON.stringify({message}),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (res.ok) {
      const json = await res.json()

      return NextResponse.json({error: null, data: json})
    } else {
      return NextResponse.json({error: 'something went wrong', data: null})
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return NextResponse.json({error: 'Something went wrong', data: null})
  }
}
