export function getExperienceData(lang: string) {
    const relatedTools = [];

    const contentFr = {
        'position': 'Opérateur en Production',
        'contractType': 'Intérim',
        'isCurrent': false,
        'startDateString': 'janvier 2013',
        'endDateString': 'août 2014',
        'website': '',
        'contents': [],
    };

    const contentEn = {
        'position': 'Production Operator',
        'contractType': 'Temporary contract',
        'isCurrent': false,
        'startDateString': 'january 2013',
        'endDateString': 'august 2014',
        'website': '',
        'contents': [],
    };

    return {
        ...(lang === 'en' ? contentEn : contentFr),
        relatedTools
    };
}