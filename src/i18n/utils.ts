import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function useTranslatedPath(currentLang: string) {
    return function translatePath(path: string, lang: string = currentLang) {
        if (path === '/') {
            return !showDefaultLang && lang === defaultLang
                ? '/'
                : `/${lang}/`;
        }

        const pathClean = path.replace(/^\//, '');
        const segments = pathClean.split('/');

        // Identify the base keys for each segment
        const currentLangRoutes = routes[currentLang as keyof typeof routes];
        const baseSegments = segments.map(segment => {
            if (!currentLangRoutes) return segment;
            const foundKey = Object.keys(currentLangRoutes).find(key =>
                currentLangRoutes[key as keyof typeof currentLangRoutes] === segment
            );
            return foundKey || segment;
        });

        const langRoutes = routes[lang as keyof typeof routes];

        const translatedSegments = baseSegments.map(segment => {
            return langRoutes ? (langRoutes[segment as keyof typeof langRoutes] || segment) : segment;
        });

        const translatedPath = translatedSegments.join('/');

        return !showDefaultLang && lang === defaultLang
            ? `/${translatedPath}`
            : `/${lang}/${translatedPath}`;
    };
}

export function getPathWithoutLang(url: URL) {
    const pathname = url.pathname;
    const [, lang] = pathname.split('/');
    if (lang in ui) {
        return pathname.replace(`/${lang}`, '') || '/';
    }
    return pathname;
}