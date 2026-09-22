---
title: 5. Curadoria de registros grupais
description: A diferença entre "foi discutido" e "foi decidido" — o ponto mais fácil de errar no modo registro-grupal.
duration_minutes: 8
objectives:
  - Distinguir posição individual, proposta, convergência, divergência, decisão, encaminhamento e questão em aberto
  - Evitar transformar uma discussão em decisão sem evidência
---

Quando o modo é `registro-grupal` (reunião, transcrição, conversa de WhatsApp), a IA precisa distinguir obrigatoriamente sete categorias:

| Categoria | O que é |
|---|---|
| **Posição individual** | Opinião de uma pessoa. Não deve virar "posição do grupo". |
| **Proposta** | Ideia apresentada para consideração — não é decisão até haver evidência de deliberação. |
| **Convergência** | Vários participantes expressam ideias compatíveis. Não significa unanimidade, consenso formal, aprovação ou decisão. |
| **Divergência** | Posições diferentes ou incompatíveis. A IA deve preservar, não reconciliar artificialmente. |
| **Decisão** | Escolha efetivamente tomada — só quando há evidência explícita (deliberação registrada, votação, definição expressa). Na dúvida, classifique como proposta, convergência ou questão em aberto. |
| **Encaminhamento** | Ação acordada: ação, responsável, prazo, situação. Não invente responsável ou prazo ausentes. |
| **Questão em aberto** | Ficou sem resolução suficiente — preserve para retomar depois. |

:::danger[A regra mais importante desta aula]
**Nunca transforme automaticamente uma discussão em decisão.**

Diferencie rigorosamente: *foi mencionado ≠ foi discutido ≠ houve convergência ≠ houve consenso ≠ foi decidido ≠ foi encaminhado ≠ foi executado.* Esses estados não são intercambiáveis.
:::

## Por que essa aula existe

Isso não é um cuidado abstrato. Basta olhar nosso próprio histórico do grupo: propostas de reunião, sugestões de pauta e convergências de opinião apareceram várias vezes no WhatsApp misturadas com o que de fato foi deliberado. Um registro-grupal malfeito reforça exatamente essa confusão — um bem feito preserva a pluralidade real do que aconteceu.

## Não homogeneizar

A função da curadoria de registro-grupal não é fazer parecer que o grupo pensa de forma uniforme. Preserve: diferentes perspectivas, incertezas, mudanças de opinião, propostas alternativas, divergências — junto com as decisões efetivamente tomadas e os assuntos ainda em aberto.

:::tip[Fonte completa]
[curadoria/PROTOCOLO.md, seções 15–17](https://github.com/conscienciologia/prototipos/blob/main/curadoria/PROTOCOLO.md#15-tratamento-específico-de-registros-grupais) — a estrutura completa de saída e o procedimento passo a passo da IA para esse modo.
:::
