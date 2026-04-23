const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/experiences/*.{svg,png,jpg,jpeg,webp,avif}', { eager: true });

const imageMap: Record<string, ImageMetadata> = {};

Object.keys(images).forEach((path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const key = filename.split('.')[0];
    imageMap[key] = images[path].default;
});

export function getExperienceImage(experienceId: string): ImageMetadata | undefined {
    return imageMap[experienceId];
}