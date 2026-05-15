import crypto from 'node:crypto';

const SECRET = import.meta.env.CAPTCHA_SECRET || 'default-secret-key-12345';

/**
 * Génère un défi mathématique simple et un jeton de validation.
 */
export function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    const sum = num1 + num2;
    
    const timestamp = Date.now();
    const data = `${sum}:${timestamp}`;
    const hash = crypto.createHmac('sha256', SECRET).update(data).digest('hex');
    
    return {
        num1,
        num2,
        token: `${hash}.${timestamp}`
    };
}

/**
 * Vérifie si la réponse fournie correspond au jeton.
 */
export function verifyCaptcha(answer: string | number, token: string) {
    if (!answer || !token) return false;
    
    const [hash, timestamp] = token.split('.');
    if (!hash || !timestamp) return false;
    
    // Vérification de l'expiration (15 minutes)
    const now = Date.now();
    const tokenTime = parseInt(timestamp, 10);
    if (isNaN(tokenTime) || now - tokenTime > 15 * 60 * 1000) {
        return false;
    }
    
    const expectedData = `${answer}:${timestamp}`;
    const expectedHash = crypto.createHmac('sha256', SECRET).update(expectedData).digest('hex');
    
    return expectedHash === hash;
}
