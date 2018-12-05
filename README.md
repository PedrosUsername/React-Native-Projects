# Meeting-App<sup><sup><sup>v1.0</sup></sup></sup>
 
Um aplicativo amigável, feito para criar amizades!

## Código Fonte

Para testar o aplicativo no Ubuntu 18.04 com react-native, um aparelho Android e um cabo USB.

-**React Native**
* siga o tutorial presente em  https://facebook.github.io/react-native/docs/getting-started para setar o ambiente no seu computador.

-**Executando o código**
* Clone este repositório.
* Acesse a pasta *MeetingApp* pelo terminal
* Rode o comando $`npm install`
* Ligue o aparelho Android ao Ubuntu com o cabo USB. 
* Rode o comando $`react-native run-android`

-**Caso o ambiente sinta falta de alguma dependência**
 * Rode o comando $`npm install [dependencia]`
 * Rode o comando $`react-native run-android`

## Entendendo o Modelo de Negócio
O aplicativo em questão foi pensado e desenvolvido na disciplina de [Linguagens de Programação](https://matriculaweb.unb.br/graduacao/oferta_dados.aspx?cod=116343&dep=116) da UnB. O objetivo do projeto foi a criação de uma "plataforma de mineração de pessoas" baseada em gostos pessoais em comum.
Para isso foi necessário o desenvolvimento de formulários (para coleta de informações)e de um módulo de autenticação de usuários (para controle de usuários), a criação de sistemas de busca baseados em SQL (para pesquisas), Servidor de dados (API que liga o banco de dados aos serviços), banco de dados, entre a execução de outros serviços adicionais.
O aplicativo permite, ao usuário autenticado, encontrar perfis de usuários semelhantes ao seu através de pesquisas feitas no banco de dados, focadas em algumas das várias características que o usuário declara em seu perfil. Isso facilita o encontro de pessoas com interesses em comum.
Outra funcionalidade interessante é a pesquisa manual, que permite o encontro de perfis com determinadas características.
