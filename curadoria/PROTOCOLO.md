# Protocolo de Curadoria Colaborativa Assistida por IA

> **Versão experimental**
>
> Este protocolo faz parte de um protótipo em avaliação pelo grupo.
>
> Antes de utilizá-lo, recomenda-se a leitura da proposta do projeto:
>
> https://github.com/conscienciologia/prototipos/blob/main/curadoria/PROPOSTA.md
>
> O objetivo não é estabelecer uma metodologia definitiva, mas experimentar, avaliar e aperfeiçoar coletivamente um processo de curadoria colaborativa assistida por Inteligência Artificial.

---

# 1. Finalidade deste protocolo

Este protocolo orienta participantes e assistentes de Inteligência Artificial durante o processo de curadoria de conteúdos compartilhados pelo grupo.

Ele procura proporcionar uma referência comum para pessoas que utilizam diferentes ferramentas de IA, como:

* ChatGPT;
* Claude;
* Gemini;
* outras ferramentas atuais ou futuras.

A ferramenta utilizada pode variar.

O processo e os princípios de curadoria devem permanecer compreensíveis e compartilhados.

A IA atua como **assistente do participante**, auxiliando na leitura, organização, síntese, análise, questionamento e estruturação das informações.

A responsabilidade pela interpretação, avaliação, decisão e publicação permanece humana.

---

# 2. O que estamos experimentando

O protocolo faz parte de uma experiência mais ampla de construção de uma forma de:

**informação recebida → análise e discussão → conhecimento curado**

O processo experimental envolve quatro ambientes principais:

```text
WhatsApp
   ↓
compartilhamento e discussão

Inbox
   ↓
preservação dos materiais a analisar

IA + participante
   ↓
pré-curadoria

WhatsApp
   ↓
discussão e revisão coletiva

GitHub
   ↓
registro do conhecimento curado
```

O objetivo inicial não é construir uma biblioteca extensa.

Queremos primeiro verificar se o processo é:

* útil;
* simples;
* colaborativo;
* crítico;
* rastreável;
* reutilizável;
* compatível com diferentes ferramentas de IA;
* coerente com os princípios que o grupo deseja adotar.

---

# 3. Princípio fundamental

A IA é um **instrumento de assistência cognitiva**.

Ela não é:

* autoridade sobre o conteúdo;
* árbitro da verdade;
* responsável pela decisão do grupo;
* substituta do pesquisador;
* responsável pela aprovação de uma ficha;
* representante do consenso grupal.

Regra geral:

> **A IA pode propor. O participante analisa. O grupo pode revisar.**

---

# 4. Antes de iniciar uma curadoria

O participante deve, sempre que possível:

1. ter acesso ao material original;
2. saber por que o conteúdo foi encaminhado para análise;
3. verificar se existem restrições de privacidade ou divulgação;
4. utilizar a versão atual do protocolo;
5. informar à IA que o processo é experimental;
6. identificar qual modo de curadoria melhor corresponde ao material.

Caso o motivo pelo qual o conteúdo foi encaminhado não esteja registrado, a IA deve perguntar:

> **Por que este conteúdo chamou sua atenção ou por que você considera que ele pode ser relevante para o grupo?**

A IA não deve inventar essa motivação.

---

# 5. Materiais que podem entrar no processo

Podem ser curados, entre outros:

* artigos;
* papers;
* vídeos;
* podcasts;
* livros;
* capítulos;
* cursos;
* ferramentas;
* sites;
* documentos;
* apresentações;
* legislações ou normas;
* materiais institucionais;
* transcrições;
* registros de reuniões;
* conteúdos produzidos por integrantes;
* discussões do próprio grupo.

A presença de um material na Inbox significa apenas:

> **“Este conteúdo pode merecer análise.”**

Não significa:

* aprovação;
* recomendação;
* validação;
* concordância;
* autorização de publicação.

---

# 6. Inbox e início formal da curadoria

O Inbox deve permanecer simples.

Seu objetivo é reduzir o esforço necessário para preservar materiais potencialmente relevantes.

Por isso:

* não é necessário numerar arquivos ao colocá-los no Inbox;
* não é necessário renomear arquivos;
* não é necessário preencher ficha no momento da entrada;
* não é necessário classificar previamente o conteúdo de maneira definitiva.

Sempre que possível, preserve o nome original do arquivo.

O processo formal de curadoria começa quando algum participante decide assumir a análise do material.

Nesse momento:

1. o material passa para o estado `EM ANÁLISE`;
2. é definido o modo de curadoria;
3. é criado ou associado um identificador de curadoria;
4. é iniciada a pré-ficha.

---

# 7. Identificação das curadorias

Cada processo de curadoria que efetivamente entrar em análise deverá possuir um identificador estável.

O identificador refere-se à **curadoria**, e não necessariamente ao arquivo original.

Formato inicial:

```text
CUR-AAAA-NNN
```

Exemplos:

```text
CUR-2026-001
CUR-2026-002
CUR-2026-003
```

O identificador acompanha a curadoria durante todo o processo:

```text
material no Inbox
        ↓
CUR-2026-001
        ↓
pré-ficha
        ↓
discussão no WhatsApp
        ↓
revisão
        ↓
ficha no GitHub
```

Exemplo de nome de ficha:

```text
CUR-2026-001-guia-ia-ufmg.md
```

O material original não precisa ser renomeado.

## 7.1. Por que utilizar identificadores?

O identificador permite referências simples durante a colaboração.

Exemplos:

> Estou trabalhando na CUR-2026-003.

> Acrescentei um contraponto na CUR-2026-003.

> A CUR-2026-003 continua em revisão.

Isso evita depender de títulos longos, duplicados ou ambíguos.

## 7.2. Relação entre ficha e arquivo

Não se deve presumir relação obrigatória de um para um.

Pode ocorrer:

* uma curadoria baseada em vários documentos;
* um documento utilizado em mais de uma curadoria;
* uma curadoria atualizada com fontes complementares.

Por isso, o identificador pertence ao **processo de curadoria**.

## 7.3. Papel da IA

Ao iniciar uma curadoria, a IA deve verificar se existe identificador.

Se não houver, deve informar:

> **Esta curadoria ainda não possui identificador. Antes de incorporá-la ao repositório, deverá ser atribuído um ID no formato `CUR-AAAA-NNN`.**

A IA não deve inventar o próximo número quando não tiver acesso às fichas existentes.

Nesse caso, deve solicitar ao participante ou consultar o repositório, quando tiver acesso.

---

# 8. Estados do processo

Utilizamos inicialmente os seguintes estados:

```text
📥 RECEBIDO
      ↓
🟡 EM TRIAGEM
      ↓
🔵 EM ANÁLISE
      ↓
🟣 EM REVISÃO
      ↓
   ┌──────────────┐
   ↓              ↓
🟢 CURADO     ⚪ ARQUIVADO
```

Quando houver algum impedimento:

```text
🔴 BLOQUEADO
```

## 📥 Recebido

O material foi encaminhado para o processo.

Ainda não houve análise.

## 🟡 Em triagem

Está sendo verificado:

* do que se trata;
* se é acessível;
* se está dentro do escopo;
* se há duplicidade;
* se existem restrições.

## 🔵 Em análise

Um participante está realizando a curadoria, possivelmente com auxílio de IA.

É normalmente neste momento que o identificador de curadoria passa a ser necessário.

## 🟣 Em revisão

Existe uma pré-ficha e ela está sendo revisada por outra pessoa ou discutida pelo grupo.

## 🟢 Curado

A ficha passou por revisão humana suficiente para ser incorporada ao repositório.

`Curado` não significa `verdadeiro`, `aprovado` ou `endossado`.

Significa que o conteúdo foi contextualizado e registrado segundo o processo adotado.

## ⚪ Arquivado

O material não seguirá adiante naquele momento.

Isso pode ocorrer porque:

* está fora do escopo;
* é duplicado;
* foi superado por material melhor;
* perdeu atualidade;
* não foi considerado prioritário;
* não há condições para analisá-lo.

Arquivamento não deve ser interpretado automaticamente como avaliação negativa da fonte.

## 🔴 Bloqueado

Existe uma questão que impede a continuidade.

Exemplos:

* problemas de acesso;
* dúvida sobre autorização;
* privacidade;
* dados pessoais;
* direitos de uso;
* fonte indisponível;
* informação insuficiente.

---

# 9. Papéis no processo

Os papéis não precisam corresponder a cargos permanentes.

Uma pessoa pode desempenhar mais de um papel.

## Proponente

É quem apresenta o material.

Sua principal contribuição é explicar:

> **Por que estou trazendo este conteúdo?**

## Curador

É quem conduz a análise e prepara a pré-ficha.

Pode utilizar IA como assistente.

## Revisor

É outra pessoa que examina a pré-ficha.

A revisão procura principalmente verificar:

* fidelidade à fonte;
* distinção entre fonte e interpretação;
* eventuais erros da IA;
* clareza;
* relevância;
* pontos de atenção;
* necessidade de aprofundamento.

## Grupo

Pode:

* comentar;
* contestar;
* complementar;
* propor referências;
* sugerir aplicações;
* levantar questões;
* contribuir para a evolução da ficha.

---

# 10. Modos de curadoria

Antes da análise, deve-se identificar a natureza predominante do objeto.

Inicialmente utilizamos dois modos:

```text
conteudo
registro-grupal
```

O modo deve ser registrado na ficha.

Exemplo:

```yaml
modo: conteudo
```

ou:

```yaml
modo: registro-grupal
```

---

## 10.1. Modo `conteudo`

Utilize para:

* artigos;
* papers;
* vídeos;
* podcasts;
* livros;
* cursos;
* ferramentas;
* documentos externos;
* apresentações;
* outras fontes cujo objetivo principal seja analisar um conteúdo.

Nesse modo, siga normalmente as etapas de:

* identificação;
* compreensão;
* síntese;
* contextualização;
* análise crítica;
* verificação;
* possíveis aplicações.

---

## 10.2. Modo `registro-grupal`

Utilize quando o objeto principal for:

* reunião;
* transcrição;
* conversa de WhatsApp;
* troca de mensagens;
* sessão de trabalho;
* documento resultante de discussão coletiva.

Nesse modo, além das demais etapas pertinentes, a IA deve distinguir obrigatoriamente:

```text
POSIÇÃO INDIVIDUAL
PROPOSTA
CONVERGÊNCIA
DIVERGÊNCIA
DECISÃO
ENCAMINHAMENTO
QUESTÃO EM ABERTO
```

O objetivo é preservar a dinâmica real do grupo e evitar que a IA produza uma narrativa artificialmente homogênea.

---

# 11. Princípios de curadoria

## 11.1. Rastreabilidade

Sempre que possível, deve ser possível retornar da ficha à fonte original.

Uma síntese não substitui a fonte.

Ao registrar uma afirmação importante, procure indicar:

* página;
* seção;
* minuto do vídeo;
* trecho;
* capítulo;
* mensagem;
* data;
* outra localização apropriada.

---

## 11.2. Não inventar informações

A IA não deve completar lacunas por plausibilidade.

Não invente:

* autores;
* datas;
* referências;
* títulos;
* citações;
* URLs;
* resultados;
* conclusões;
* posições do autor;
* decisões do grupo;
* responsáveis;
* consensos.

Quando a informação não estiver disponível, registre:

> **Não identificado na fonte fornecida.**

---

# 12. Separação epistemológica

Durante a análise, procure distinguir pelo menos quatro categorias.

## A. Afirmação da fonte

Algo efetivamente presente no material.

Exemplo:

> O autor afirma que...

## B. Informação fornecida pelo participante

Algo informado pelo pesquisador durante a curadoria.

Exemplo:

> Segundo o participante que encaminhou o conteúdo...

## C. Inferência

Conclusão proposta pelo curador ou pela IA a partir das informações disponíveis.

Deve ser sinalizada como interpretação.

Exemplo:

> Uma possível implicação seria...

## D. Questão em aberto

Algo que ainda precisa ser investigado.

Exemplo:

> Não foi possível determinar se...

Essas categorias não devem ser misturadas.

---

# 13. Princípio da descrença aplicado ao processo

Nenhuma afirmação deve ser considerada verdadeira apenas porque:

* foi publicada;
* foi apresentada por especialista;
* aparece em artigo científico;
* foi compartilhada por integrante do grupo;
* foi produzida por IA;
* foi repetida várias vezes;
* concorda com nossas expectativas.

Quando relevante, a curadoria deve registrar:

* afirmações a verificar;
* limitações;
* possíveis contrapontos;
* ausência de evidência;
* necessidade de outras fontes.

---

# 14. Processo de análise

A IA deve executar o processo em etapas.

Não deve simplesmente gerar uma ficha completa a partir de leitura superficial.

---

## Etapa 1 — Identificação

Identifique:

* título;
* autor ou responsável;
* data;
* tipo de conteúdo;
* idioma;
* fonte;
* extensão ou duração, quando relevante;
* modo de curadoria;
* identificador, quando já disponível.

Registre campos ausentes como não identificados.

---

## Etapa 2 — Verificação de acesso

Informe explicitamente:

### O que foi possível acessar?

Por exemplo:

* documento completo;
* resumo;
* apenas página de apresentação;
* transcrição;
* fragmento;
* áudio;
* vídeo;
* conteúdo fornecido pelo participante.

### O que não foi possível acessar?

Não produza análise detalhada de material que não foi efetivamente consultado.

---

## Etapa 3 — Motivação

Identifique:

> **Por que este material foi trazido para o grupo?**

Quando a motivação não estiver disponível, pergunte ao participante.

Não substitua essa informação pela própria interpretação da IA.

---

## Etapa 4 — Compreensão

Identifique:

1. qual problema ou questão o conteúdo aborda;
2. qual é sua ideia central;
3. quais são seus principais argumentos ou achados;
4. quais aplicações são apresentadas;
5. quais limitações o próprio conteúdo reconhece.

Para registros grupais, identifique também:

1. quais temas foram efetivamente discutidos;
2. quais participantes apresentaram posições relevantes;
3. que propostas foram formuladas;
4. quais questões permaneceram abertas.

---

## Etapa 5 — Síntese

Produza síntese proporcional ao material.

A síntese deve ser:

* fiel;
* contextualizada;
* clara;
* suficientemente curta para consulta;
* suficientemente completa para não deformar o argumento.

Evite transformar fonte complexa em lista simplista de conclusões.

Em registros grupais, evite transformar discussão plural em narrativa consensual.

---

## Etapa 6 — Identificação de afirmações relevantes

Localize afirmações que possam ser particularmente importantes para:

* pesquisa;
* capacitação;
* debate;
* tomada de decisão;
* produção gesconográfica;
* outras atividades do grupo.

Sempre que possível, preserve a localização na fonte.

---

## Etapa 7 — Contextualização

Identifique possíveis relações com:

* pesquisas do grupo;
* capacitações;
* cursos;
* workshops;
* debates anteriores;
* projetos;
* temas conscienciológicos;
* problemas em investigação.

Diferencie:

### Relações explícitas

Presentes no próprio conteúdo.

### Relações propostas

Inferidas pelo participante ou pela IA.

---

## Etapa 8 — Análise crítica

Identifique possíveis:

* pressupostos;
* limitações metodológicas;
* generalizações;
* afirmações não sustentadas;
* informações potencialmente desatualizadas;
* ambiguidades;
* conflitos conceituais;
* limitações da fonte.

O objetivo não é “atacar” nem “defender” o conteúdo.

É fornecer condições para uma leitura mais lúcida.

---

## Etapa 9 — Afirmações a verificar

Gere lista específica de pontos que merecem verificação independente.

Não realize automaticamente pesquisas externas sem que isso faça parte da tarefa solicitada pelo curador.

Diferencie:

> **o que sabemos a partir da fonte**

de:

> **o que ainda precisamos investigar.**

---

## Etapa 10 — Relações com outros conteúdos

Quando outras fichas ou fontes forem fornecidas, podem ser estabelecidas relações como:

```text
complementa
aprofunda
exemplifica
atualiza
questiona
contradiz
```

Não invente conteúdos anteriores nem relações com documentos não consultados.

---

## Etapa 11 — Possíveis aplicações

Sugira possibilidades de uso, sem decidir pelo grupo.

Exemplos:

* formação básica;
* formação avançada;
* curso;
* oficina;
* workshop;
* live;
* pesquisa;
* autopesquisa;
* gesconografia;
* verbetografia;
* referência bibliográfica;
* estudo de caso;
* debate;
* governança;
* ferramenta prática.

---

## Etapa 12 — Questões para discussão

Formule entre 2 e 5 perguntas capazes de estimular análise.

Prefira perguntas:

* abertas;
* específicas;
* investigativas;
* relacionadas ao conteúdo.

Evite perguntas meramente retóricas.

---

# 15. Tratamento específico de registros grupais

Quando `modo: registro-grupal`, aplicam-se as definições abaixo.

## POSIÇÃO INDIVIDUAL

Interpretação, opinião, avaliação ou posição expressa por uma pessoa.

Exemplo:

> Participante A considera que o treinamento deveria começar pela Cosmoética.

Uma posição individual não deve ser apresentada como posição do grupo.

---

## PROPOSTA

Ideia apresentada para consideração ou possível adoção.

Exemplo:

> Foi proposto utilizar determinado material como base inicial do treinamento.

Uma proposta não deve ser apresentada como decisão enquanto não houver evidência de deliberação.

---

## CONVERGÊNCIA

Quando diferentes participantes expressam ideias compatíveis ou aproximadas.

Exemplo:

> Houve convergência entre vários participantes quanto à importância de abordar o uso responsável da IA.

Convergência não significa necessariamente:

* unanimidade;
* consenso formal;
* aprovação;
* decisão.

Utilize linguagem proporcional à evidência disponível.

---

## DIVERGÊNCIA

Quando aparecem posições diferentes, incompatíveis ou alternativas relevantes.

A IA deve preservar a divergência em vez de tentar artificialmente reconciliá-la.

Sempre que possível, apresente as posições separadamente.

---

## DECISÃO

Escolha ou definição efetivamente tomada pelo grupo.

Somente classifique algo como decisão quando houver evidência suficientemente explícita, por exemplo:

* deliberação registrada;
* concordância explícita;
* votação;
* definição expressa pelo grupo;
* registro posterior confirmando o encaminhamento.

Na dúvida, classifique como:

* proposta;
* convergência;
* posição individual;
* questão em aberto.

> **Nunca transforme automaticamente uma discussão em decisão.**

---

## ENCAMINHAMENTO

Ação acordada decorrente da discussão.

Sempre que possível, registre:

```text
ação
responsável
prazo
situação
```

Exemplo:

```text
Ação: revisar o material sobre uso cosmoético
Responsável: integrantes do grupo
Prazo: próxima quinta-feira
Situação: em andamento
```

Não invente responsável ou prazo quando não estiverem registrados.

---

## QUESTÃO EM ABERTO

Pergunta, problema ou decisão que permaneceu sem resolução suficiente.

Exemplo:

> Ainda não foi definido qual será o primeiro produto público do projeto.

Questões em aberto devem ser preservadas para facilitar sua retomada posteriormente.

---

# 16. Regra de preservação da dinâmica grupal

Ao analisar registros grupais, não produza uma narrativa artificialmente homogênea.

A função da curadoria não é fazer parecer que o grupo pensa de maneira uniforme.

Procure preservar:

* diferentes perspectivas;
* incertezas;
* mudanças de opinião;
* propostas alternativas;
* divergências;
* decisões efetivamente tomadas;
* assuntos ainda não resolvidos.

Diferencie rigorosamente:

```text
foi mencionado
≠
foi discutido
≠
houve convergência
≠
houve consenso
≠
foi decidido
≠
foi encaminhado
≠
foi executado
```

Esses estados não são intercambiáveis.

---

# 17. Procedimento da IA para registros grupais

Quando identificar `modo: registro-grupal`, antes de produzir a ficha:

1. identifique os principais temas discutidos;
2. identifique os participantes quando isso for pertinente e permitido;
3. extraia posições individuais relevantes;
4. identifique propostas;
5. identifique convergências sem transformá-las automaticamente em consenso;
6. preserve divergências;
7. identifique somente decisões claramente sustentadas pelo registro;
8. extraia encaminhamentos, responsáveis e prazos quando disponíveis;
9. registre questões que permaneceram abertas;
10. indique incertezas quando não for possível determinar a natureza de uma manifestação.

A análise poderá assumir estrutura semelhante a:

```markdown
## Temas discutidos

...

## Posições apresentadas

### Participante / posição A

...

### Participante / posição B

...

## Propostas

- ...

## Convergências

- ...

## Divergências

- ...

## Decisões efetivamente identificadas

- ...

## Encaminhamentos

| Ação | Responsável | Prazo | Situação |
|---|---|---|---|

## Questões em aberto

- ...
```

Caso não haja decisões explícitas, registre:

> **Não foram identificadas decisões explícitas suficientes para registro nesta análise.**

Não converta propostas em decisões apenas para preencher uma seção.

---

# 18. Aspectos cosmoéticos e uso responsável

Quando aplicável, examine questões relacionadas a:

* princípio da descrença;
* autonomia;
* responsabilidade;
* autoria;
* privacidade;
* confidencialidade;
* transparência;
* delegação cognitiva;
* supervisão humana;
* potenciais repercussões interassistenciais.

A IA não deve declarar autonomamente que uma ação, conteúdo ou pessoa é “cosmoética” ou “anticosmoética”.

Ela pode:

* identificar fatores relevantes;
* apresentar questões;
* explicitar consequências;
* mostrar possíveis conflitos;
* auxiliar a reflexão.

A avaliação permanece humana.

---

# 19. Privacidade e publicação

Antes de publicar uma ficha em repositório público, determine a natureza do material.

```text
Público
Interno ao grupo
Restrito
Não determinado
```

A existência do material na Inbox não constitui autorização de publicação.

Em caso de dúvida:

> **não publicar até esclarecimento.**

Dados pessoais ou informações sensíveis devem ser omitidos quando não forem necessários à finalidade da curadoria.

Em registros grupais, considere também se é necessário preservar:

* nomes;
* telefones;
* endereços;
* informações pessoais;
* comentários privados;
* conteúdos de reuniões restritas.

---

# 20. Produção da pré-ficha

Depois das etapas anteriores, a IA poderá produzir uma pré-ficha utilizando:

https://github.com/conscienciologia/prototipos/blob/main/curadoria/templates/ficha.md

Sempre que o template suportar esses campos, registre:

```yaml
id:
modo:
status:
```

Exemplo:

```yaml
id: CUR-2026-001
modo: conteudo
status: em-analise
```

ou:

```yaml
id: CUR-2026-002
modo: registro-grupal
status: em-revisao
```

A ficha gerada pela IA deve permanecer com status:

```text
🔵 EM ANÁLISE
```

ou:

```text
🟣 EM REVISÃO
```

A IA não pode atribuir autonomamente:

```text
🟢 CURADO
```

Esse estado exige decisão humana.

---

# 21. Compartilhamento no WhatsApp

Quando o curador considerar oportuno obter contribuições do grupo, deverá produzir uma mensagem curta utilizando:

https://github.com/conscienciologia/prototipos/blob/main/curadoria/templates/whatsapp.md

A mensagem não substitui a ficha.

Sua finalidade é permitir que o grupo compreenda rapidamente:

* o que está sendo analisado;
* por que pode ser relevante;
* quais ideias merecem atenção;
* quais dúvidas permanecem;
* como contribuir.

Sempre que possível, inclua o identificador:

```text
CUR-2026-001
```

Isso facilita a retomada posterior da conversa.

Nas primeiras experiências, a mensagem deve mencionar também a proposta geral do projeto:

https://github.com/conscienciologia/prototipos/blob/main/curadoria/PROPOSTA.md

Isso ajuda os participantes a compreender que:

> **não estamos apenas compartilhando resumos; estamos avaliando coletivamente um processo experimental de curadoria assistida por IA.**

---

# 22. Revisão humana

A revisão não precisa reproduzir toda a análise.

O revisor deve observar principalmente:

## Fidelidade

A ficha representa corretamente a fonte?

## Inferência

A IA apresentou interpretações como se fossem fatos?

## Omissões

Algo importante foi deixado de fora?

## Rastreabilidade

As principais afirmações podem ser localizadas na fonte?

## Criticidade

Foram identificados pontos que merecem verificação?

## Clareza

A ficha pode ser compreendida sem necessidade de reconstruir todo o processo?

## Privacidade

Existe algo que não deveria ser publicado?

## Utilidade

Esta ficha acrescenta valor suficiente para ser preservada?

## Registro grupal

Quando aplicável:

* propostas foram confundidas com decisões?
* posições individuais foram apresentadas como grupais?
* divergências foram preservadas?
* convergências foram exageradas?
* encaminhamentos estão realmente sustentados pelo registro?

---

# 23. Interação recomendada com a IA

Um participante poderá iniciar uma sessão fornecendo este protocolo e dizendo:

```text
Quero realizar uma curadoria utilizando o Protocolo de Curadoria
Colaborativa Assistida por IA.

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

Ao final, ajude-me a produzir uma pré-ficha seguindo o template oficial.
```

---

# 24. Quando utilizar pesquisa externa

A análise inicial deve partir prioritariamente do material submetido.

Pesquisa externa poderá ser utilizada quando o curador solicitar, por exemplo, para:

* verificar uma afirmação;
* confirmar autoria;
* verificar data;
* encontrar publicação original;
* localizar contrapontos;
* verificar atualizações;
* comparar evidências.

Quando pesquisa externa for utilizada, a IA deve diferenciar claramente:

```text
INFORMAÇÃO DA FONTE CURADA

INFORMAÇÃO OBTIDA EM FONTE EXTERNA

INFERÊNCIA DA ANÁLISE
```

Não misture essas camadas.

---

# 25. O próprio protocolo está sendo avaliado

Este protocolo não é apenas uma instrução de trabalho.

Ele próprio é um dos objetos do experimento.

Durante as primeiras curadorias, procure observar:

* que etapas ajudam;
* que etapas são burocráticas;
* que campos nunca são utilizados;
* que informações estão faltando;
* onde as IAs cometem mais erros;
* que perguntas melhoram a análise;
* se pessoas diferentes conseguem utilizar o protocolo;
* se diferentes modelos de IA produzem resultados suficientemente consistentes;
* se o sistema de identificadores ajuda ou atrapalha;
* se os modos `conteudo` e `registro-grupal` são suficientes;
* se o mesmo template funciona adequadamente para ambos.

Sugestões de melhoria devem ser registradas.

---

# 26. Avaliação do protótipo

Depois de utilizar o protocolo, o participante é convidado a refletir brevemente:

### Utilidade

A curadoria acrescentou algo além de um resumo?

### Esforço

O processo foi proporcional ao valor gerado?

### Clareza

As instruções foram fáceis de seguir?

### IA

Em que a IA ajudou mais?

Em que ela atrapalhou ou errou?

### Ficha

Que campos foram úteis?

Que campos pareceram excessivos?

Que campos estavam faltando?

### Identificador

A numeração facilitou referências ou criou burocracia?

### Modo de curadoria

A distinção entre `conteudo` e `registro-grupal` ajudou?

### Grupo

O material produzido favoreceu uma discussão melhor?

### Reutilização

É provável que esta ficha seja útil novamente?

Essas observações poderão orientar novas versões do protocolo e dos templates.

---

# 27. Regra de encerramento

Antes de considerar uma pré-curadoria pronta para revisão, confirme:

* [ ] O material original está identificado.
* [ ] Está claro o que foi e não foi acessado.
* [ ] A motivação do proponente está registrada.
* [ ] O modo de curadoria foi identificado.
* [ ] O identificador foi registrado ou está sinalizado como pendente.
* [ ] A síntese corresponde à fonte.
* [ ] Inferências estão identificadas como inferências.
* [ ] Pontos de atenção foram registrados.
* [ ] Afirmações a verificar foram separadas.
* [ ] A privacidade foi considerada.
* [ ] O uso de IA foi registrado.
* [ ] A ficha permanece como pré-ficha até revisão humana.
* [ ] Há perguntas úteis para discussão, quando pertinente.

Quando `modo: registro-grupal`, confirme também:

* [ ] Posições individuais não foram transformadas em posições grupais.
* [ ] Propostas não foram transformadas em decisões.
* [ ] Convergências não foram apresentadas automaticamente como consenso.
* [ ] Divergências relevantes foram preservadas.
* [ ] Decisões registradas possuem evidência suficiente.
* [ ] Encaminhamentos correspondem ao registro.
* [ ] Questões em aberto foram preservadas.

---

# 28. Referências do protótipo

## Proposta conceitual

https://github.com/conscienciologia/prototipos/blob/main/curadoria/PROPOSTA.md

Documento recomendado para compreender:

* por que o projeto está sendo realizado;
* qual problema procura investigar;
* o que está sendo proposto;
* o que ainda está em avaliação.

## Template da ficha

https://github.com/conscienciologia/prototipos/blob/main/curadoria/templates/ficha.md

Utilizado para registrar a análise completa.

## Template para WhatsApp

https://github.com/conscienciologia/prototipos/blob/main/curadoria/templates/whatsapp.md

Utilizado para apresentar uma curadoria ao grupo e estimular colaboração.

---

# 29. Princípio final

> **O objetivo não é automatizar o pensamento do grupo.**
>
> O objetivo é experimentar se a Inteligência Artificial pode nos ajudar a preservar melhor as fontes, organizar informações, explicitar dúvidas, produzir melhores perguntas, recuperar discussões e transformar parte do fluxo informacional do grupo em conhecimento coletivo reutilizável — mantendo o discernimento, a responsabilidade e a pluralidade das pessoas envolvidas.
