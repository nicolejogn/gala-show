import {NextResponse} from "next/server";

export async function POST(req: Request) {
  try {
    const {code} = await req.json()

    console.log('code', code)

    return NextResponse.json({error: null, data: code})
  } catch (e) {
    console.log('e', e)
    return NextResponse.json({error: 'Something went wrong', data: null})
  }
}
