import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum(['mfo', 'cards', 'general']).default('general'),
    tags: z.array(z.string()).default([]),
    readingMinutes: z.number().int().positive().default(4),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
