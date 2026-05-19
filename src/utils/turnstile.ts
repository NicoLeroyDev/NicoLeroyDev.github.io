export async function verifyTurnstile(token: string) {
    const SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY;
    
    if (!SECRET_KEY) {
        console.error('TURNSTILE_SECRET_KEY is not defined');
        return false;
    }

    const formData = new FormData();
    formData.append('secret', SECRET_KEY);
    formData.append('response', token);

    try {
        const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            body: formData,
            method: 'POST',
        });

        const outcome = await result.json();
        return outcome.success;
    } catch (error) {
        console.error('Turnstile verification error:', error);
        return false;
    }
}
