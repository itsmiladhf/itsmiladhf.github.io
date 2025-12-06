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

const timeline = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['life', 'work', 'education', 'project', 'achievement', 'travel']),
    description: z.string(),
    icon: z.string().optional(),
  }),
});

const tracking = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['learning', 'fitness', 'travel', 'entertainment', 'project']),
    date: z.date(),
    status: z.enum(['in-progress', 'completed', 'paused']).optional(),
    tags: z.array(z.string()).optional(),
    metadata: z.object({
      location: z.string().optional(),
      duration: z.string().optional(),
      rating: z.number().min(1).max(5).optional(),
      progress: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { blog, timeline, tracking };
