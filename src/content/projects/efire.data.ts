import bannerImage from '@assets/projects/efire/banner.jpg';
import cardImage from '@assets/projects/efire/card.jpg';
import primaryImage from '@assets/projects/efire/home.jpg';
import secondaryImage from '@assets/projects/efire/secondary.jpg';

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
            'prestashop',
            'bootstrap',
            'webpack',
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
        slug: 'groupe-efire',
        title: 'Groupe Efire',
        url: 'https://www.groupe-efire.com/',
        cardDescription: 'Catalogue PrestaShop pour Groupe Efire, groupe industriel français dans l\'étanchéité, transfert de fluides, découpe métallique',
        introduction: '<p>J\'ai créé le <strong>thème</strong> de ce <strong>PrestaShop</strong> pour le compte de Novius. Le projet contient le <strong>Visual Composer de Novius</strong> ainsi que de divers modules <strong>développés sur-mesure</strong> pour administrer les contenus du client.</p>',
        outroduction: 'La fiche produit permet à l\'utilisateur de naviguer d\'une déclainaison à l\'autre, et intègre les normes que le produit suit.',
        bannerImageAlt: 'Bannière du groupe Efire',
        cardImageAlt: 'Visuel phare du site internet du groupe Efire',
        primaryImageAlt: 'Capture d\'écran de la homepage du site internet du groupe Efire',
        secondaryImageAlt: 'Capture d\'écran de la page shopping list B2B du site internet du groupe Efire',
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
        slug: 'efire-group',
        title: 'Efire Group',
        url: 'https://www.groupe-efire.com/',
        cardDescription: 'PrestaShop catalog for Groupe Efire, a French industrial group specializing in sealing, fluid transfer, and metal cutting.',
        introduction: '<p>I created the <strong>theme</strong> for this <strong>PrestaShop</strong> for Novius. The project includes <strong>Novius\' Visual Composer</strong> and various <strong>custom modules</strong> to manage the client\'s content.</p>',
        outroduction: 'The product page allows the user to navigate from one variation to another, and includes the standards that the product complies with.',
        bannerImageAlt: 'Group Efire\'s banner',
        cardImageAlt: 'Hero image of Group Efire\'s website',
        primaryImageAlt: 'Screenshot of the homepage of Group Efire\'s website',
        secondaryImageAlt: 'Screenshot of the B2B shopping list page of Group Efire\'s website',
    }

    content = {
        ...images,
        ...technicalInfo,
    }

    content = lang === 'en' ? Object.assign(content, textsEn) : Object.assign(content, textsFr);

    return content;
}