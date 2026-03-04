import tailwindcss from '@assets/tools/tailwindcss.svg';
import vuejs from '@assets/tools/vuejs.svg';

const imageMap: { tailwindcss: {}; vuejs: {} } = {
    tailwindcss,
    vuejs,
};

export function getToolImage(toolId: string): ImageMetadata | undefined {
    return imageMap[toolId];
}