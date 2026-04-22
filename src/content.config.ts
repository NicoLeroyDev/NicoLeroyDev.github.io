import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        date: z.date(),
        draft: z.boolean().optional().default(false),
    }),
});

const experiencesCollection = defineCollection({
    schema: z.object({
        enterpriseName: z.string(),
        sort: z.number(),
    }),
});

const toolsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        label: z.string(),
        rating: z.number(),
        url: z.string(),
        category: z.string(),
        draft: z.boolean().optional().default(false),
    }),
});

const skillsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        skillsList: z.array(z.string()),
    }),
});

const educationCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        sort: z.number(),
    }),
});

export const collections = {
    'projects': projectsCollection,
    'experiences': experiencesCollection,
    'tools': toolsCollection,
    'skills': skillsCollection,
    'education': educationCollection,
};