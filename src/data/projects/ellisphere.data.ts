import bannerImage from '@assets/projects/ellisphere/banner.jpg';
import cardImage from '@assets/projects/ellisphere/card.jpg';
import primaryImage from '@assets/projects/ellisphere/home.jpg';
import secondaryImage from '@assets/projects/ellisphere/secondary.jpg';

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
            'tailwindcss',
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
        slug: 'ellisphere',
        title: 'Ellisphere',
        url: 'https://www.lesdatalistes.fr/',
        cardDescription: 'Outil de communication développé sur Laravel pour Ellisphere',
        introduction: '<p>J\'ai travaillé sur le front de ce <strong>Laravel</strong> pour le compte de Novius. Il s\'agit d\'un <strong>outil de communication plutôt simple</strong>, et nous avons pu le sortir très rapidement. La simplicité de ce projet a permis de coder le front le plus proprement possible, ce qui fut un plaisir.</p>',
        outroduction: 'Le projet étant suffisamment simple, on a pu prendre le temps de s\'appliquer sur les petits détails, notamment les effets de hover. Le front du site est très facile à maintenir.',
        bannerImageAlt: 'Bannière d\'Ellisphere',
        cardImageAlt: 'Visuel phare du site internet d\'Ellisphere',
        primaryImageAlt: 'Capture d\'écran de la homepage du site internet d\'Ellisphere',
        secondaryImageAlt: 'Capture d\'écran de la page shopping list B2B du site internet d\'Ellisphere',
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
        slug: 'ellisphere',
        title: 'Ellisphere',
        url: 'https://www.lesdatalistes.fr/',
        cardDescription: 'Tool for communication developed on Laravel for Ellisphere.',
        introduction: '<p>I worked on the front-end of this <strong>Laravel</strong> project for Novius. It\'s a rather simple <strong>communication tool</strong>, and we were able to release it quickly. The simplicity of this project allowed us to code the front-end as cleanly as possible, which was a pleasure.</p>',
        outroduction: 'As the project was simple enough, we had the time to pay attention to small details, especially the hover effects. The front-end of this website is very easy to maintain.',
        bannerImageAlt: 'Ellisphere\'s banner',
        cardImageAlt: 'Hero image of Ellisphere\'s website',
        primaryImageAlt: 'Screenshot of the homepage of Ellisphere\'s website',
        secondaryImageAlt: 'Screenshot of the B2B shopping list page of Ellisphere\'s website',
    }

    content = {
        ...images,
        ...technicalInfo,
    }

    content = lang === 'en' ? Object.assign(content, textsEn) : Object.assign(content, textsFr);

    return content;
}