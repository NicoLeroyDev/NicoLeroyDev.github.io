import bannerImage from '@assets/projects/labogravier/banner.jpg';
import cardImage from '@assets/projects/labogravier/card.jpg';
import primaryImage from '@assets/projects/labogravier/home.jpg';
import secondaryImage from '@assets/projects/labogravier/secondary.jpg';

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
    slug: 'laboratoire-gravier',
    title: 'Laboratoire Gravier',
    url: 'https://www.laboratoiregravier.com/',
    cardDescription: 'Site e-commerce PrestaShop pour Laboratoire Gravier, une marque de produits cosmétiques BIO',
    introduction: '<p>J\'ai créé le <strong>thème</strong> de ce <strong>PrestaShop</strong> pour le compte de Novius. La complexité du projet réside surtout dans le fait que le coeur est un <strong>PrestaShop multiboutique</strong> qui englobe également Dermatherm et Cosmo Naturel. Ce projet intègre le <strong>Visual Composer de Novius</strong>.</p>',
    outroduction: 'Le design de ce site a été pensé de manière mobile friendly, et les éléments intéractifs ont été designé spécifiquement pour être faciles à utiliser au doigt.',
    bannerImageAlt: 'Bannière de Laboratoire Gravier',
    cardImageAlt: 'Visuel phare du site internet de Laboratoire Gravier',
    primaryImageAlt: 'Capture d\'écran de la homepage du site internet de Laboratoire Gravier',
    secondaryImageAlt: 'Capture d\'écran de la page shopping list B2B du site internet de Laboratoire Gravier',
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
    slug: 'laboratoire-gravier',
    title: 'Laboratoire Gravier',
    url: 'https://www.laboratoiregravier.com/',
    cardDescription: 'PrestaShop e-commerce website for Cosmo Naturel, a brand of organic cosmetic products.',
    introduction: '<p>I created the <strong>theme</strong> for this <strong>PrestaShop</strong> e-commerce site for Novius. The complexity of the project mainly lies in the fact that it is a <strong>multistore PrestaShop</strong> that also includes Laboratoire Gravier and Dermatherm. This project integrates the <strong>Novius Visual Composer</strong>.</p>',
    outroduction: 'The design of this site was thought out to be mobile-friendly, and interactive elements were specifically designed to be easy to use with a touch interface.',
    bannerImageAlt: 'Laboratoire Gravier\'s banner',
    cardImageAlt: 'Hero image of Laboratoire Gravier’s website',
    primaryImageAlt: 'Screenshot of the homepage of Laboratoire Gravier\'s website',
    secondaryImageAlt: 'Screenshot of the B2B shopping list page of Laboratoire Gravier\'s website',
  }

  content = {
    ...images,
    ...technicalInfo,
  }

  content = lang === 'en' ? Object.assign(content, textsEn) : Object.assign(content, textsFr);

  return content;
}