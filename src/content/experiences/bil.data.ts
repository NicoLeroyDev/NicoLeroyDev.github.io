export function getExperienceData(lang: string) {
    const relatedTools = [
        'html5',
        'css3',
        'bootstrap',
        'adobe',
    ];

    const contentFr = {
        'position': 'Intégrateur',
        'contractType': 'Stage',
        'isCurrent': false,
        'startDateString': 'mars 2016',
        'endDateString': 'avril 2016',
        'website': '',
        'contents': [
            {
                'title': 'Divers',
                'listElems': [
                    'Création d\'un site statique pour blague de 1er avril',
                    'Créations de visuels de communication à destination des réseaux sociaux',
                    'Création de cafés',
                ]
            }
        ],
    };

    const contentEn = {
        'position': 'Integrator',
        'contractType': 'Internship',
        'isCurrent': false,
        'startDateString': 'march 2016',
        'endDateString': 'april 2016',
        'website': '',
        'contents': [
            {
                'title': 'Miscellaneous',
                'listElems': [
                    'Creation of a static site for an April Fool\'s joke',
                    'Creation of communication visuals for social networks',
                    'Creation of coffee',
                ]
            }
        ],
    };

    return {
        ...(lang === 'en' ? contentEn : contentFr),
        relatedTools
    };
}