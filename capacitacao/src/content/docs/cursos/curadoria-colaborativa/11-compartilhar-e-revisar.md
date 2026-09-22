---
title: 11. Compartilhar e revisar
description: Como usar a IA para anunciar uma curadoria no WhatsApp, pedir revisão, e o que um revisor deve checar.
duration_minutes: 10
objectives:
  - Usar a IA para gerar o anúncio de uma curadoria no WhatsApp a partir da ficha
  - Pedir explicitamente que outra pessoa revise
  - Aplicar o checklist de revisão humana
---

:::caution[Proposta em avaliação]
O fluxo de anúncio e o checklist de revisão são a proposta atual, sujeita a mudar pelo próprio uso.
:::

Esta aula é referenciada pelas atividades 3 e 4 do curso — é aqui que fica todo o "como anunciar" e "como revisar", para não repetir a mesma instrução em várias páginas.

## Anunciando com a IA como assistente

Depois de salvar a pré-ficha em `pré-curadoria/<identificador>/` (atividade 3), peça para a mesma IA redigir o anúncio — não precisa escrever a mensagem manualmente.

```text
Com base na ficha de curadoria abaixo, gere uma mensagem para WhatsApp
seguindo o template oficial.

Regras:

- seja conciso;
- preserve as diferenças entre fatos, interpretações e questões em aberto;
- não acrescente informações que não estejam na ficha;
- selecione no máximo 3 ideias principais;
- selecione no máximo 2 pontos de atenção;
- formule de 1 a 3 perguntas úteis para discussão;
- não declare consenso, aprovação ou validação que não esteja registrada;
- mantenha os links fornecidos;
- utilize linguagem acessível aos integrantes do grupo.
```

Cole a ficha completa logo abaixo desse prompt. A IA vai seguir o [template oficial de WhatsApp](https://github.com/conscienciologia/prototipos/blob/main/curadoria/templates/whatsapp.md).

Antes de enviar: releia a mensagem, confirme que o identificador (`CUR-26-K7M4QX`) está incluído, e poste no grupo.

## Peça revisão explicitamente

A mensagem sozinha não garante que alguém vá revisar. Depois de postar, peça diretamente — por exemplo:

> Alguém topa revisar essa curadoria? Não precisa ser extenso, só olhar se a síntese bate com a fonte.

O template já traz uma seção "❓ Questões para o grupo" que ajuda a puxar comentários, mas o pedido de revisão em si vale fazer de forma direta, não só implícita nas perguntas.

## O que um revisor checa

O revisor não precisa reproduzir toda a análise. Foca em:

| Pergunta | O que olhar |
|---|---|
| **Fidelidade** | A ficha representa corretamente a fonte? |
| **Inferência** | A IA apresentou interpretações como se fossem fatos? |
| **Omissões** | Algo importante ficou de fora? |
| **Rastreabilidade** | As afirmações principais podem ser localizadas na fonte? |
| **Criticidade** | Foram identificados pontos que merecem verificação? |
| **Clareza** | Dá para entender sem reconstruir todo o processo? |
| **Privacidade** | Existe algo que não deveria ser publicado? |
| **Utilidade** | Essa ficha acrescenta valor suficiente para ser preservada? |

Para `registro-grupal`, checar também: propostas foram confundidas com decisões? posições individuais viraram posições grupais? divergências foram preservadas? convergências foram exageradas? encaminhamentos têm sustentação no registro?

:::tip[]
Só depois dessa revisão o estado muda para `🟢 CURADO` — e isso é sempre decisão humana, nunca da IA.
:::
