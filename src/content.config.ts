import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    strand: z.string().default('META'),
    date: z.coerce.date(),
    rev: z.number().int().positive().default(1),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
