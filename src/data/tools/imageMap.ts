const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/tools/*.svg', { eager: true });

const imageMap: Record<string, ImageMetadata> = {};

Object.keys(images).forEach((path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const key = filename.split('.')[0];
    imageMap[key] = images[path].default;
});

export function getToolImage(toolId: string): ImageMetadata | undefined {
    return imageMap[toolId];
}