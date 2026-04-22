import { getCollection } from 'astro:content';
import { routes } from '@i18n/ui';

const languages = ['fr', 'en'] as const;
type Lang = typeof languages[number];

export function getLangStaticPaths() {
    return languages.map((lang) => ({
        params: { lang },
        props: { lang },
    }));
}

export async function getCollectionStaticPaths<T extends keyof typeof import('astro:content').collections>(
    collectionName: T
) {
    const entries = await getCollection(collectionName, ({ data }) => {
        return import.meta.env.PROD ? !data.draft : true;
    });

    return languages.flatMap((lang: Lang) =>
        entries.map((entry) => {
            const translatedSegment =
                routes[lang]?.[collectionName] ?? collectionName; // fallback: nom brut

            return {
                params: {
                    lang,
                    collection: translatedSegment, // correspond au segment traduit
                    slug: entry.slug,
                },
                props: {
                    lang,
                    [collectionName.slice(0, -1)]: entry, // ex: "project"
                },
            };
        })
    );
}

/**
 * @param lang Current lang (fr | en)
 * @param slug Project slug
 */
export function getProjectUrl(lang: Lang, slug: string): string {
    return `/${lang}/${routes[lang].projects}/${slug}`;
}
