import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        date: z.date(),
        draft: z.boolean().optional().default(false),
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

export const collections = {
    'projects': projectsCollection,
    'tools': toolsCollection,
};