import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.NEXT_PUBLIC_URL_EMAIL_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    const recipient = process.env.NEXT_PUBLIC_URL_EMAIL_USER || "aniketbharane2004@gmail.com"

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email,
      subject: `New portfolio contact from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height:1.6">
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: error.message || "Failed to send message" },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Contact error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
