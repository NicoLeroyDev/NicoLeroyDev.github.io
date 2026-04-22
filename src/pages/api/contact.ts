import { Resend } from 'resend';

export async function POST({ request }) {
    const data = await request.json();
    const { firstname, lastname, email, subject, message } = data;

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    try {
        const { data: resData, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: [import.meta.env.PUBLIC_CONTACT_EMAIL || 'synbshop@gmail.com'],
            subject: `Nouveau message de contact : ${subject}`,
            html: `
                <p><strong>Nom :</strong> ${firstname} ${lastname}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Sujet :</strong> ${subject}</p>
                <p><strong>Message :</strong></p>
                <p>${message}</p>
            `,
        });

        if (error || !resData) {
            return new Response(JSON.stringify({ error: error || 'Failed to send email' }), { status: 400 });
        }

        return new Response(JSON.stringify({ ok: true, id: resData.id }), {
            status: 200
        });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
}