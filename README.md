![Launchbase](https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png)


----------


# Desafio Foodfy - Launchbase **Rocketseat**  #

## Site de estudos do bootcamp Launchbase ##

### OBJETIVO ###

Construir um site de receitas, com receitas de vários chefes. Utilizando todas as técnologias aprendidas durante o bootcamp.



## Tecnologias utilizadas

- **[NodeJS](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/)**
- **[Express Session](https://github.com/expressjs/session)**
- **[Method Override](https://github.com/expressjs/method-override)**
- **[Multer](https://github.com/expressjs/multer)**
- **[PG](https://github.com/brianc/node-postgres/tree/master/packages/pg)**
- **[Connect PG Simple](https://www.npmjs.com/package/connect-pg-simple)**
- **[Bcrypt](https://github.com/dcodeIO/bcrypt.js)**
- **[Nodemailer](https://nodemailer.com/about/)**
- **[Nunjucks](https://github.com/mozilla/nunjucks)**
- **[Faker](https://github.com/Marak/Faker.js#readme)**

<br>
<br>

## Funcionalidades criadas

- [x] Controle de sessão (login e logout)

- [x] Cadastro de usuários

- [x] Edição de usuários

- [x] Remoção de usuários

- [x] Listagem de usuários

- [x] Recuperação de senha

- [x] Cadastro de chefs

- [x] Edição de chefs

- [x] Remoção de chefs

- [x] Listagem de chefs

- [x] Cadastro de receitas

- [x] Edição de receitas

- [x] Remoção de receitas

- [x] Listagem de receitas

- [x] Pesquisa de receitas

  

## Utilizando o projeto



Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)

- [Node.js](https://nodejs.org/en/)

  

  Para trabalhar com o código, é necessário o uso de um editor (eu utilizo o [VSCode](https://code.visualstudio.com/)).

  

### Como baixar o projeto na sua máquina? 



Há 2 formas de baixar o projeto:





### Instalação ###
#### Clonar o repositório
**DOWNLOAD**, bastando clicar no <a href="https://github.com/robsonsvicero/foodfy/archive/main.zip">link</a>; OU

**CLONAR**, digitando no terminal/Power Shell, já na pasta aonde deseja salvar o projeto: `https://github.com/robsonsvicero/foodfy.git`



#### Acesse a pasta do projeto pelo terminal/cmd
$ cd foodfy



#### Instale as dependências
$ npm install


### Configurando o banco de dados

Instale em seu computador o [PostgreSQL](https://www.postgresql.org/download/) e o [Postbird](https://www.electronjs.org/apps/postbird). Finalizando as instalações, ligue o PostgreSQL. 

No Windows, o processo para ligá-lo segue os seguintes passos:

```bash

# Abra o Powershell como administrador, e navegue até a pasta de instalação
$ cd "C:\Program Files\PostgreSQL\12\bin\"

# Inicie o postgres com o comando abaixo
$ .\pg_ctl.exe -D "C:\Program Files\PostgreSQL\12\data" start

# Após o uso, o comando para desligá-lo é
$ .\pg_ctl.exe -D "C:\Program Files\PostgreSQL\12\data" stop

```

Depois de ligar o PostgreSQL, acesse o Postbird e crie um banco de dados com o nome de foodfy. Feito isso, clique na opção de importar um arquivo .sql e importe o arquivo [foodfydb.sql](https://github.com/robsonsvicero/foodfy/blob/main/foodfydb.sql) presente neste respositório. Você pode checar se o banco foi importado verificando suas tabelas. Se tudo deu certo até aqui, o seu banco de dados já está criado. 



### Observações

Você deverá indicar suas informações de usuário e senha do postgres no arquivo [db.js](https://github.com/robsonsvicero/foodfy/blob/main/src/config/db.js).



### Populando o banco de dados

Para popular o banco de dados com informações fakes e geradas automaticamente, abra o terminal no diretório do projeto e execute o comando:

```bash

$ node seed.js

```



### O próximo passo é configurar o Mailtrap

O Mailtrap será responsável por simular uma caixa de e-mails para as funcionalidades de criar um usuário (a senha de acesso será enviada por e-mail) e de recuperar a senha. 

#### Configurando o Mailtrap

Entre no site do [Mailtrap](https://mailtrap.io/) e faça seu cadastro. Quando já estiver cadastrado, acesse a aba Inboxes, crie uma nova inbox com o nome de foodfy, entre no seção SMTP Settings e mude Integrations para Nodemailer. Agora copie o código gerado, cole no arquivo [mailer.js](https://github.com/robsonsvicero/foodfy/blob/main/src/lib/mailer.js) e faça algumas pequenas alterações para que fique semelhante a este:

```javascript

const nodemailer = require("nodemailer");

module.exports = nnodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "264dd54169b409",
    pass: "cf2aa9f58c739a",
  }
});

```

É importante que o código preenchido no aquivo mailer.js seja o gerado em sua conta do Mailtrap, caso contrário você não receberá os e-mails corretamente.



## Executando o projeto.

Finalizando todos os passos descritos acima com sucesso, agora podemos executar o projeto.



### Executando o projeto

```bash

# Acesse a pasta do projeto pelo terminal/cmd
$ cd foodfy

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3000 - acesse http://localhost:3000

```

### Observações

Ao acessar *localhost:3000* você estará na seção pública do foodfy. Para ter acesso ao setor administrativo entre em *localhost:3000/admin*. O administrador padrão do sitema tem o email *admin@mail.com* e senha *admin*. Os outros usuários que são gerados automaticamente possuem e-mails aleatórios e senha *1234*.

Pode ser que ao deletar um dos registros gerados automaticamente com o seeds, a imagem de referência de todos os outros seja perdida. Caso isto ocorra, crie outra imagem com o nome de *placeholder.png* na pasta *public/images*.



### Licença 



Esse repositório está licenciado pela ***\*MIT LICENSE\****. Para informações detalhadas, leia o arquivo [LICENSE](https://github.com/robsonsvicero/foodfy/blob/main/LICENSE). 





**Made with 💙 by Robson Svicero 🚀 [Linkedin](https://www.linkedin.com/in/robsonsvicero/)**

