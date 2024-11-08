import {NextResponse} from "next/server";

const apiUrl = process.env.API_URL ?? ''

export const maxDuration = 58;

export async function POST(req: Request) {
  const {messageId} = await req.json();
  try {
    const res = await fetch(`${apiUrl}/api/check-status`, {
      method: 'POST',
      body: JSON.stringify({messageId}),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (res.ok) {
      const json = await res.text()

      return NextResponse.json({data: json, error: null})
    } else {
      const json = await res.text()

      return NextResponse.json({error: 'something went wrong', data: json})
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return NextResponse.json({error: 'Something went wrong', data: null})
  }
}
