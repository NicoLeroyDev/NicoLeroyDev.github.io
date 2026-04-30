export function getExperienceData(lang: string) {
    const relatedTools = [
        'html5',
        'css3',
        'javascript',
        'php',
        'prestashop',
        'wordpress',
        'bootstrap',
        'gulp',
        'jquery',
        'yarn',
        'composer',
        'adobe',
        'vscode'
    ];

    const contentFr = {
        'position': 'Webmaster / Intégrateur',
        'contractType': 'CDI',
        'isCurrent': false,
        'startDateString': 'octobre 2016',
        'endDateString': 'juiller 2019',
        'website': 'https://www.ultimum-ad.com/',
        'contents': [
            {
                'title': 'Intégration / Développement / Webmastering',
                'listElems': [
                    'Création de thèmes WordPress et PrestaShop',
                    'Création de landing pages',
                    'Création d\'emailings',
                    'Gestion de sites web',
                    'Docker',
                ]
            },
            {
                'title': 'Webdesign',
                'listElems': [
                    'Création de wireframes',
                    'Création de maquettes',
                ]
            },
            {
                'title': 'Vidéo',
                'listElems': [
                    'Motion design, montage et encodage pour des vidéos publicitaires destinées à la télévision ou des plateformes de vidéo telles que YouTube, Dailymotion ou Vimeo',
                ]
            },
        ],
    };

    const contentEn = {
        'position': 'Webmaster / Integrator',
        'contractType': 'Permanent contract',
        'isCurrent': false,
        'startDateString': 'october 2016',
        'endDateString': 'july 2019',
        'website': 'https://www.ultimum-ad.com/',
        'contents': [
            {
                'title': 'Integration / Development / Webmastering',
                'listElems': [
                    'WordPress and PrestaShop theme creation',
                    'Landing page creation',
                    'Emailing creation',
                    'Website management',
                    'Docker',
                ]
            },
            {
                'title': 'Webdesign',
                'listElems': [
                    'Wireframe creation',
                    'Mockup creation',
                ]
            },
            {
                'title': 'Video',
                'listElems': [
                    'Motion design, editing and encoding for advertising videos intended for television or video platforms such as YouTube, Dailymotion or Vimeo',
                ]
            },
        ],
    };

    return {
        ...(lang === 'en' ? contentEn : contentFr),
        relatedTools
    };
}