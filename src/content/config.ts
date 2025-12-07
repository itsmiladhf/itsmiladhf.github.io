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

const dailylog = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    mood: z.enum(['great', 'good', 'okay', 'rough']).optional(),
    activities: z.array(z.object({
      icon: z.string(),
      text: z.string(),
      category: z.enum(['fitness', 'learning', 'entertainment', 'project', 'travel', 'social', 'other']).optional(),
    })),
  }),
});

export const collections = { blog, timeline, dailylog };
