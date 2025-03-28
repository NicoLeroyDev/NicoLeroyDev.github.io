/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly PUBLIC_SITE_URL: string;
    readonly PUBLIC_CONTACT_EMAIL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface Window {
    Alpine: import('alpinejs').Alpine;
}