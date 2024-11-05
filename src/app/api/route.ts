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

function getOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
};


const getTemplate = (email: string, otp: string) => {
  return (
    `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Attempted from New IP Address</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #232426;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 500px;
            margin: 40px auto;
            padding: 20px;
            background-color: #121212;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header img {
            width: 50px;
        }
        .content h2 {
            color: #DEDEDE;
        }
        
        .content p {
			color: #76757B;
}
        .details {
            margin: 20px 0;
            font-size: 16px;
            color: #555;
        }
        .code {
            font-size: 24px;
            font-weight: bold;
            color: white;
            text-align: left;
            margin: 20px 0;
        }
        .footer {
            font-size: 14px;
            color: #777;
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://static.gala.games/auth0/gala-logo-white-512x512.png" alt="Gala Logo" />
        </div>
        <div class="content">
            <h2>Login Attempted from New IP Address</h2>
            <p>We've noticed that you accessed your account from an unrecognized IP address.</p>
            
            
            <div class="details">
                <p><strong>Email:</strong> ${email}</p>
            </div>
             <p>Here is your authorisation code</p>
            <div class="code">
              ${otp}
            </div>
        </div>
        <div class="footer">
            <p>Thanks,</p>
            <p>Gala Support Team</p>
        </div>
    </div>
</body>
</html>
    `
  )
}

export async function POST(req: Request) {
  const {email,} = await req.json()


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
        subject: "Gala Games - OTP Verification",
        html: getTemplate(email, getOtp()),
      })

    console.log('res', res)
    return NextResponse.json({error: null, data: 'success'})
  } catch (e) {
    console.log('e', e)
    return NextResponse.json({error: 'Something went wrong', data: null})
  }
}
