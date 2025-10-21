🚀 Extension Manager Pro: A Lista de Extensões Definitiva!
Seja bem-vindo(a) ao seu novo painel de controle!
Cansado de extensões que prometem tudo, mas bagunçam seu navegador? Este projeto é um dashboard elegante e funcional, feito para listar, gerenciar e filtrar suas extensões favoritas (ou aquelas que estão só ocupando espaço!).

É um projeto focado no puro front-end, demonstrando como usar HTML semântico, CSS modular e JavaScript moderno para manipular dados JSON e construir interfaces dinâmicas.

🛠️ Tecnologias Usadas (O Pura Gema do Front-End)
Aqui, a mágica acontece com o trio de ouro do desenvolvimento web, sem frameworks pesados!

HTML5 Semântico: A espinha dorsal do projeto. Tudo estruturado com data attributes (como data-base="cor", data-fetch="replace") para o JavaScript pegar carona e fazer a festa.

CSS3 Modular (@import): Para manter o estilo limpo e organizado (e com variáveis CSS customizadas, o famoso :root!), o projeto utiliza uma estrutura modular, importando diferentes arquivos de estilo para o header, container, etc.

JavaScript (ES6+ Módulos): O cérebro da operação! Utilizamos a sintaxe de módulos (import/export default) para organizar a lógica de busca de dados (fetch), a renderização dinâmica do DOM, e, claro, a lógica de filtragem dos cartões.

✨ Funcionalidades Principais
Se liga no que essa belezinha consegue fazer:

Exibição Dinâmica (JSON Power!):

O JavaScript busca um arquivo data.json com todas as informações das extensões (nome, descrição, logo e status de ativação).

Ele constrói e insere cada cartão (<div class="card">) no HTML em tempo real.

Filtro Turbinado (O Chefão do README!):

Com apenas um clique, você pode alternar entre ver Todas as extensões, apenas as Ativas (ativadas) ou as Inativas (desativadas).

Isso é feito com uma lógica simples e eficiente que gerencia o estado de filtro e chama a função de renderização novamente.

Toggle de Status (A Cereja do Bolo):

Cada cartão possui um switch (checkbox estilizado) para simular a ativação ou desativação de uma extensão.

Troca de Tema (Night Mode on/off):

Um botão no cabeçalho permite a troca de ícone e, através da manipulação de classes CSS, pode ser usado para implementar um modo claro/escuro (<main class="base" data-base="cor">).

🧠 Como o Filtro Mágico Funciona?
A parte mais legal é a lógica de filtragem, que segue um padrão limpo de gerenciamento de estado:

Dados Centralizados: Os dados brutos do JSON são carregados uma única vez e armazenados em uma variável (módulo data.js).

handleClick.js: Os botões de filtro (Todos, Ativos, Inativos) possuem event listeners.

Quando um botão é clicado, ele atualiza o estado de filtro (currentFilter = 'active').

fetchData.js (Renderização): A função de renderização é chamada. Ela NÃO busca o JSON de novo.

Ela consulta o estado de filtro atual (currentFilter).

Aplica o método .filter() nos dados brutos armazenados (ex: allExtensions.filter(item => item.isActive)).

Limpa o container (#json-container) e renderiza apenas os cartões que passaram pelo filtro.

Resultado: Uma experiência rápida, sem recarregar a página ou buscar dados desnecessariamente!

📂 Estrutura de Arquivos
A organização é a chave!

.
├── assets/
│ ├── images/ <-- Logotipos e ícones
├── css/
│ ├── geral.css
│ ├── header.css
│ ├── choice.css
│ ├── container.css
│ └── fetchUsers.css
├── js/
│ ├── data.js <-- Onde os dados e o filtro são armazenados (estado)
│ ├── fetchData.js <-- Lógica para buscar e renderizar (o motor)
│ ├── handleClick.js <-- Lógica dos botões de filtro
│ ├── replaceImg.js <-- Lógica de troca de ícones (lua/sol)
│ └── (outros módulos)
├── data.json <-- Sua fonte de dados (o JSON de extensões)
├── index.html <-- O HTML principal
└── script.js <-- Ponto de entrada (importa e inicia a aplicação)
💻 Para Rodar Localmente
Clone o Repositório:

Bash

git clone [LINK DO SEU REPOSITÓRIO]
cd [NOME-DO-REPOSITORIO]
Servidor Local: Como o projeto usa fetch para carregar o data.json e importa módulos (type="module"), ele precisa ser executado em um servidor local (o protocolo file:// não funciona bem nesses casos).

Você pode usar extensões do VS Code como Live Server.

Divirta-se! Abra o projeto no seu navegador e comece a filtrar suas extensões!

✒️ Desenvolvido por @Borges 2025
