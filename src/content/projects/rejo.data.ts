import bannerImage from '@assets/projects/rejo/banner.jpg';
import cardImage from '@assets/projects/rejo/card.jpg';
import primaryImage from '@assets/projects/rejo/home.jpg';
import secondaryImage from '@assets/projects/rejo/secondary.jpg';

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
      'tailwindcss',
      'vuejs',
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
    slug: 'rejo',
    title: 'Rejo',
    url: 'https://www.rejospices.be/fr/',
    cardDescription: 'Site e-commerce PrestaShop pour Rejo, une marque du Groupe Solina',
    introduction: '<p>J\'ai créé le <strong>thème</strong> de ce <strong>PrestaShop</strong> pour le compte de Novius. Il s\'agit d\'un projet assez copieux, car en plus des fonctionnalités natives de PrestaShop, nous avons développé sur-mesure un <strong>espace B2B</strong>, un <strong>catalogue de recettes</strong>, ainsi qu\'un <strong>catalogue de brochures</strong>. Le site intègre le <strong>visual composer de Novius</strong> qui permet d\'administrer le contenu efficacement pour le client, pour les pages ainsi que pour le <strong>blog</strong>. Ce projet est une déclinaison du thème d\'Apollo, mais c\'est un projet plus complexe.</p>',
    outroduction: 'L\'espace B2B est la partie la plus complexe du projet. Elle permet au client B2B d\'acheter les articles rapidement, le catalogue a donc été remanié pour cette cible. Les tableaux contiennent beaucoup de données et doivent pouvoir être utilisables sur tablette',
    bannerImageAlt: 'Bannière de Rejo',
    cardImageAlt: 'Visuel phare dus site internet de Rejo',
    primaryImageAlt: 'Capture d\'écran de la homepage du site internet de Rejo',
    secondaryImageAlt: 'Capture d\'écran de la page shopping list B2B du site internet de Rejo',
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
    slug: 'rejo',
    title: 'Rejo',
    url: 'https://www.rejospices.be/fr/',
    cardDescription: 'PrestaShop e-commerce website for Rejo, a brand of Solina Group',
    introduction: '<p>I created the <strong>theme</strong> of this <strong>PrestaShop</strong> for Novius. It\'s a pretty big project, because in addition to the native features of PrestaShop, we developed a custom <strong>B2B space</strong>, a <strong>recipe catalog</strong>, and a <strong>brochure catalog</strong>. The site integrates the <strong>Novius visual composer</strong>, which allows for efficient content management for the client, for pages as well as for the <strong>blog</strong>. This project is a variation of the Apollo theme, but it\'s a more complex project.</p>',
    outroduction: 'The B2B space is the most complex part of the project. It allows B2B customers to purchase items quickly, so the catalog has been revised for this target. The tables contain a lot of data and must be usable on tablets.',
    bannerImageAlt: 'Rejo\'s banner',
    cardImageAlt: 'Hero image of Rejo’s website',
    primaryImageAlt: 'Screenshot of the homepage of Rejo\'s website',
    secondaryImageAlt: 'Screenshot of the B2B shopping list page of Rejo\'s website',
  }

  content = {
    ...images,
    ...technicalInfo,
  }

  content = lang === 'en' ? Object.assign(content, textsEn) : Object.assign(content, textsFr);

  return content;
}