export function getEducationData(lang: string) {
    const contentFr = {
        'label': 'Opquast - Maîtrise de la qualité en projet web - V4',
        'startDateString': 'février 2021',
        'endDateString': 'mars 2021',
        'description': 'Maîtrise de la qualité en projet web - Socle de règles, de compétences et de vocabulaire multidisciplinaires (référencement, sécurité, accessibilité, données personnelles, performance, écoconception, e-commerce)',
        'complementary': '883/1000',
        'location': 'Opquast',
    }

    const contentEn = {
        'label': 'Opquast - Web project quality management - V4',
        'startDateString': 'february 2021',
        'endDateString': 'march 2021',
        'description': 'Web project quality management - Multidisciplinary base of rules, skills and vocabulary (SEO, security, accessibility, personal data, performance, eco-design, e-commerce)',
        'complementary': '883/1000',
        'location': 'Opquast',
    }

    return lang === 'en' ? contentEn : contentFr;
}