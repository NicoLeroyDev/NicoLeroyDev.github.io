import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        demoUrl: z.string().optional(),
        githubUrl: z.string().optional(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().optional().default(false),
        date: z.date(),
        draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
    'projects': projectsCollection,
};