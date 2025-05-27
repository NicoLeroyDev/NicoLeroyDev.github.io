import tailwindcss from '@assets/tools/tailwindcss.svg';
import vuejs from '@assets/tools/vuejs.svg';

const imageMap: Record<string, ImageMetadata> = {
    tailwindcss,
    vuejs,
};

export function getToolImage(toolId: string): ImageMetadata | undefined {
    return imageMap[toolId];
}