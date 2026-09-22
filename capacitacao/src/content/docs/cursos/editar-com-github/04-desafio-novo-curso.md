---
title: 5. Desafio — Crie e publique um novo curso
description: Usar a IA e o GitHub para criar um curso inteiro, do zero até o site publicado.
duration_minutes: 45
objectives:
  - Estruturar um pequeno curso novo (título, aulas, objetivos)
  - Publicá-lo de verdade no site, sozinho
---

:::tip[Esta página também é editável]
Fique livre para editar e aprimorar qualquer seção aqui — é exatamente esse o objetivo desta área de prática.
:::

Este é o desafio que fecha a área de prática: fazer, sozinho, o mesmo processo que criou os cursos que você já viu neste site.

Não é um exercício hipotético — se o resultado ficar bom, pode virar um curso real, publicado ao lado dos outros.

## Escolha um tema pequeno

Não precisa ser grande. 3 a 5 aulas curtas já bastam para provar que o processo funciona. Algumas ideias que já circularam no grupo, caso não tenha uma própria:

- Uma faceta específica da IA aplicada a uma especialidade conscienciológica (Seriexologia, Proexologia, Verbetografia...).
- Um passo a passo prático de alguma ferramenta de IA que você usa.
- Cosmoética e IA num contexto diferente do já publicado.

## Passo a passo

1. **Esboce a estrutura com a IA** — peça uma lista de aulas, cada uma com um objetivo em uma frase. Ajuste até fazer sentido pra você.
2. **Peça o conteúdo de cada aula em Markdown**, seguindo o mesmo formato dos cursos existentes: frontmatter com `title`, `description`, `duration_minutes` e `objectives`. Aponte um dos cursos publicados como exemplo de formato.
3. **Peça para criar a pasta** `src/content/docs/cursos/<nome-do-seu-curso>/` com os arquivos das aulas, numerados (`00-`, `01-`, `02-`...).
4. **Peça para adicionar o curso ao menu lateral** — em `astro.config.mjs`, um novo grupo de `sidebar` apontando pra pasta do seu curso.
5. **Publique** — commit, e se necessário Pull Request, do mesmo jeito que nas áreas anteriores.

:::caution[]
`astro.config.mjs` é um arquivo compartilhado — outras pessoas podem estar mexendo nele ao mesmo tempo. Antes de publicar, peça para a IA conferir se há mudanças mais recentes no repositório que a sua cópia local ainda não tem.
:::

## Conferindo o resultado

Depois de publicado (1 a 5 minutos), abra `conscienciologia.github.io/prototipos/` e confira: seu curso aparece no menu? As aulas abrem? A navegação entre elas funciona?

Se tudo isso funcionou, você acabou de fazer, do início ao fim, o mesmo processo que criou este site inteiro.
