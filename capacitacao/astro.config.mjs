// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Protótipo hospedado em conscienciologia.github.io/prototipos/capacitacao/
	// (repositório de protótipos do grupo — este é o segundo, ao lado de curadoria/).
	site: 'https://conscienciologia.github.io',
	base: '/prototipos/capacitacao',
	integrations: [
		starlight({
			title: 'Capacitação em IA',
			description:
				'Protótipo demonstrável — CIT/CEAEC. Conteúdo real em revisão pelo grupo, não uma versão final.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/conscienciologia/prototipos',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/conscienciologia/prototipos/edit/main/capacitacao/',
			},
			sidebar: [
				{
					label: 'Início',
					link: '/',
				},
				{
					label: 'Curso: Uso Cosmoético da IA',
					items: [{ autogenerate: { directory: 'cursos/cosmoetica-ia' } }],
				},
				{
					label: 'Recursos',
					items: [{ autogenerate: { directory: 'recursos' } }],
				},
			],
		}),
	],
});
