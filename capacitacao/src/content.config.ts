import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		// Extensão mínima do schema padrão do Starlight: só os campos que o
		// protótipo realmente usa hoje. Ver capacitacao/README.md sobre o que
		// foi deixado de fora de propósito (status, autores, prerequisites...).
		schema: docsSchema({
			extend: z.object({
				duration_minutes: z.number().optional(),
				objectives: z.array(z.string()).optional(),
			}),
		}),
	}),
};
