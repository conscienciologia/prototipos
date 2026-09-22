# capacitação — protótipo demonstrável

Segunda frente do repositório [`prototipos`](../), ao lado de [`curadoria/`](../curadoria/). Enquanto a curadoria organiza conteúdo disperso, esta pasta experimenta a **publicação de cursos/treinamentos navegáveis**.

> Protótipo para aprender, não plataforma para impor. Nada aqui é definitivo — inclusive a escolha de Astro/Starlight/GitHub Pages.

🔗 **Site publicado:** https://conscienciologia.github.io/prototipos/

## O que está publicado

Três cursos, nenhum inventado como demonstração:

1. **"Uso Cosmoético da Inteligência Artificial (LLMs)"**, de Túlio Vieira de Souza — em revisão pelo grupo desde a reunião de 17/09 (ver [ata da reunião](https://docs.google.com/document/d/1luk-brQJmYVWkmbry9FOtXa6dyENUqCDL9TQRo-v1ec)).
   https://conscienciologia.github.io/prototipos/cursos/cosmoetica-ia/00-abertura/
2. **"Curadoria Colaborativa" (uso interno)** — ensina a usar o [Protocolo de Curadoria](../curadoria/PROTOCOLO.md) na prática (identificadores, modos, papéis, estados) e termina com uma curadoria real, não hipotética. Não duplica `curadoria/PROPOSTA.md`/`PROTOCOLO.md` — linka pra eles como fonte, para não ter duas versões "oficiais" competindo.
   https://conscienciologia.github.io/prototipos/cursos/curadoria-colaborativa/00-abertura/
3. **"Área de prática: Editar com GitHub"** — conta no GitHub, conectar a IA, e exercícios de dificuldade crescente até criar e publicar um curso novo. Publicada normalmente (não é um protótipo escondido) — qualquer página pode ser editada e aprimorada livremente.
   https://conscienciologia.github.io/prototipos/cursos/editar-com-github/00-criar-conta/

Além dos cursos, dois recursos de referência: o **Código Pessoal de Uso Cosmoético da IA** e o **Banco de Prompts Cosmoéticos**.

## Rodando localmente

```sh
npm install
npm run dev      # http://localhost:4321/prototipos/
npm run build    # gera ./dist
npm run preview  # serve o build de produção localmente
```

## Deploy

`.github/workflows/deploy-capacitacao.yml` (na raiz do repo) publica `dist/` em GitHub Pages a cada push em `main` que toque esta pasta. Já está ativado (Settings → Pages → Source: "GitHub Actions") — um push nesta pasta é suficiente, o deploy leva de 1 a 5 minutos.

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
