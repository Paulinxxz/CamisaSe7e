# CamisaSe7e – Catálogo de Camisas de Futebol

## Sobre o projeto

O CamisaSe7e é uma aplicação web desenvolvida para cadastrar e visualizar camisas de futebol. O sistema permite registrar informações como nome da camisa, time, tamanho, preço e quantidade em estoque.

## Tecnologias utilizadas

- Node.js
- Express
- EJS
- MySQL
- MySQL2
- HTML
- CSS

## Banco de dados

O projeto utiliza o banco de dados `camisase7e`, com a tabela `camisas`.

A tabela possui os seguintes campos:

- id
- nome
- time
- tamanho
- preco
- estoque

Para criar o banco e inserir os registros iniciais, execute o arquivo `script.sql` no MySQL Workbench.

## Como executar o projeto

1. Instale o Node.js e o MySQL.
2. Clone ou baixe este repositório.
3. Abra a pasta do projeto no terminal.
4. Instale as dependências:

```bash
npm install
```

5. Instale os pacotes adicionais:

```bash
npm install mysql2 dotenv
```

6. Crie um arquivo `.env` na pasta principal e configure a senha do MySQL:

```env
DB_PASSWORD=sua_senha
```

7. Confira se o MySQL Server está funcionando.
8. Inicie a aplicação:

```bash
npm start
```

9. Acesse pelo navegador:

`http://localhost:3000`

## Funcionalidades

- Visualização das camisas cadastradas.
- Cadastro de novas camisas.
- Armazenamento dos dados no MySQL.
- Exibição automática dos registros na página inicial.

## Integrantes

- Paulo Roberto Avante Friche
- Huggo Henrique da Silva Godoy
- Eduardo Augusto Miranda

## Disciplina

Linguagem de Programação I

## Professor

Leandro Luis Pauro