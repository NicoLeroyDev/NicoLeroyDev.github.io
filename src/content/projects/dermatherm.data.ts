import bannerImage from '@assets/projects/dermatherm/banner.jpg';
import cardImage from '@assets/projects/dermatherm/card.jpg';
import primaryImage from '@assets/projects/dermatherm/home.jpg';
import secondaryImage from '@assets/projects/dermatherm/secondary.jpg';

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
    slug: 'dermatherm',
    title: 'Dermatherm',
    url: 'https://www.dermatherm.fr/',
    cardDescription: 'Site e-commerce PrestaShop pour Dermatherm, une marque de produits dermo-cosmétiques BIO',
    introduction: '<p>J\'ai créé le <strong>thème</strong> de ce <strong>PrestaShop</strong> pour le compte de Novius. La complexité du projet réside surtout dans le fait que le coeur est un <strong>PrestaShop multiboutique</strong> qui englobe également Laboratoire Gravier et Cosmo Naturel. Ce projet intègre le <strong>Visual Composer de Novius</strong>.</p>',
    outroduction: 'Le design de ce site a été pensé de manière mobile friendly, et les éléments intéractifs ont été designé spécifiquement pour être faciles à utiliser au doigt.',
    bannerImageAlt: 'Bannière de Dermatherm',
    cardImageAlt: 'Visuel phare du site internet de Dermatherm',
    primaryImageAlt: 'Capture d\'écran de la homepage du site internet de Dermatherm',
    secondaryImageAlt: 'Capture d\'écran de la page shopping list B2B du site internet de Dermatherm',
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
    slug: 'dermatherm',
    title: 'Dermatherm',
    url: 'https://www.dermatherm.fr/',
    cardDescription: 'PrestaShop e-commerce website for Dermatherm, a brand of organic dermo-cosmetic products.',
    introduction: '<p>I created the <strong>theme</strong> for this <strong>PrestaShop</strong> e-commerce site for Novius. The complexity of the project mainly lies in the fact that it is a <strong>multistore PrestaShop</strong> that also includes Laboratoire Gravier and Cosmo Naturel. This project integrates the <strong>Novius Visual Composer</strong>.</p>',
    outroduction: 'The design of this site was thought out to be mobile-friendly, and interactive elements were specifically designed to be easy to use with a touch interface.',
    bannerImageAlt: 'Dermtherm\'s banner',
    cardImageAlt: 'Hero image of Dermtherm’s website',
    primaryImageAlt: 'Screenshot of the homepage of Dermtherm\'s website',
    secondaryImageAlt: 'Screenshot of the B2B shopping list page of Dermtherm\'s website',
  }

  content = {
    ...images,
    ...technicalInfo,
  }

  content = lang === 'en' ? Object.assign(content, textsEn) : Object.assign(content, textsFr);

  return content;
}