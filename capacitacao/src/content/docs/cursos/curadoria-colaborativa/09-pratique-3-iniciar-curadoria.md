---
title: 9. Pratique 3 — Inicie a curadoria
description: Gerar a pré-ficha do recurso copiado, salvar em pré-curadoria, anunciar no grupo e pedir revisão.
duration_minutes: 20
objectives:
  - Gerar uma pré-ficha completa a partir do recurso copiado no Inbox
  - Salvar o arquivo na pasta pré-curadoria/<ID> correta
  - Anunciar a curadoria no grupo usando a IA, e pedir revisão
---

:::caution[Proposta em avaliação]
Esta é a **atividade 3 de 4** — a mais longa. Separe 20 minutos e faça de verdade: o resultado pode virar uma curadoria real do grupo.
:::

:::note[Passo a passo]
1. **Peça para a IA sugerir um identificador** — [aula 3](../03-identificadores-e-modos/): `CUR-AA-XXXXXX`.
2. **Cole o prompt abaixo**, ajustando o que estiver entre colchetes, com o recurso que você copiou para o Inbox na atividade 2.
3. **Siga a conversa** — a IA deve pedir a motivação se você não tiver explicado, avisar o que não conseguiu acessar, e não inventar nada.
4. **Gere a pré-ficha** usando o [template oficial](https://github.com/conscienciologia/prototipos/blob/main/curadoria/templates/ficha.md).
5. **Salve o arquivo** na pasta `pré-curadoria/<identificador>/` no Drive.
6. **Anuncie no grupo e peça revisão** — veja como, logo abaixo.
:::

## O prompt de abertura

```text
Quero realizar uma curadoria utilizando o Protocolo de Curadoria
Colaborativa Assistida por IA:
https://github.com/conscienciologia/prototipos/blob/main/curadoria/PROTOCOLO.md

Antes de começar:

1. considere que este é um protótipo experimental;
2. leia e respeite o protocolo;
3. identifique se o modo adequado é "conteudo" ou "registro-grupal";
4. não invente informações ausentes;
5. diferencie fonte, informação fornecida por mim, inferência e questão
   em aberto;
6. informe claramente o que conseguiu acessar;
7. verifique se a curadoria já possui identificador;
8. não considere a ficha automaticamente aprovada;
9. não declare consenso do grupo sem evidência;
10. se eu ainda não tiver explicado por que trouxe o conteúdo,
    pergunte isso antes da análise.

Se o modo for "registro-grupal", diferencie obrigatoriamente:

- posição individual;
- proposta;
- convergência;
- divergência;
- decisão;
- encaminhamento;
- questão em aberto.

Ao final, ajude-me a produzir uma pré-ficha seguindo o template oficial:
https://github.com/conscienciologia/prototipos/blob/main/curadoria/templates/ficha.md
```

:::caution[]
O link do protocolo já está no prompt, mas nem toda IA consegue abrir links sozinha. Se a sua não conseguir, cole também o texto do [Protocolo completo](https://github.com/conscienciologia/prototipos/blob/main/curadoria/PROTOCOLO.md) na conversa — sem isso, ela não tem como seguir as etapas.
:::

## Antes de considerar pronto para revisão

Confirme (lista oficial, [PROTOCOLO.md §27](https://github.com/conscienciologia/prototipos/blob/main/curadoria/PROTOCOLO.md#27-regra-de-encerramento)):

- [ ] O material original está identificado.
- [ ] Está claro o que foi e não foi acessado.
- [ ] A motivação do proponente está registrada.
- [ ] O modo de curadoria foi identificado.
- [ ] O identificador foi registrado ou está sinalizado como pendente.
- [ ] A síntese corresponde à fonte.
- [ ] Inferências estão identificadas como inferências.
- [ ] Pontos de atenção foram registrados.
- [ ] Afirmações a verificar foram separadas.
- [ ] A privacidade foi considerada.
- [ ] O uso de IA foi registrado.
- [ ] A ficha permanece como pré-ficha até revisão humana.

A pré-ficha resultante fica como `🔵 EM ANÁLISE` ou `🟣 EM REVISÃO` — nunca `🟢 CURADO` direto da IA.

## Salve o arquivo

Salve o arquivo gerado no Drive, na pasta `pré-curadoria/<identificador>/`.

## Anuncie no grupo

Anunciar não é formalidade — é o que transforma uma pré-ficha individual em objeto de discussão coletiva. Sem esse passo, ninguém mais no grupo saberia que aquela curadoria existe, e ela ficaria parada em `🔵 EM ANÁLISE` indefinidamente. É o anúncio que convida outras pessoas a aplicar o princípio da descrença sobre o seu próprio trabalho — é assim que uma curadoria avança para `🟣 EM REVISÃO` e, eventualmente, `🟢 CURADO`.

Peça para a mesma IA redigir o anúncio — não precisa escrever a mensagem manualmente.

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

Antes de enviar: releia a mensagem, confirme que o identificador (Ex: `CUR-26-K7M4QX`) está incluído, e poste no grupo.

## Peça revisão explicitamente

A mensagem sozinha não garante que alguém vá revisar. Depois de postar, peça diretamente — por exemplo:

> Alguém topa revisar essa curadoria? Não precisa ser extenso, só olhar se a síntese bate com a fonte.

O template já traz uma seção "❓ Questões para o grupo" que ajuda a puxar comentários, mas o pedido de revisão em si vale fazer de forma direta, não só implícita nas perguntas.
