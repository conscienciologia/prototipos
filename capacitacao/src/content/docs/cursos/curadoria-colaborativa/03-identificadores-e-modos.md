---
title: 3. Identificadores e modos
description: O formato CUR-AA-XXXXXX e a diferença entre curar um conteúdo e curar uma discussão do grupo.
duration_minutes: 6
objectives:
  - Atribuir um identificador CUR-AA-XXXXXX a uma curadoria
  - Escolher entre os modos "conteudo" e "registro-grupal"
---

:::caution[Proposta em avaliação]
O formato `CUR-AA-XXXXXX` e os dois modos abaixo são hipóteses de trabalho, ainda sendo testadas — não um padrão fechado.
:::

## Identificadores

Toda curadoria que entra efetivamente em análise recebe um identificador estável — da **curadoria**, não do arquivo original:

```text
CUR-26-K7M4QX
CUR-26-7HNPXA
CUR-26-3RT9WM
```

`AA` é o ano com dois dígitos. Os 6 caracteres depois são sorteados do alfabeto `0123456789ABCDEFGHJKMNPQRSTVWXYZ` — sem os caracteres `I`, `L`, `O`, `U`, que confundem fácil com `1` e `0` num texto de WhatsApp.

O identificador nomeia a **pasta** onde a curadoria será organizada — `CUR-26-K7M4QX/` — e também serve para referências simples na conversa: *"Estou trabalhando na CUR-26-K7M4QX"*. Um documento pode alimentar mais de uma curadoria, e uma curadoria pode se basear em vários documentos — o identificador pertence ao **processo**, não ao arquivo.

:::caution[Papel da IA aqui]
Peça para a IA sugerir o identificador. Ela sorteia os 6 caracteres e compõe `CUR-AA-XXXXXX` com o ano atual.
:::

## Dois modos de curadoria

Antes de analisar, identifique a natureza predominante do material:

| Modo | Quando usar |
|---|---|
| `conteudo` | Artigos, papers, vídeos, podcasts, livros, cursos, ferramentas, documentos externos — qualquer fonte cujo objetivo principal é ser analisada. |
| `registro-grupal` | Reunião, transcrição, conversa de WhatsApp, sessão de trabalho, documento de discussão coletiva. |

O modo vai na ficha:

```yaml
id: CUR-26-K7M4QX
modo: conteudo
status: em-analise
```

O modo `registro-grupal` muda o processo de forma importante — é o assunto da próxima aula, e vale atenção especial: é exatamente o tipo de curadoria mais fácil de fazer errado.
