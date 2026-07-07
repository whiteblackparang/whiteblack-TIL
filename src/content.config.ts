import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			category: z.enum([
				'Daily',
				'Project',
				'SQL',
				'Backend',
				'Frontend',
				'Python',
				'R',
				'Statistics',
				'Data-Science',
				'Computer-Science',
				'Book-Reading',
				'Cloud',
				'Algorithm',
			]),
			date: z.coerce.date(),
			tags: z.array(z.string()).optional(),

			// SQL 전용
			dialect: z.string().optional(),

			// Frontend / Backend 전용
			stack: z.string().optional(),

			// Data-Science 전용
			topic: z.string().optional(),

			// Data-Science / Computer-Science 전용
			source: z.string().optional(),
			course: z.string().optional(),

			// Book-Reading 전용
			book: z.string().optional(),
			author: z.string().optional(),

			// 선택사항 (기존 템플릿 호환용)
			description: z.string().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };