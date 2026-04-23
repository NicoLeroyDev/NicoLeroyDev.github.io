import bannerImage from '@assets/projects/cosmo/banner.jpg';
import cardImage from '@assets/projects/cosmo/card.jpg';
import primaryImage from '@assets/projects/cosmo/home.jpg';
import secondaryImage from '@assets/projects/cosmo/secondary.jpg';

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
    slug: 'cosmo-naturel',
    title: 'Cosmo Naturel',
    url: 'https://www.cosmonaturel.fr/',
    cardDescription: 'Site e-commerce PrestaShop pour Cosmo Naturel, une marque de produits cosmétiques BIO',
    introduction: '<p>J\'ai créé le <strong>thème</strong> de ce <strong>PrestaShop</strong> pour le compte de Novius. La complexité du projet réside surtout dans le fait que le coeur est un <strong>PrestaShop multiboutique</strong> qui englobe également Laboratoire Gravier et Dermatherm. Ce projet intègre le <strong>Visual Composer de Novius</strong>.</p>',
    outroduction: 'Le design de ce site a été pensé de manière mobile friendly, et les éléments intéractifs ont été designé spécifiquement pour être faciles à utiliser au doigt.',
    bannerImageAlt: 'Bannière de Cosmo Naturel',
    cardImageAlt: 'Visuel phare du site internet de Cosmo Naturel',
    primaryImageAlt: 'Capture d\'écran de la homepage du site internet de Cosmo Naturel',
    secondaryImageAlt: 'Capture d\'écran de la page shopping list B2B du site internet de Cosmo Naturel',
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
    slug: 'cosmo-naturel',
    title: 'Cosmo Naturel',
    url: 'https://www.cosmonaturel.fr/',
    cardDescription: 'PrestaShop e-commerce website for Cosmo Naturel, a brand of organic cosmetic products.',
    introduction: '<p>I created the <strong>theme</strong> for this <strong>PrestaShop</strong> e-commerce site for Novius. The complexity of the project mainly lies in the fact that it is a <strong>multistore PrestaShop</strong> that also includes Laboratoire Gravier and Dermatherm. This project integrates the <strong>Novius Visual Composer</strong>.</p>',
    outroduction: 'The design of this site was thought out to be mobile-friendly, and interactive elements were specifically designed to be easy to use with a touch interface.',
    bannerImageAlt: 'Cosmo Naturel\'s banner',
    cardImageAlt: 'Hero image of Cosmo Naturel’s website',
    primaryImageAlt: 'Screenshot of the homepage of Cosmo Naturel\'s website',
    secondaryImageAlt: 'Screenshot of the B2B shopping list page of Cosmo Naturel\'s website',
  }

  content = {
    ...images,
    ...technicalInfo,
  }

  content = lang === 'en' ? Object.assign(content, textsEn) : Object.assign(content, textsFr);

  return content;
}