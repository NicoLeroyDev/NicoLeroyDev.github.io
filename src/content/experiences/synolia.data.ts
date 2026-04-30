export function getExperienceData(lang: string) {
    const relatedTools = [
        'html5',
        'css3',
        'javascript',
        'php',
        'tailwindcss',
        'gulp',
        'grunt',
        'alpinejs',
        'jquery',
        'filament',
        'livewire',
        'npm',
        'composer',
        'figma',
        'git',
        'phpstorm',
        'vscode',
        'ubuntu',
        'knockout'
    ];

    const contentFr = {
        'position': 'Développeur Front-End / E-commerce',
        'contractType': 'CDI',
        'isCurrent': true,
        'startDateString': 'janvier 2024',
        'endDateString': '',
        'website': 'https://www.synolia.com/',
        'contents': [
            {
                'title': 'Développement et maintenance de plateformes e-commerce :<br>Magento 2',
                'listElems': [
                    'Développement de fonctionnalités front-end et back-end',
                    'Personnalisation de thèmes et intégration UI',
                    'Magento 2',
                    'Hyva',
                    'Docker',
                ]
            },
            {
                'title': 'Optimisation et évolution des projets',
                'listElems': [
                    'Debug et résolution de problématiques complexes',
                    'Amélioration des performances',
                    'Intégration et configuration de modules',
                    'Adaptation aux besoins clients',
                ]
            }
        ],
    };

    const contentEn = {
        'position': 'Front-End / E-commerce Developer',
        'contractType': 'Permanent contract',
        'isCurrent': true,
        'startDateString': 'january 2024',
        'endDateString': '',
        'website': 'https://www.synolia.com/',
        'contents': [
            {
                'title': 'Development and maintenance of e-commerce platforms:<br>Magento 2',
                'listElems': [
                    'Front-end and back-end features development',
                    'Theme customization and UI integration',
                    'Magento 2',
                    'Hyva',
                    'Docker',
                ]
            },
            {
                'title': 'Project optimization and evolution:',
                'listElems': [
                    'Debugging and solving complex issues',
                    'Performance improvement',
                    'Module integration and configuration',
                    'Adaptation to client needs',
                ]
            }
        ],
    };

    return {
        ...(lang === 'en' ? contentEn : contentFr),
        relatedTools
    };
}