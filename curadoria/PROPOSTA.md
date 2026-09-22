# Proposta de Protótipo de Curadoria Colaborativa Assistida por IA

## 1. Contexto

Nos últimos meses, nosso grupo vem compartilhando e discutindo uma quantidade crescente de conteúdos relacionados à Inteligência Artificial, à pesquisa conscienciológica e às possíveis aplicações dessas tecnologias na CCCI.

Circulam pelo grupo artigos, vídeos, podcasts, cursos, ferramentas, documentos institucionais, materiais produzidos pelos próprios integrantes, experiências práticas, transcrições de reuniões e reflexões surgidas durante as conversas.

Esse movimento é valioso. Ao mesmo tempo, cria um problema bastante concreto: **boa parte do conhecimento produzido ou encontrado pelo grupo permanece dispersa nas conversas, nos arquivos pessoais e nos diferentes serviços utilizados pelos participantes**.

Um conteúdo interessante pode gerar uma discussão importante no WhatsApp e, algumas semanas depois, tornar-se difícil de localizar. Uma reunião pode produzir ideias, divergências e encaminhamentos relevantes, mas esses elementos permanecem registrados principalmente na gravação ou transcrição. Materiais semelhantes podem voltar a ser compartilhados sem que saibamos que já foram analisados anteriormente.

Na reunião de 7 de setembro, o próprio grupo identificou duas frentes complementares para o projeto: uma relacionada a **repositório e curadoria de conteúdos e ferramentas** e outra relacionada à **capacitação por meio de oficinas, workshops e cursos práticos**. Também se consolidou a preocupação em começar por iniciativas simples e experimentais, evitando o crescimento prematuro da complexidade do projeto.

Esta proposta procura desenvolver experimentalmente a primeira dessas frentes: **a curadoria colaborativa de conteúdos**.

---

## 2. Problema que queremos investigar

O problema não é simplesmente armazenar arquivos ou organizar links.

Já existem inúmeras ferramentas capazes de fazer isso.

A questão que queremos investigar é:

> **Como transformar o fluxo de informações, conteúdos e discussões do grupo em conhecimento organizado, contextualizado, criticamente analisado e reutilizável, utilizando a Inteligência Artificial como assistente sem delegar a ela o discernimento humano?**

A proposta parte da percepção de que existem pelo menos três etapas diferentes:

**informação recebida → análise e discussão → conhecimento curado**

Hoje realizamos muito bem a primeira e a segunda etapas de maneira informal.

Compartilhamos materiais e conversamos sobre eles.

O protótipo procura experimentar uma maneira simples de preservar também os resultados desse processo.

---

## 3. Propósito do projeto

O propósito é experimentar um **processo colaborativo de curadoria assistida por Inteligência Artificial**, no qual participantes possam:

* compartilhar conteúdos considerados relevantes;
* preservar os materiais originais;
* utilizar diferentes ferramentas de IA para auxiliar na leitura, síntese e análise;
* identificar ideias importantes, limitações e questões em aberto;
* relacionar novos conteúdos às discussões já realizadas;
* apresentar sínteses ao grupo;
* receber críticas, complementações e contrapontos;
* registrar o resultado dessa análise de maneira estruturada;
* reutilizar posteriormente esse conhecimento em pesquisas, cursos, oficinas, lives e outras atividades.

O objetivo não é construir imediatamente uma grande base de conhecimento.

O objetivo inicial é **aprender como fazer curadoria em grupo**.

---

## 4. O que estamos propondo experimentar

Propõe-se inicialmente um fluxo bastante simples.

### 1. Compartilhamento

Um participante encontra ou produz algum conteúdo relevante e o compartilha normalmente no grupo.

Pode ser, por exemplo:

* artigo;
* paper;
* vídeo;
* podcast;
* curso;
* ferramenta;
* livro;
* documento;
* apresentação;
* transcrição;
* material produzido por integrantes do próprio grupo.

### 2. Inbox

Caso alguém considere que vale a pena analisar o material com maior atenção, ele poderá ser encaminhado para uma pasta compartilhada denominada **Inbox**.

A Inbox não representa aprovação ou validação.

Ela funciona apenas como uma **caixa de entrada comum para materiais potencialmente interessantes**.

### 3. Pré-curadoria assistida por IA

Um participante poderá escolher um dos materiais da Inbox e utilizar a ferramenta de IA de sua preferência para auxiliá-lo na análise.

Para isso, será disponibilizado um protocolo comum de curadoria.

Esse protocolo poderá ser utilizado com ChatGPT, Claude, Gemini ou outras ferramentas.

A função da IA será auxiliar em tarefas como:

* identificação do conteúdo;
* síntese;
* organização das ideias;
* identificação de argumentos;
* levantamento de limitações;
* identificação de afirmações que precisam ser verificadas;
* formulação de perguntas;
* relacionamento com temas de interesse do grupo.

A IA não terá autoridade para determinar se um conteúdo é verdadeiro, adequado ou aprovado pelo grupo.

O resultado dessa etapa será considerado uma **pré-ficha de curadoria**.

### 4. Discussão

Uma versão resumida da pré-ficha poderá ser compartilhada no WhatsApp.

Os integrantes poderão:

* comentar;
* discordar;
* acrescentar referências;
* levantar contrapontos;
* corrigir interpretações;
* indicar outras aplicações;
* sugerir aprofundamentos.

Assim, a curadoria não será o resultado da interação isolada entre uma pessoa e uma IA.

Ela poderá incorporar a inteligência e a experiência do grupo.

### 5. Registro

Quando fizer sentido, o resultado dessa análise poderá ser incorporado ao repositório de curadoria.

O GitHub funcionará inicialmente como ambiente de preservação das fichas, do protocolo e do histórico de alterações.

O conteúdo original poderá permanecer no local mais apropriado para ele.

A proposta é que o repositório contenha principalmente **conhecimento estruturado sobre os conteúdos**, e não necessariamente cópias de todos os materiais.

---

## 5. Papel dos diferentes ambientes

Para o protótipo, propõe-se uma separação simples entre os ambientes que já utilizamos.

### WhatsApp — interação

O WhatsApp continua sendo o espaço de comunicação cotidiana.

É onde:

* conteúdos aparecem;
* ideias surgem;
* perguntas são feitas;
* opiniões são apresentadas;
* discussões acontecem.

Não se pretende substituir essa dinâmica.

### Inbox — entrada

A pasta Inbox funciona como espaço de entrada para materiais que merecem análise posterior.

Ela responde à pergunta:

> **O que gostaríamos de examinar melhor?**

### Inteligência Artificial — assistência

Cada participante poderá utilizar a IA com a qual já trabalha.

Não será necessário que todos utilizem a mesma plataforma.

O protocolo comum procura proporcionar uma metodologia compartilhada apesar da diversidade de ferramentas.

A IA responde principalmente à pergunta:

> **Como posso ajudar o pesquisador a compreender, organizar, questionar e relacionar este conteúdo?**

### GitHub — memória estruturada

O repositório procura preservar:

* protocolos;
* modelos;
* fichas curadas;
* histórico de alterações;
* resultados do processo.

Ele responde à pergunta:

> **O que aprendemos e consideramos útil preservar dessa análise?**

---

## 6. Por que utilizar Inteligência Artificial no próprio processo de curadoria?

Uma das questões que queremos investigar é justamente como utilizar IA de forma produtiva sem transformar sua resposta em conclusão automática.

A curadoria constitui um bom ambiente experimental para isso.

A IA pode ser muito eficiente em tarefas como:

* estruturar informação;
* resumir documentos extensos;
* comparar conteúdos;
* localizar argumentos;
* propor classificações;
* formular perguntas;
* organizar transcrições;
* identificar possíveis relações.

Ao mesmo tempo, essas tarefas evidenciam limitações conhecidas dos modelos:

* possibilidade de erro;
* geração de informações inexistentes;
* perda de contexto;
* simplificação excessiva;
* interpretação equivocada;
* excesso de confiança;
* dificuldade para distinguir evidência de inferência.

Por isso, o próprio processo de curadoria pode funcionar também como exercício prático de **uso crítico e supervisionado da IA**.

Essa preocupação está alinhada às discussões recentes do grupo, nas quais ganharam destaque a criticidade, os limites de uso, a confidencialidade, a responsabilidade humana e o princípio da descrença antes do aprofundamento em técnicas como prompting e integração de dados.

---

## 7. Princípios iniciais

O protocolo será construído e revisado pelo grupo, mas o protótipo parte de alguns princípios.

### Rastreabilidade

Sempre que possível, deve ser possível retornar da ficha à fonte original.

Uma síntese não deve substituir a fonte.

### Separação entre fonte e interpretação

Devemos procurar distinguir:

* o que o autor ou a fonte efetivamente afirma;
* o que o participante compreendeu;
* o que foi inferido pela IA;
* o que continua sendo hipótese ou questão aberta.

### Princípio da descrença

Um conteúdo não deverá ser considerado correto apenas porque:

* foi publicado;
* foi compartilhado por alguém do grupo;
* foi produzido por especialista;
* foi sintetizado por uma IA;
* coincide com ideias que já consideramos plausíveis.

Sempre que relevante, a curadoria poderá registrar pontos que merecem verificação ou contraposição.

### Autonomia e responsabilidade humana

A IA é assistente.

A responsabilidade pela análise, interpretação, utilização e publicação permanece humana.

### Transparência

Quando uma síntese ou análise tiver sido produzida com auxílio de IA, isso poderá ser explicitado.

### Privacidade

A existência de um material na Inbox não implica autorização para torná-lo público.

Transcrições, mensagens, documentos internos ou informações pessoais deverão receber tratamento compatível com sua natureza.

### Provisoriedade

Uma ficha representa o estado de uma análise em determinado momento.

Ela poderá ser corrigida, ampliada ou substituída posteriormente.

---

## 8. Curadoria não significa certificação

É importante distinguir curadoria de validação absoluta.

A inclusão de um conteúdo na base não significa que o grupo:

* concorda com todas as suas ideias;
* endossa seu autor;
* considera suas conclusões comprovadas;
* recomenda necessariamente sua utilização.

Um conteúdo pode ser curado precisamente porque apresenta:

* uma hipótese interessante;
* uma posição divergente;
* um problema relevante;
* um exemplo de erro;
* uma abordagem controversa;
* uma inovação que merece acompanhamento.

Curar significa principalmente **preservar o conteúdo dentro de um contexto que permita compreendê-lo e discuti-lo melhor**.

---

## 9. A curadoria das próprias discussões do grupo

Além de conteúdos externos, o protótipo poderá posteriormente experimentar a curadoria de nossa própria produção coletiva.

Algumas reuniões possuem gravações ou transcrições.

As conversas de WhatsApp também registram:

* propostas;
* argumentos;
* divergências;
* decisões;
* referências;
* questões em aberto;
* encaminhamentos.

Com auxílio de IA, poderíamos experimentar formas de transformar esses registros em uma memória mais acessível.

Nesse caso será particularmente importante distinguir:

**uma ideia apresentada por alguém**

de

**uma decisão efetivamente tomada pelo grupo**.

Uma transcrição não deverá ser utilizada pela IA para fabricar consensos inexistentes.

Esse tipo de curadoria poderia futuramente permitir perguntas como:

* O que já discutimos sobre determinado assunto?
* Quais posições diferentes apareceram?
* O que foi decidido?
* O que continua em aberto?
* Quais referências já encontramos?
* Que experiências foram relatadas?
* Quais ações foram propostas?

---

## 10. O que não está sendo proposto neste momento

Para manter o experimento simples, não estamos propondo neste momento:

* uma plataforma definitiva;
* uma taxonomia definitiva;
* uma ontologia completa;
* automação integral do processo;
* substituição do WhatsApp;
* substituição da análise humana;
* obrigação de utilização de determinada IA;
* migração imediata de todos os conteúdos existentes;
* criação de um grande portal;
* definição antecipada de todas as categorias;
* centralização das decisões em uma única pessoa.

Também não estamos propondo que todos os integrantes aprendam Git ou GitHub.

O GitHub é inicialmente uma infraestrutura para o protótipo. A interação cotidiana poderá continuar ocorrendo pelos meios já familiares ao grupo.

---

## 11. O que efetivamente queremos avaliar

O protótipo existe justamente porque ainda não sabemos qual é a melhor forma de fazer isso.

Queremos avaliar, por meio da experiência:

### Utilidade

As fichas realmente ajudam alguém?

Facilitam compreender e recuperar conteúdos?

### Esforço

O processo exige trabalho demais para o benefício produzido?

Que etapas podem ser eliminadas?

### Qualidade

O protocolo ajuda as IAs a produzirem análises mais cuidadosas?

Quais erros continuam acontecendo?

### Participação

As pessoas sentem vontade de contribuir?

O processo permite participação de pessoas com diferentes níveis de conhecimento tecnológico?

### Colaboração

Os comentários do grupo melhoram efetivamente as fichas?

### Recuperação

Após algum tempo, conseguimos reencontrar conteúdos e discussões com maior facilidade?

### Reutilização

Os materiais curados ajudam na criação de:

* aulas;
* workshops;
* pesquisas;
* lives;
* textos;
* debates?

### Cosmoética

O processo ajuda a desenvolver um uso mais crítico, responsável e consciente da Inteligência Artificial?

---

## 12. Como começar

A proposta é iniciar com poucos casos.

Não precisamos preencher imediatamente uma grande biblioteca.

Podemos escolher alguns materiais que já circularam no grupo e realizar o ciclo completo:

**compartilhamento → Inbox → análise → pré-ficha → discussão → revisão → registro**

Depois de algumas experiências, poderemos avaliar coletivamente:

* o que funcionou;
* o que ficou burocrático;
* o que faltou;
* o que deve ser simplificado;
* que campos são úteis;
* que princípios precisam ser acrescentados;
* que ferramentas podem ajudar.

O próprio protocolo será, portanto, objeto de curadoria e aperfeiçoamento.

---

## 13. Natureza experimental

Este projeto deve ser entendido como um **protótipo**.

Não se pretende apresentar uma metodologia pronta para o grupo adotar.

Estamos propondo uma hipótese de trabalho:

> **Talvez possamos utilizar a própria Inteligência Artificial, de maneira supervisionada e crítica, para transformar a grande quantidade de informação que circula entre nós em conhecimento grupal progressivamente organizado e reutilizável.**

Precisamos experimentar para descobrir se essa hipótese funciona.

---

## 14. Possíveis resultados futuros

Caso o processo demonstre utilidade, diversos desdobramentos poderão surgir naturalmente.

Por exemplo:

* biblioteca temática;
* trilhas de estudo;
* bibliografias comentadas;
* base de referências para cursos;
* registro de decisões do grupo;
* mapas de temas;
* sínteses de reuniões;
* comparação de posições;
* identificação de lacunas de pesquisa;
* integração com ambientes educacionais;
* busca semântica;
* agentes especializados;
* automações.

Esses resultados não precisam ser definidos antecipadamente.

O primeiro passo é construir um pequeno processo que as pessoas realmente consigam utilizar.

---

## 15. Convite à participação

Esta proposta é apresentada para ser **experimentada, criticada e modificada**.

A participação não exige conhecimento de programação ou GitHub.

Há várias maneiras de contribuir:

* compartilhando um conteúdo;
* explicando por que ele parece relevante;
* realizando uma pré-curadoria;
* testando o protocolo em diferentes ferramentas de IA;
* verificando uma ficha;
* apontando erros;
* acrescentando referências;
* propondo perguntas;
* sugerindo simplificações;
* identificando problemas cosmoéticos;
* ajudando a melhorar o próprio processo.

O valor do protótipo não estará apenas na tecnologia utilizada.

Estará principalmente na qualidade das perguntas, análises, contrapontos e experiências que conseguirmos reunir.

A proposta, portanto, não é simplesmente construir um repositório.

É experimentar uma forma de **transformar informação dispersa em memória, reflexão e conhecimento coletivo, utilizando a Inteligência Artificial como instrumento de apoio ao discernimento e à cooperação humana**.
