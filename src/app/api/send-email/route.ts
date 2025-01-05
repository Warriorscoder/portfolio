import { Resend } from 'resend';
import VerificationEmail from '../../../../email/VerificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request) {
    const { name, message } = await request.json();
    // console.log(email, name, verifyCode);

    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: "codeaniket123@gmail.com",
            subject: `Portfolio Message | ${name}`,
            react: VerificationEmail({ name, message }),
        });

        return new Response(
            JSON.stringify({
                success: true,
                message: "Message sent successfully"
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({
                success: false,
                message: "Failed to send email"
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
