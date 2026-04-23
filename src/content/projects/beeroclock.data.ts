import bannerImage from '@assets/projects/beeroclock/banner.jpg';
import cardImage from '@assets/projects/beeroclock/card.jpg';
import primaryImage from '@assets/projects/beeroclock/home.jpg';
import secondaryImage from '@assets/projects/beeroclock/secondary.jpg';

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
    slug: 'beer-o-clock',
    title: 'Beer O\'Clock',
    url: 'https://www.beeroclock.fr/',
    cardDescription: 'Site e-commerce PrestaShop pour Beer O\'Clock, une chaîne de bars à bière',
    introduction: '<p>J\'ai créé le <strong>thème</strong> de ce <strong>PrestaShop</strong> pour le compte de Novius. Il s\'agit d\'un projet assez simple puisque il la plupart des fonctionnalités qu\'il comporte sont natives à <strong>PrestaShop</strong>. Le site implémente le <strong>visual composer de Novius</strong>, un outil facilitant la création de contenu pour les pages statiques et le blog.</p>',
    outroduction: 'Outre sa direction artistique atypique, le projet a été mené avec une certaine sérénité, autant d\'arguments qui en ont fait un projet sur lequel il faisait bon travailler.',
    bannerImageAlt: 'Bannière de Beer O\'Clock',
    cardImageAlt: 'Visuel phare du site internet de Beer O\'Clock',
    primaryImageAlt: 'Capture d\'écran de la homepage du site internet de Beer O\'Clock',
    secondaryImageAlt: 'Capture d\'écran de la page shopping list B2B du site internet de Beer O\'Clock',
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
    slug: 'beer-o-clock',
    title: 'Beer O\'Clock',
    url: 'https://www.beeroclock.fr/',
    cardDescription: 'PrestaShop e-commerce website for Beer O\'Clock, a beer bar chain.',
    introduction: '<p>I created the <strong>theme</strong> of this <strong>PrestaShop</strong> for Novius. It is a rather simple project as most of its features are native to <strong>PrestaShop</strong>. The site implements the <strong>Novius visual composer</strong>, a tool that facilitates content creation for static pages and the blog.</p>',
    outroduction: 'In addition to its atypical artistic direction, the project was carried out with a certain serenity, making it a project that was pleasant to work on.',
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