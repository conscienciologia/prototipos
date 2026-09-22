---
title: 3. Identificadores e modos
description: O formato CUR-AAAA-NNN e a diferença entre curar um conteúdo e curar uma discussão do grupo.
duration_minutes: 6
objectives:
  - Atribuir um identificador CUR-AAAA-NNN a uma curadoria
  - Escolher entre os modos "conteudo" e "registro-grupal"
---

:::caution[Proposta em avaliação]
O formato `CUR-AAAA-NNN` e os dois modos abaixo são hipóteses de trabalho, ainda sendo testadas — não um padrão fechado.
:::

## Identificadores

Toda curadoria que entra efetivamente em análise recebe um identificador estável — da **curadoria**, não do arquivo original:

```text
CUR-2026-001
CUR-2026-002
CUR-2026-003
```

Isso permite referências simples na conversa: *"Estou trabalhando na CUR-2026-003"*, sem depender de títulos longos ou ambíguos. Um documento pode alimentar mais de uma curadoria, e uma curadoria pode se basear em vários documentos — o identificador pertence ao **processo**, não ao arquivo.

:::caution[Papel da IA aqui]
Se não houver identificador, a IA deve avisar e pedir para você atribuir um — nunca inventar o próximo número sem acesso às fichas existentes.
:::

## Dois modos de curadoria

Antes de analisar, identifique a natureza predominante do material:

| Modo | Quando usar |
|---|---|
| `conteudo` | Artigos, papers, vídeos, podcasts, livros, cursos, ferramentas, documentos externos — qualquer fonte cujo objetivo principal é ser analisada. |
| `registro-grupal` | Reunião, transcrição, conversa de WhatsApp, sessão de trabalho, documento de discussão coletiva. |

O modo vai na ficha:

```yaml
id: CUR-2026-001
modo: conteudo
status: em-analise
```

O modo `registro-grupal` muda o processo de forma importante — é o assunto da próxima aula, e vale atenção especial: é exatamente o tipo de curadoria mais fácil de fazer errado.
