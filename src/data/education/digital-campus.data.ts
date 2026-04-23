export function getEducationData(lang: string) {
    const contentFr = {
        'label': 'Bachelor Chef de Projet Digital',
        'startDateString': 'septembre 2015',
        'endDateString': 'juillet 2016',
        'description': 'Bachelor Chef de Projet Digital - Gestion de projet, Webdesign, Développement, SEO, Stratégie Digitale, etc...',
        'complementary': 'Major de promo',
        'location': 'Digital Campus, Lyon (69)',
    }

    const contentEn = {
        'label': 'Digital Project Manager Bachelor',
        'startDateString': 'september 2015',
        'endDateString': 'july 2016',
        'description': 'Digital Project Manager Bachelor - Project Management, Webdesign, Development, SEO, Digital Strategy, etc...',
        'complementary': 'Top of the class',
        'location': 'Digital Campus, Lyon (69)',
    }

    return lang === 'en' ? contentEn : contentFr;
}