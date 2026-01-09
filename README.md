# Organo

![Thumbnail do projeto. O título é “Organo - Projeto React do zero.” e o Subtítulo é “adaptado por Bianca Chiquinelli.”](./src/imagens/organo.png)
sistema de cadastro e gerenciamento de colaboradores, des da criaçaõ da estrutura inicial, implementando a interface a partir de um layout do Figma, para entender conceitos centrais do React. O projeto foi desenvolvido a partir dos cursos "React: desenvolvendo com javascript"
Este repositório apresenta **minhas contribuições específicas** e conhecimentos adquiridos no desenvolvimento da aplicação.

Nele, o usuário pode cadastrar colaboradores por meio de um formulário, associá-los a uma categoria, e a aplicação reage dinamicamente ao estado, exibindo os dados na tela conforme as interações.

## Minhas Contribuições

- **Inicialização, estruturação e refatoração do projeto:** O projeto foi iniciado com Create React App (CRA), seguido da remoção de arquivos e imports desnecessários do boilerplate para manter o código limpo e organizado.
  Como apoio ao desenvolvimento, foi utilizado o React.StrictMode, que atua apenas em ambiente de desenvolvimento, sem impactar a interface ou a versão de produção, ajudando a identificar alertas e erros comuns antecipadamente.
- **Criação e implementação de componentes:** Foram desenvolvidos e integrados diversos componentes reutilizáveis, seguindo os princípios de separação de responsabilidades e composição do React, facilitando a reutilização, manutenção e evolução da interface.
- **Gerenciamento de estado com React Hooks:** A comunicação entre componentes ocorre via props, aplicando conceitos como:

- Interpolação e concatenação de props.
- Passagem de funções como propriedades para comunicação filho → pai.
- Evitar prop drilling excessivo, mantendo uma hierarquia clara (a Context API foi apenas apresentada em aula, mas não utilizada no projeto).
- **fluxo de dados com React Hooks:** O controle de dados da aplicação foi feito utilizando o hook useState, especialmente para:

- Gerenciar os valores dos inputs do formulário.
- Controlar o fluxo de cadastro de colaboradores.
- Centralizar o estado principal no componente App.
- **Renderização dinâmica e controle condicional:** A renderização da aplicação é feita de forma dinâmica utilizando o método map() para exibir os times e seus colaboradores, combinada com renderização condicional para evitar a exibição de times vazios. Nesse processo, a prop key foi aplicada corretamente nas listas, garantindo melhor desempenho e prevenindo avisos do React.

  <!-- ![Demonstração do ByteBank: Tela de painel financeiro exibindo gráficos de variação de cotações de moedas e horário da variação, atualizando a cada 5 segundos. A direita uma lista de conversão da moeda para real. A barra lateral esquerda apresenta opções de navegação e um avatar. O tom é informativo.](https://imgur.com/gallery/projeto-bytebank-WmwOjRP#1AWAZmD) -->

  ![](./src/imagens/Organo-pt1.png)
  ![](./src/imagens/Organo-pt2.png)

## Tecnologias Utilizadas

- HTML5
- CSS 3
- JavaScript (ES6+)
- React
  ⚙️ Técnicas:
- Visualização de Dados: Integração da biblioteca Chart.js para renderização de gráficos dinâmicos, transmitindo clareza e confiabilidade nas cotações.
- Requisições Assíncronas: Uso do Axios para consumir dados de API em tempo real, garantindo atualização rápida e sem travamentos.
- Controle de Assincronicidade: Aplicação prática de async/await, setInterval() e Date() para lidar com chamadas simultâneas e manter a aplicação responsiva.
- Paralelismo com Workers: Implementação de Web Workers para executar multithreads, permitindo consultas concorrentes a diferentes moedas sem comprometer a performance.
- Organização de Código: Criação de funções auxiliares (horario(), atualizaGrafico(), cotacao()) para modularidade, reuso e manutenção facilitada.
- Build e Escalabilidade: Configuração com Vite, aproveitando inicialização rápida, suporte nativo a módulos ES e estrutura otimizada para evolução do projeto.

## Como Ter Acesso ao Projeto

- **Versão online**: [Clique aqui](https://organo-omega-nine-12.vercel.app/)
- **Rodar localmente**:

1. Clone este repositório: ```bash
   git clone https://github.com/chiquinelli-bia/Organo.git

   ```

   ```

2. Acesse a pasta do projeto:

   ```bash
   cd Organo

   ```

3. Instale as dependências:

   ```bash
   npm install

   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev

   ```

5. Abra no navegador o endereço exibido no terminal e Navegue pelas funcionalidades implementadas.

## Créditos

- Projeto original: ![Acesse aqui.](https://cursos.alura.com.br/course/react-desenvolvendo-javascript)
- Instrutor(es) e curso: Paulo Silveira e Vinicios Neves, ![React: desenvolvendo com javascript](https://cursos.alura.com.br/course/react-desenvolvendo-javascript) - Este repositório destaca **apenas minhas contribuições** ao projeto
