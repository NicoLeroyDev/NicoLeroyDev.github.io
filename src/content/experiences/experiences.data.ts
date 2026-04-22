import { getExperienceData as getNoviusData } from './novius.data';
import { getExperienceData as getSynoliaData } from './synolia.data';

export function getExperiencesData(lang: string) {
  return {
    novius: getNoviusData(lang),
    synolia: getSynoliaData(lang),
  };
}
