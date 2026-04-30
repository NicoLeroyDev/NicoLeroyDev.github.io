export function getExperienceData(lang: string) {
    const relatedTools = [
        'html5',
        'css3',
        'bootstrap',
        'adobe',
    ];

    const contentFr = {
        'position': 'Webdesigner / Intégrateur',
        'contractType': 'Freelance',
        'isCurrent': false,
        'startDateString': 'juillet 2019',
        'endDateString': 'janvier 2024',
        'website': '',
        'contents': [
            {
                'title': '',
                'listElems': [
                    'Creation de sites vitrine et réalisation de divers supports de communication visuelle',
                ]
            }
        ],
    };

    const contentEn = {
        'position': 'Webdesigner / Integrator',
        'contractType': 'Freelance',
        'isCurrent': false,
        'startDateString': 'july 2019',
        'endDateString': 'january 2024',
        'website': '',
        'contents': [
            {
                'title': '',
                'listElems': [
                    'Creation of showcase sites and production of various visual communication supports',
                ]
            }
        ],
    };

    return {
        ...(lang === 'en' ? contentEn : contentFr),
        relatedTools
    };
}