---
icon: edit
date: 2023-09-12 18:30:00.00 -3
category:
  - Aula
tag:
  - jamstack
order: 4
---
# Jamstack


A Jamstack é uma arquitetura criada para construir sites mais rápidos, que escalam com facilidade e que são mais seguros. Antes mais conhecidos como “sites estáticos”, esses sites são geralmente um conjunto de arquivos HTML, CSS e JS que conversam com o servidor apenas quando necessário.

Um dos motivos para a Jamstack estar se tornando tão popular é a explosão de ferramentas poderosas que permitem criar sites que vão além do que tradicionalmente sites “estáticos” faziam. Agora existem diversos CDNs especializados em entregar esses sites rapidamente para usuários de qualquer lugar do mundo, ferramentas para integração e publicação contínua, CMSs Headless perfeitos para sites Jamstack e ferramentas para criá-los sem dor de cabeça.

Neste guia completo para iniciantes, eu vou te explicar os porquês de usar esta arquitetura, ferramentas para construir e publicas sites Jamstack e também suas desvantagens.

## Arquitetura de um site JAMStack

Sites Jamstack utilizam uma arquitetura diferente de sites que utilizam um servidor backend tradicional. Sites que utilizam servidores – como Wordpress, Laravel ou Rails – geram uma resposta para cada vez que um usuário requisita uma nova página. Já sites Jamstack têm todas as suas páginas pré-renderizadas antes de serem publicadas e podem ser servidos diretamente de uma Content Delivery Network (CDN) assim como já fazemos com imagens, vídeos e outros arquivos estáticos.

O fato de sites Jamstack serem compilados para arquivos estáticos não os torna menos capazes do que sites renderizados no servidor. Um grande motivo para o pessoal da Netlify ter criado o termo “Jamstack” foi fugir do termo “estático” – como disse Mathias Biilmann em um episódio do JAMStack Radio. Usando JavaScript e consumindo APIs, sites Jamstack são bastante dinâmicos e utilizam de arquivos estáticos apenas como uma forma de remover a necessidade de um servidor mais complexo.

As ferramentas utilizadas para criar sites Jamstack são comumente chamadas de geradores estáticos. Os geradores estáticos mais utilizados são o Hugo, Next.js e Gatsby. Para gerenciar o conteúdo destes sites, normalmente utiliza-se arquivos Markdown ou um Headless CMS.

## Por que construir um site usando Jamstack?

A primeira vantagem de utilizar esta arquitetura é a performance. Como o frontend já foi pré-renderizado antes da publicação e estes arquivos normalmente são servidos direto de uma CDN, o tempo de resposta de um site Jamstack tende a ser muito baixo. Utilizando ferramentas modernas como Gatsby, o JavaScript utilizado dentro de cada página é altamente otimizado e leve – assim como o CSS é reduzido a apenas o necessário. É inclusive bastante comum ver sites Jamstack atingirem altas pontuações no PageSpeed Insights.

Uma outra vantagem de uma arquitetura baseada em arquivos estáticos é a escalabilidade. Enquanto sites tradicionais baseados em um servidor dinâmico dependem de camadas de cache para entregar páginas com rapidez em momentos de altas cargas de tráfego, sites Jamstack já foram pré-renderizados. Também não é necessária a criação de lógicas complexas de invalidação de cache, já que a arquitetura e os geradores estáticos tomam conta disto por você.

Como sites Jamstack são publicados como uma coleção de arquivos estáticos, eles também são facilmente portáveis para diferentes provedores como AWS, Netlify, Vercel e Google Cloud Platform.

## Principais ferramentas para construir um site Jamstack

Nos últimos anos muitas ferramentas surgiram para construir sites com esta arquitetura, incluindo o Next.js, Gatsby, Hugo e outros geradores estáticos. Existem opções para quem quer criar sites utilizando frameworks JavaScript como React e Vue ou até geradores estáticos com engines de templates mais tradicionais como Hugo e Jekyll.

Escolher entre todas essas ferramentas pode ser uma tarefa bastante difícil. Abaixo eu trouxe uma lista com as opções mais comuns e que eu recomendo para seu próximo projeto. Além destas três, existem muitas outras ferramentas listadas em jamstack.org/generators/.

### Next.js

O Next.js evoluiu muito desde sua primeira versão. Na minha opinião, ele é agora a ferramenta mais versátil para criar sites Jamstack. Criado pela Vercel, o Next.js é um framework JavaScript bastante conhecido que usa como base o React e o Node.js.

Com uma arquitetura simples e ferramentas de compilação pré-configuradas, você rapidamente poderá criar sites Jamstack com o Next.js. Além de páginas pré-renderizadas, você pode utilizá-lo também para criar páginas geradas no servidor e até rotas de API com Serverless Functions.

Toda a complexidade de configurar ferramentas como Webpack e Babel, otimizar bundles para publicar em produção, configurar um servidor para renderizar componentes React e criar todo um backend para algumas pequenas rotas de API somem ao usar o Next.js.

Se você utiliza Vue ao invés de React, também vale a pena conferir o Nuxt.js.

### Gatsby

O Gatsby é uma abordagem diferente para criar sites com React. Sua ideia principal é juntar uma arquitetura baseada em plugins com o poder do GraphQL (uma linguagem de consulta de dados).

Com mais de 2000 plugins, é bastante simples integrar o Gatsby com diferentes fontes de dados como arquivos Markdown, Headless CMSs, planilhas, e bancos de dados. Após adicionar e configurar um plugin, estes dados estarão disponíveis no GraphQL.

Assim como o Next.js, o Gatsby faz um grande trabalho por você para exportar um site Jamstack com alta performance sem que você tenha que passar muito tempo configurando o processo de compilação.

O sistema de temas do Gatsby também é bastante interessante. Temas do Gatsby juntam configurações e plugins em um único pacote, oferecendo uma forma ainda mais simples de criar sites como blogs, lojas e wikis.

### Hugo

Mais como um gerador de sites tradicional, o Hugo é um projeto em Go criado para ser extremamente rápido e versátil para criar sites estáticos.

Sem instalar plugins você pode trabalhar com diversos tipos de conteúdo, taxonomias e conteúdo dinâmico de APIs. Além disso, o sistema de templates do Hugo é recheado de utilitários para criar layouts diferentes para cada página, trabalhar com SEO, internacionalização e até exportar o seu projeto para JSON ou AMP.

Existe uma grande quantidade de temas para Hugo, que vão desde os criados para sites pessoais até temas para criação de apresentação de slides. Ao contrário do Gatsby e do Next.js, Hugo não usa React como sua linguagem de templates o que pode ser uma grande vantagem para quem não planeja muitas interações renderizadas no lado do navegador ou não quer prender o seu site nesta biblioteca JavaScript.

## Os melhores Headless CMSs para seu projeto

Para o conteúdo que preenche os sites Jamstack, é bastante comum utilizar um Headless CMS. Estes CMSs são diferentes de CMSs mais tradicionais como o WordPress já que eles não tocam na implementação da interface de usuário que mostrará o conteúdo. Em vez disso, eles oferecem uma API para que você possa consumir e renderizar o conteúdo por conta própria.

A grande vantagem de utilizar um Headless CMS é separar bem a criação do conteúdo do código do site. Dessa forma, times diferentes dentro de um projeto podem trabalhar no código e no conteúdo. Headless CMSs também tendem a ser bastante flexíveis em como você pode organizar o conteúdo e oferecem hospedagem de arquivos como imagens e vídeos.

Alguns destes CMSs são o Netlify CMS, Strapi e Ghost. Você pode conferir uma lista completa em jamstack.org/headless-cms/.

### Netlify CMS

Feito pela empresa que cunhou o termo Jamstack e têm trabalhado para difundir esta arquitetura, o Netlify CMS é uma solução prática para criar conteúdo para sites Jamstack. Nele todo o seu conteúdo é armazenado dentro de um repositório git, te permitindo controlar o versionamento de conteúdo integrado com o código.

Além de ser open-source com uma licença MIT, o Netlify CMS pode ser extendido para acomodar as necessidades de edição de conteúdo do seu projeto. Como ele roda como um webapp embutido em seu site, você não precisa de um servidor para hospedá-lo.

### Strapi

Uma opção ainda mais poderosa para usar como Headless CMS é o Strapi. Com um plano gratuito praticamente completo e seu código-fonte open-source, o Strapi é uma boa alternativa para você auto-hospedar um Headless CMS.

Dentre as suas funcionalidades estão tipos de conteúdo ilimitados, APIs REST e GraphQL, armazenamento de arquivos e mídia, assim como controles de acesso de usuários. Você pode hospedar sua instância do Strapi em servidores de sua escolha como na AWS, Digital Ocean ou Heroku.

### Ghost
Mais um projeto de código aberto, o Ghost é um CMS tradicional que também oferece APIs para consumo de conteúdo por geradores de sites Jamstack.

Além de poder criar seu conteúdo, escolher um tema, gerar seu site e hospedá-lo com o serviço de hospedagem oficial, você pode controlar tudo por conta própria assim como no Netlify CMS e Strapi. A grande diferença entre eles e o Ghost é que ele é bastante especializado em criar sites no estilo de blogs ou publicações de jornal.

O Ghost também conta com uma grande quantidade de integrações para facilitar a sua vida e permitir que você construa um site bastante completo sem ter que sequer escrever uma única linha de código.

## Como publicar sites Jamstack

Sites Jamstack podem assumir diversas formas, dependendo das funcionalidades que você implementar e das ferramentas que utilizar. Porém, você provavelmente não precisará muito mais do que uma CDN para hospedá-los. Algumas boas opções de serviços que se especializaram em hospedar este tipo de sites são: Netlify e Vercel.

As duas plataformas são muito similares e oferecem uma forma fácil de criar fluxos de integração contínua para seu repositório git e publicar arquivos estáticos ou funções serverless em produção. Com diversas funcionalidades configuradas por você, é relativamente simples apontar uma destas plataformas para o repositório do seu projeto, definir um domínio e publicar seu site.

Uma das funcionalidades que mais me chamou atenção nos dois foi o “deploy atômico”. Para cada commit no seu repositório, o Netlify e o Vercel criam um novo deploy e um link que pode ser acessado pra sempre. Isso torna simples pré-visualizar mudanças antes de irem para produção ou comparar diferentes versões antigas do seu site.

Além dos serviços oferecidos pelos dois, a Netlify se destaca com alguns adicionais. Lá você pode criar fluxos de otimização de arquivos como .html e imagens, testes A/B, integrar com um Analytics do lado do servidor, implementar autenticação e até guardar dados de formulários sem criar APIs manualmente.

Apesar destas platformas tornarem muito fácil a publicação de sites Jamstack, você não precisa utilizá-las. Em vez de uma plataforma tudo-em-um, pode fazer sentido para você publicar e hospedar o seu site em lugares como na AWS S3 ou até em VPSs da Digital Ocean.

## Desvantagens de sites Jamstack

Todas as arquiteturas vêm com vantagens e desvantagens. Já que o foco do Jamstack é em pré-renderizar páginas e utilizar JavaScript consumindo APIs para torná-las dinâmicas, sites que possuem páginas com conteúdo que mudam muito não são os melhores candidatos para esta arquitetura.

Alguns exemplos de sites que seriam melhor implementados com outra arquitetura são:

- Webapps onde o conteúdo muda de usuário para usuário em experiências logadas, principalmente os que expõem conteúdo de acordo com níveis diferentes de permissão
- Sites em que o conteúdo se baseia em computação do lado do cliente, como ferramentas de edição de fotos ou blocos de notas.
Entretanto, isso não significa que as ferramentas que mencionamos aqui também não sejam úteis para estes tipos de sites. Com o Next.js, por exemplo, você pode implementar APIs, integrá-las na criação da parte estática do seu site e criar experiências que executam apenas no navegador – tudo integrado em uma arquitetura simples e pré-configurada.

Mesmo que você não esteja criando um site que combina perfeitamente com a arquitetura Jamstack, vale a pena utilizar alguns dos seus conceitos – como a pré-renderização de conteúdo – para melhorar a performance do seu projeto.

## Links

[jamstack.org](https://jamstack.org/)

[por que construir um site usando jamstack?](https://triangulo.dev/posts/o-que-e-jamstack/#por-que-construir-um-site-usando-jamstack)


<iframe width="560" height="315" src="https://www.youtube.com/embed/Xqaa2zgdWWo?si=NbLbBj7uEZ5do6b7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>