import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		summary: z.string().optional(),
		pubDate: z.coerce.date()
	})
});

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		summary: z.string().optional(),
		stack: z.string().optional(),
		tags: z.array(z.string()).optional(),
		order: z.number().optional(),
		pubDate: z.coerce.date()
	})
});

export const collections = { notes, projects };
