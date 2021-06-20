# Projeto BandFinder - Desafio Intergalaxy

Este projeto consiste em um simples SPA que busca informações de determinada banda nas APIs: Youtube Data V3 e TicketMaster Discovery API.

Para este projeto, utilizou-se a biblioteca Frontend React.

As chaves para realização das buscas nas APIs são incluídas dentro da pasta '/src/API', onde se encontra a lógica para comunicação com as APIs.

Foi procurado componentizar o Aplicativo de modo a dividi-lo entre os seguintes Componentes:
- App (o componente que contém os próximos);
- SearchBar - o componente para input da pesquisa a ser realizada pelo usuário, que passará a informação para o componente App;
- Banner - o componente que fará a renderização da imagem e informações da banda extraídas da API TicketMaster;
- Card - o componente que renderizará Thumbnail, título, informação e vídeo para cada retorno da API Youtube Data V3; o número de resultados está estipulado em 10, e pode ser alterado em Youtube.js -> maxResults (valor máximo: 50).

Card e Banner são Componentes Stateless, utilizados apenas para renderização de informações. A lógica estará armazenada majoritariamente no componente App.

## Styles

Para estilo e aparência do App, preferiu-se utilizar pré-processador SASS, juntamente com Bootstrap/React-Bootstrap.
Como trata-se de um projeto pequeno, poucos componentes do Bootstrap foram utilizados, juntamente com classes que auxiliaram na construção da responsividade do aplicativo.
Utilizou-se principalmente os componentes Buttons e Input do React-Bootstrap, e procurou-se seguir a paleta de cores do tema 'Dark', onde poucas cores foram utilizadas, buscando-se obter um contraste entre regiões de leitura e imagem de fundo.

Para os cards, utilizou-se a técnica no css de backdrop-filter (com Blur), para dar o efeito "Glass". Isso facilitou a criação do contraste com o fundo, e para os Browsers onde a propriedade não é reconhecida, o decréscimo de qualidade será pequeno.

Utilizou-se também da biblioteca React Icons para os ícones de redes sociais e da barra de pesquisa.

## imports

Para as requisições e tratamento das informações recebidas pelas APIs, utilizou-se a biblioteca Axios.
Utilizou-se também a função "decode" da biblioteca "html-entities" para tratar o texto recebido pela API Youtube Data.
Além disso, como já mencionados, os módulos node-sass, react-bootstrap e Bootstrap foram utilizados para estilização do projeto.

## Buscando informações

Quando aplicamos o Submit da SearchBar, uma função assíncrona em App é chamada - handleSearch.
Essa função envia a solicitação às APIs, e se houver retorno de erro na solitação, a lógica de renderização condicional é iniciado com o State "Alert". mostra-se na tela apenas uma mensage: "Ooops! Something went wrong. Try again Later :)".

Caso contrário, enviamos aos componentes "children" as informações coletadas das APIs.
Essa lógica de renderização condicional é a de curto circuito do Javascript, não sendo exclusiva do React:
"{ alert && ...}"
Sendo "alert" falso, o restante não entrará na renderização do componente.

## Youtube API

Os componentes Cards recebem as informações para renderização via props, como endereço do Thumbnail, endereço de vídeo, título e descrição do vídeo.

Para acelerar o carregamento da página, inicialmente somente a imagem (thumbnail), título e descrição do vídeo. Ao clicar no botão "open video", o vídeo é então embedado no lugar da imagem, permitindo que a pessoa o execute e abra em tela cheia.

## Ticketmaster API

O TicketMaster Api retorna alguns dados importantes da banda pesquisada, como imagens, gênero, redes sociais, etc. Porém não há um padrão específico, em alguns casos a informação pode estar faltante. Para tal, é procurado colocar alguns mecanismos protetores para que, no caso de informação faltante, a página renderize normalmente. Caso a API não tenha informações sobre determinado artista, apenas os vídeos serão renderizados.

A primeira proteção para tal, é implementada com Try and Catch, e em seguida algumas informações são testadas dentro do JSX, como por exemplo, os links de redes sociais. Caso não haja rede social específica, o botão não é acionado ao clique.



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).