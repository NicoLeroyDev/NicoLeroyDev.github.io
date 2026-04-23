import bannerImage from '@assets/projects/amorce/banner.jpg';
import cardImage from '@assets/projects/amorce/card.jpg';
import primaryImage from '@assets/projects/amorce/home.jpg';
import secondaryImage from '@assets/projects/amorce/secondary.jpg';

export function getProjectData(lang: string) {
    let content: object = {};

    const images: { bannerImage: {}; cardImage: {}; primaryImage: {}; secondaryImage: {} } = {
        bannerImage,
        cardImage,
        primaryImage,
        secondaryImage,
    };

    const technicalInfo: { tools: string[], experience: string } = {
        tools: [
            'html5',
            'css3',
            'javascript',
            'php',
            'laravel',
            'bootstrap',
            'laravelmix',
            'npm',
            'composer',
            'git',
            'gitlab',
        ],
        experience: 'novius',
    }

    const textsFr: {
        slug: string,
        title: string,
        url: string,
        cardDescription: string,
        introduction: string,
        outroduction: string,
        bannerImageAlt: string,
        cardImageAlt: string,
        primaryImageAlt: string,
        secondaryImageAlt: string,
    } = {
        slug: 'amorce',
        title: 'Amorce',
        url: 'https://amorce.asso.fr/',
        cardDescription: 'Outil métier développé sur Laravel pour Amorce',
        introduction: '<p>J\'ai monté le front de ce <strong>Laravel</strong> pour le compte de Novius. C\'est un gros projet qui, en plus d\'être un <strong>outil de gestion de contenus</strong> de communication, dispose d\'un <strong>système de gestion d\'événements</strong>, avec un <strong>tunnel d\'inscription</strong> développé sur-mesure pour répondre à des besoins spécifiques liés à la manière de travailler du client.</p>',
        outroduction: 'Le système de gestion d’événements, et notamment l\'automatisation des inscriptions constitue la partie la plus complexe du projet. Différents scénarios sont gérés selon le profil de l\'utilisateur et ses besoins.',
        bannerImageAlt: 'Bannière d\'Amoce',
        cardImageAlt: 'Visuel phare du site internet d\'Amorce',
        primaryImageAlt: 'Capture d\'écran de la homepage du site internet d\'Amorce',
        secondaryImageAlt: 'Capture d\'écran de la page shopping list B2B du site internet d\'Amorce',
    }

    const textsEn: {
        slug: string,
        title: string,
        url: string,
        cardDescription: string,
        introduction: string,
        outroduction: string,
        bannerImageAlt: string,
        cardImageAlt: string,
        primaryImageAlt: string,
        secondaryImageAlt: string,
    } = {
        slug: 'amorce',
        title: 'Amorce',
        url: 'https://amorce.asso.fr/',
        cardDescription: 'Business tool developed on Laravel for Amorce',
        introduction: '<p>I built the front-end of this <strong>Laravel</strong> project for Novius. It is a large project that, in addition to being a <strong>content management tool</strong> for communication, has an <strong>event management system</strong> with a <strong>custom registration process</strong> developed to meet specific needs related to the client\'s workflow.</p>',
        outroduction: 'The event management system, especially the automation of registrations, is the most complex part of the project. Different scenarios are managed according to the user\'s profile and needs.',
        bannerImageAlt: 'Amorce\'s banner',
        cardImageAlt: 'Hero image of Amorce\'s website',
        primaryImageAlt: 'Screenshot of the homepage of Amorce\'s website',
        secondaryImageAlt: 'Screenshot of the B2B shopping list page of Amorce\'s website',
    }

    content = {
        ...images,
        ...technicalInfo,
    }

    content = lang === 'en' ? Object.assign(content, textsEn) : Object.assign(content, textsFr);

    return content;
}