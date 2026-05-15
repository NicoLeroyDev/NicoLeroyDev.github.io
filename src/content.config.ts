import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        draft: z.boolean().optional().default(false),
        url: z.string().url().optional(),
        cardDescription: z.string().optional(),
        introduction: z.string().optional(),
        outroduction: z.string().optional(),
        tools: z.array(z.string()).optional(),
        experience: z.string().optional(),
        bannerImage: image().optional(),
        bannerImageAlt: z.string().optional(),
        cardImage: image().optional(),
        cardImageAlt: z.string().optional(),
        primaryImage: image().optional(),
        primaryImageAlt: z.string().optional(),
        secondaryImage: image().optional(),
        secondaryImageAlt: z.string().optional(),
    }),
});

const experiencesCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/experiences" }),
    schema: z.object({
        enterpriseName: z.string(),
        sort: z.number(),
        position: z.string().optional(),
        contractType: z.string().optional(),
        isCurrent: z.boolean().optional().default(false),
        startDateString: z.string().optional(),
        endDateString: z.string().optional(),
        website: z.string().url().optional(),
        relatedTools: z.array(z.string()).optional(),
        contents: z.array(z.object({
            title: z.string(),
            listElems: z.array(z.string()),
        })).optional(),
    }),
});

const toolsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/tools" }),
    schema: z.object({
        label: z.string(),
        rating: z.number(),
        url: z.string(),
        category: z.string(),
        draft: z.boolean().optional().default(false),
    }),
});

const skillsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/skills" }),
    schema: z.object({
        title: z.string(),
        skillsList: z.array(z.string()),
    }),
});

const educationCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/education" }),
    schema: z.object({
        title: z.string(),
        sort: z.number(),
        label: z.string().optional(),
        startDateString: z.string().optional(),
        endDateString: z.string().optional(),
        description: z.string().optional(),
        complementary: z.string().optional(),
        location: z.string().optional(),
    }),
});

export const collections = {
    'projects': projectsCollection,
    'experiences': experiencesCollection,
    'tools': toolsCollection,
    'skills': skillsCollection,
    'education': educationCollection,
};