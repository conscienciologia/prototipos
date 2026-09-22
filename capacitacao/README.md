# capacitação — protótipo demonstrável

Segunda frente do repositório [`prototipos`](../), ao lado de [`curadoria/`](../curadoria/). Enquanto a curadoria organiza conteúdo disperso, esta pasta experimenta a **publicação de cursos/treinamentos navegáveis**.

> Protótipo para aprender, não plataforma para impor. Nada aqui é definitivo — inclusive a escolha de Astro/Starlight/GitHub Pages.

## O que está publicado

O curso **"Uso Cosmoético da Inteligência Artificial (LLMs)"**, de Túlio Vieira de Souza — conteúdo real, em revisão pelo grupo desde a reunião de 17/09 (ver `curadoria`-style: [ata da reunião](https://docs.google.com/document/d/1luk-brQJmYVWkmbry9FOtXa6dyENUqCDL9TQRo-v1ec)). Não é conteúdo de demonstração inventado.

Além do curso, dois recursos de referência: o **Código Pessoal de Uso Cosmoético da IA** e o **Banco de Prompts Cosmoéticos**.

## Rodando localmente

```sh
npm install
npm run dev      # http://localhost:4321/prototipos/
npm run build    # gera ./dist
npm run preview  # serve o build de produção localmente
```

## Deploy

`.github/workflows/deploy-capacitacao.yml` (na raiz do repo) publica `dist/` em GitHub Pages a cada push em `main` que toque esta pasta. **Ainda não está ativado** — falta, no repositório GitHub:

1. Settings → Pages → Source: "GitHub Actions".
2. Rodar o workflow uma vez (push ou `workflow_dispatch`).

## O que falta para ativar (decisões propositalmente deixadas em aberto)

- **Comentários (Giscus):** infraestrutura não incluída ainda. Exige habilitar GitHub Discussions no repo e configurar em [giscus.app](https://giscus.app) — deixado para decisão do grupo sobre se/onde queremos comentários por aula.
- **Domínio próprio:** hoje aponta para `conscienciologia.github.io/prototipos/`. Trocar por domínio próprio é só mudar `site`/`base` em `astro.config.mjs`.
- **"Sugerir melhoria":** cada página já tem link "Edit page" apontando pro GitHub Web Editor (via `editLink` no `astro.config.mjs`). Ainda não decidimos se isso é suficiente ou se queremos algo tipo GitHub Issues.

## Schema de frontmatter usado

Deliberadamente mínimo — ver `src/content.config.ts`:

- `title`, `description` — padrão do Starlight.
- `duration_minutes` — usado no MDP; nem sempre correspondia a tempo explícito na fonte (marcado como estimativa quando não vinha do material original).
- `objectives` — lista curta, 1–3 itens por aula.

Campos como `status`, `authors`, `course.module`, `prerequisites`, `tags` foram deixados de fora de propósito — não são necessários ainda com 1 curso só, e adicioná-los depois é trivial.
