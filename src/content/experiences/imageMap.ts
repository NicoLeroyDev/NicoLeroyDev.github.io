import tailwindcss from '@assets/tools/tailwindcss.svg';
import vuejs from '@assets/tools/vuejs.svg';

const imageMap: Record<string, ImageMetadata> = {
    tailwindcss,
    vuejs,
};

export function getExperienceImage(experienceId: string): ImageMetadata | undefined {
    return imageMap[experienceId];
}