export function getExperienceData(lang: string) {
    const contentFr = {
        'position': 'Développeur Front-End',
        'contractType': 'CDI',
        'isCurrent': false,
        'startDateString': 'juillet 2019',
        'endDateString': 'janvier 2024',
        'website': 'https://www.novius.com/',
        'contents': [
            {
                'title': 'Développement front-end :<br>Création de sites et maintenance',
                'listElems': [
                    'Prestashop',
                    'Laravel',
                    'Sylius',
                    'Wordpress',
                    'NoviusOS',
                ]
            }
        ],
    };

    const contentEn = {
        'position': 'Front-End Developer',
        'contractType': 'Permanent contract',
        'isCurrent': false,
        'startDateString': 'July 2019',
        'endDateString': 'January 2024',
        'website': 'https://www.novius.com/',
        'contents': [
            {
                'title': 'Front-end development:<br>Site creation and maintenance',
                'listElems': [
                    'Prestashop',
                    'Laravel',
                    'Sylius',
                    'Wordpress',
                    'NoviusOS',
                ]
            }
        ],
    };

    return lang === 'en' ? contentEn : contentFr;
}