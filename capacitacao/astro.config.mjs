// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages de projeto publica na raiz do repositório
	// (conscienciologia.github.io/prototipos/), não em /prototipos/capacitacao/ —
	// o artefato do workflow vira o conteúdo inteiro de dist/.
	site: 'https://conscienciologia.github.io',
	base: '/prototipos',
	integrations: [
		starlight({
			title: 'Capacitação em IA',
			description:
				'Protótipo demonstrável — CIT/CEAEC. Conteúdo real em revisão pelo grupo, não uma versão final.',
			// Site inteiro em português (locale único, sem prefixo /pt-BR/ na
			// URL): traduz os rótulos padrão dos asides (Tip→Dica, Note→Nota,
			// Caution→Cuidado, Danger→Perigo) e o resto da interface (busca,
			// paginação, "Editar página" etc.) de uma vez.
			locales: {
				root: {
					label: 'Português',
					lang: 'pt-BR',
				},
			},
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
					label: 'Curso interno: Curadoria Colaborativa',
					items: [{ autogenerate: { directory: 'cursos/curadoria-colaborativa' } }],
				},
				{
					label: 'Recursos',
					items: [{ autogenerate: { directory: 'recursos' } }],
				},
			],
		}),
	],
});
