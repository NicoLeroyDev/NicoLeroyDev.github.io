import bannerImage from '@assets/projects/apollo/banner.jpg';
import cardImage from '@assets/projects/apollo/card.jpg';
import primaryImage from '@assets/projects/apollo/home.jpg';
import secondaryImage from '@assets/projects/apollo/secondary.jpg';

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
    slug: 'apollo',
    title: 'Apollo',
    url: 'https://www.apollofood.be/',
    cardDescription: 'Site e-commerce PrestaShop pour Apollo, une marque du Groupe Solina',
    introduction: '<p>J\'ai créé le <strong>thème</strong> de ce <strong>PrestaShop</strong> pour le compte de Novius. Il s\'agit d\'un projet assez copieux, car en plus des fonctionnalités natives de PrestaShop, nous avons développé sur-mesure un <strong>catalogue de recettes</strong>, ainsi qu\'un <strong>catalogue de brochures</strong>. Le site intègre le <strong>visual composer de Novius</strong> qui permet d\'administrer le contenu efficacement pour le client, pour les pages ainsi que pour le <strong>blog</strong>. Ce projet constitue une base qui a été déclinée pour d\'autres marques du Groupe Solina.</p>',
    outroduction: 'La fiche recette constitue l\'une des fonctionnalités sur-mesure développées pour le client. Les produits et les recettes sont liés dans les deux sens, et permettent une expérience de navigation assez riche parmi différents types de contenus.',
    bannerImageAlt: 'Bannière d\'Apollo',
    cardImageAlt: 'Visuel phare du site internet d\'Apollo',
    primaryImageAlt: 'Capture d\'écran de la homepage du site internet d\'Apollo',
    secondaryImageAlt: 'Capture d\'écran de la page shopping list B2B du site internet d\'Apollo',
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
    slug: 'apollo',
    title: 'Apollo',
    url: 'https://www.apollofood.be/',
    cardDescription: 'PrestaShop e-commerce website for Apollo, a brand of Solina Group',
    introduction: '<p>I created the <strong>theme</strong> of this <strong>PrestaShop</strong> for Novius. This was a fairly extensive project, as in addition to the native functionalities of PrestaShop, we developed a custom <strong>recipe catalog</strong> as well as a <strong>brochure catalog</strong>. The site integrates <strong>Novius\' visual composer</strong>, which allows efficient content administration for the client, for both pages and the <strong>blog</strong>. This project serves as a foundation that has been adapted for other brands of the Solina Group.</p>',
    outroduction: 'The recipe card is one of the custom features developed for the client. Products and recipes are linked in both directions, allowing for a rich browsing experience among different types of content.',
    bannerImageAlt: 'Apollo\'s banner',
    cardImageAlt: 'Hero image of Apollo’s website',
    primaryImageAlt: 'Screenshot of the homepage of Apollo\'s website',
    secondaryImageAlt: 'Screenshot of the B2B shopping list page of Apollo\'s website',
  }

  content = {
    ...images,
    ...technicalInfo,
  }

  content = lang === 'en' ? Object.assign(content, textsEn) : Object.assign(content, textsFr);

  return content;
}