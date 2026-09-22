---
title: 4. Área 2 — Altere o protocolo e mantenha a consistência
description: Editar curadoria/PROTOCOLO.md sem deixar as outras páginas que o citam desatualizadas.
duration_minutes: 20
objectives:
  - Localizar todas as ocorrências de um trecho antes de mudá-lo
  - Aplicar a mesma mudança de forma consistente em vários arquivos
---

:::tip[Esta página também é editável]
Fique livre para editar e aprimorar qualquer seção aqui — é exatamente esse o objetivo desta área de prática.
:::

A Área 1 foi uma mudança isolada: um arquivo, uma frase. Esta é mais difícil de propósito — porque `curadoria/PROTOCOLO.md` **não é um arquivo isolado**.

## Por que isso é mais complexo

Partes do protocolo são citadas, resumidas ou reaproveitadas como exemplo em outros lugares do repositório:

- `curadoria/templates/ficha.md` — os campos do frontmatter (`id`, `modo`, `status`...) seguem o que o protocolo define.
- Várias aulas do [curso Curadoria Colaborativa](../../curadoria-colaborativa/00-abertura/) citam trechos do protocolo quase palavra por palavra — a aula de identificadores, por exemplo, usa o mesmo formato de exemplo (`CUR-26-K7M4QX`) que aparece no protocolo.

Se você mudar algo no protocolo e esquecer de atualizar essas outras pontas, o site passa a se contradizer — um lugar diz uma coisa, outro diz outra. Isso já aconteceu de verdade durante a construção deste site algumas vezes, e foi corrigido exatamente com o método abaixo.

## Sugestões de mudança para tentar

Escolha uma:

- Trocar o exemplo de identificador (`CUR-26-K7M4QX`) por outro, em todo lugar que ele aparece.
- Acrescentar um item novo à lista de checklist da [§27, Regra de encerramento](https://github.com/conscienciologia/prototipos/blob/main/curadoria/PROTOCOLO.md#27-regra-de-encerramento) — e replicar no lugar do curso que reproduz essa mesma lista.
- Ajustar a redação de um dos princípios (§11 a §13) sem mudar o sentido, e conferir se nenhuma outra página cita a frase antiga literalmente.

## Como aplicar sem deixar rastro inconsistente

1. **Peça para a IA localizar todas as ocorrências** do trecho que você quer mudar — não só em `PROTOCOLO.md`, mas em `templates/ficha.md` e nas aulas do curso de Curadoria Colaborativa. Um pedido específico ajuda: "busque por [trecho] em todo o repositório antes de mudar qualquer coisa."
2. **Peça para aplicar a mudança em todos os lugares encontrados**, não só no primeiro.
3. **Depois de aplicar, peça para a IA conferir de novo** se sobrou alguma menção ao texto antigo — uma segunda busca, já com a mudança feita.
4. Aplique via GitHub (conectado ou pelo link "Editar página" de cada arquivo) e publique.

:::tip[]
Isso é basicamente o mesmo processo usado para manter este site consistente até agora: qualquer mudança de terminologia ou formato passa por uma busca no repositório inteiro antes de ser considerada terminada.
:::

## Conferindo o resultado

Depois de publicado, abra as páginas que você esperava que mudassem — `curadoria/PROTOCOLO.md` no GitHub, e a aula correspondente no site publicado — e confirme que as duas contam a mesma história.
