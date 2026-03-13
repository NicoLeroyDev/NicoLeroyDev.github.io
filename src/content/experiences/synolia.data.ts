export function getExperienceData(lang: string) {
    const contentFr = {
        'position': 'Développeur Front-End',
        'contractType': 'CDI',
        'isCurrent': true,
        'startDateString': 'janvier 2024',
        'endDateString': '',
        'website': 'https://www.synolia.com/',
        'contents': [
            {
                'title': 'Magento : Création et maintenance',
                'listElems': [
                    'Hyvä',
                ]
            },
            {
                'title': 'OroCommerce : Création et maintenance',
                'listElems': [
                    'wip',
                ]
            },
            {
                'title': 'Shopify : Création stack de développement',
                'listElems': [
                    'wip',
                ]
            }
        ],
    };

    const contentEn = {

    };

    return lang === 'en' ? contentEn : contentFr;
}