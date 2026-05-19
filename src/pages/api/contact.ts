import { Resend } from 'resend';
import { verifyTurnstile } from '@utils/turnstile';

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { firstname, lastname, email, subject, message, website } = data;
        const turnstileToken = data['cf-turnstile-response'];

        // Validation du pot de miel (honeypot)
        if (website) {
            return new Response(JSON.stringify({ error: 'Bot detected.' }), { status: 400 });
        }

        // Validation des champs requis
        if (!firstname || !lastname || !email || !subject || !message || !turnstileToken) {
            return new Response(JSON.stringify({ error: 'Tous les champs sont requis.' }), { status: 400 });
        }

        // Validation du captcha
        const isCaptchaValid = await verifyTurnstile(turnstileToken);
        if (!isCaptchaValid) {
            return new Response(JSON.stringify({ error: 'La vérification de sécurité a échoué.' }), { status: 400 });
        }

        const resend = new Resend(import.meta.env.RESEND_API_KEY);

        const { data: resData, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: [import.meta.env.PUBLIC_CONTACT_EMAIL || 'synbshop@gmail.com'],
            subject: `Portfolio - Nouveau message de contact : ${subject}`,
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
        const message = e instanceof Error ? e.message : 'Une erreur inconnue est survenue';
        return new Response(JSON.stringify({ error: message }), { status: 500 });
    }
}