export function getSkillsData(lang: string) {
    const contentFr = {
        'professionalSkills': {
            'title': 'Compétences métier',
            'skillsList': [
                'Écriture d\'un <strong>code propre et maintenable</strong>',
                '<strong>Structuration soigneuse</strong> des dossiers des projets',
                'Versionning avec <strong>Git</strong>',
                'Review de code',
                'Consultation de la documentation des outils',
                '<strong>Linting</strong> de code',
            ]
        },
        'frontEndDevelopment': {
            'title': 'Développement front-end',
            'skillsList': [
                'Utilisation de <strong>moteurs de templating</strong> (Blade, Twig, Smarty)',
                'Mise en place et utilisation de <strong>libs et frameworks JS</strong>',
                'Mise en place et utilisation de <strong>bundlers</strong>',
                'Utilisation de <strong>gestionnaires de packages</strong>',
            ]
        },
        'integration': {
            'title': 'Intégration',
            'skillsList': [
                'Balisage sémantique',
                'Intégration <strong>responsive</strong>',
                'Approche <strong>SEO-friendly</strong>',
                'Approche <strong>accessible</strong>',
                'Respect des maquettes',
            ]
        },
    };

    const contentEn = {
        'professionalSkills': {
            'title': 'Professional skills',
            'skillsList': [
                'Writing <strong>clean and maintainable code</strong>',
                '<strong>Careful structuring</strong> of project folders',
                'Versioning with <strong>Git</strong>',
                'Code review',
                'Consulting tool documentation',
                'Code <strong>linting</strong>',
            ]
        },
        'frontEndDevelopment': {
            'title': 'Front-end development',
            'skillsList': [
                'Using <strong>templating engines</strong> (Blade, Twig, Smarty)',
                'Setting up and using <strong>JS libs and frameworks</strong>',
                'Setting up and using <strong>bundlers</strong>',
                'Using <strong>package managers</strong>',
            ]
        },
        'integration': {
            'title': 'Integration',
            'skillsList': [
                'Semantic markup',
                '<strong>Responsive</strong> integration',
                '<strong>SEO-friendly</strong> approach',
                '<strong>Accessible</strong> approach',
                'Respecting mockups',
            ]
        },
    };

    return lang === 'en' ? contentEn : contentFr;
}