import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});


const reading = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    url: z.string(),
    date: z.date(),
    type: z.enum(['article', 'paper', 'book', 'video', 'podcast', 'other']).optional(),
  }),
});

export const collections = { blog, reading };
