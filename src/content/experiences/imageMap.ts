import novius from '@assets/experiences/novius.svg';
import synolia from '@assets/experiences/synolia.png';

const imageMap: { novius: {}; synolia: {} } = {
    novius,
    synolia,
};

export function getExperienceImage(experienceId: string): ImageMetadata | undefined {
    return imageMap[experienceId];
}