---
title: 9. Pratique 3 — Crie e compartilhe uma ficha
description: Gerar a pré-ficha do recurso copiado, salvar em pré-curadoria e anunciar no grupo.
duration_minutes: 15
objectives:
  - Gerar uma pré-ficha completa a partir do recurso copiado no Inbox
  - Salvar o arquivo na pasta pré-curadoria/<ID> correta
---

:::caution[Proposta em avaliação]
Esta é a **atividade 3 de 4** — a mais longa. Separe 15 minutos e faça de verdade: o resultado pode virar uma curadoria real do grupo.
:::

:::note[Passo a passo]
1. **Peça para a IA sugerir um identificador** — [aula 3](../03-identificadores-e-modos/): `CUR-AA-XXXXXX`.
2. **Cole o prompt abaixo**, ajustando o que estiver entre colchetes, com o recurso que você copiou para o Inbox na atividade 2.
3. **Siga a conversa** — a IA deve pedir a motivação se você não tiver explicado, avisar o que não conseguiu acessar, e não inventar nada.
4. **Gere a pré-ficha** usando o [template oficial](https://github.com/conscienciologia/prototipos/blob/main/curadoria/templates/ficha.md).
5. **Salve o arquivo** na pasta `pré-curadoria/<identificador>/` no Drive.
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

## Salvando e anunciando

Salve o arquivo gerado no Drive, na pasta `pré-curadoria/<identificador>/`.

Depois de salvo, é hora de anunciar no grupo que há uma curadoria nova para revisar — isso é o assunto inteiro da [aula 11, Compartilhar e revisar](../11-compartilhar-e-revisar/): lá tem o passo a passo, incluindo o prompt para a IA escrever o anúncio por você.
