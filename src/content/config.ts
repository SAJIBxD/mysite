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

const watchlist = defineCollection({
	type: 'content',
	schema: z.object({
		year: z.number(),
		items: z
			.array(
				z.object({
					title: z.string(),
					year: z.number().optional(),
					type: z.enum(['Movie', 'TV']),
					status: z.enum(['Currently watching', 'Finished watching', 'Dropped', 'On hold']),
					watchedDate: z.coerce.date(),
					rating: z.number().min(0).max(5).optional(),
					review: z.string().optional(),
					audio: z.string().optional(),
					poster: z.string().optional()
				})
			)
			.default([]),
		planned: z
			.array(
				z.object({
					title: z.string(),
					year: z.number().optional(),
					type: z.enum(['Movie', 'TV'])
				})
			)
			.default([])
	})
});

export const collections = { notes, projects, watchlist };
