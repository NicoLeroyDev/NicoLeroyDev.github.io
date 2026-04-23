const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/education/**/*.{svg,png,jpg,jpeg,webp,avif}', { eager: true });

const educationImages: Record<string, { logo?: ImageMetadata; badge?: ImageMetadata }> = {};

Object.keys(images).forEach((path) => {
    // path est du type /src/assets/education/slug/type.extension
    const parts = path.split('/');
    const typeWithExt = parts[parts.length - 1];
    const type = typeWithExt.split('.')[0]; // 'logo' ou 'badge'
    const slug = parts[parts.length - 2];

    if (!educationImages[slug]) {
        educationImages[slug] = {};
    }

    if (type === 'logo') {
        educationImages[slug].logo = images[path].default;
    } else if (type === 'badge') {
        educationImages[slug].badge = images[path].default;
    }
});

export function getEducationImages(slug: string) {
    return educationImages[slug] || {};
}
