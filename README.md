# Projeto Editora Bastet   <img style=" width: 50px;  height:auto; margin-left: 20px;" src="https://s3-alpha-sig.figma.com/img/a87e/41f8/256846d6a9fd32e34b9eca4830f6d786?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kzehCGAYflPX6uuFlM2Y3-BeeBgNMuSba45J7xkQkg9PefVuOpdYaj5Jup2p8Z3sFOR9W~1oIwnF7XTQ32wP4-52hI1cTWSrap6s9JY0rXuWUQ959KCZLH4yz81PedP6EC36fE6wT1dZQtzNsIYECNSNtFWkeCAlyNF1H9DnkjwE1epnyF04feKvgMWHeMVYnH1tw-yaIBLQgcGD4SDQsemVUFx9H9Z6a1p~dx56ERyvlObJx0x-fvdJH-UPB7W4210tYoiR~eB-7OBLGUzHQOuIOcVf0D7z-fu~gSMHN0d2W7IXfgLfpwqevSWvkwkTKRAsjhbNLlQ1hKmxHxQWYA__" alt="Logo da Editora">

Bem-vindo ao repositório do projeto **Editora Bastet**! Este projeto foi desenvolvido por uma equipe dedicada de nove programadores, e nosso objetivo é criar uma plataforma robusta e intuitiva para a administração e visualização de livros de diversos gêneros, incluindo romance, clássicos, fantasia, mistério, suspense e muito mais.

## 💻 Desenvolvedores

A equipe é composta pelos seguintes Desenvolvedores:

* **ALEXSANDRA MARIA DE CAMPOS** - *Banco de dados* - [GitHub](https://github.com/AlexsandraMCampos)
* **BRENNON MEIRELES DE SOUZA**  - *Front-end* - [GitHub](https://github.com/BrennonMeireles)
* **EMERSON VIEIRA DE OLIVEIRA**  - *Back-end* - [GitHub](https://github.com/Emerson757)
* **JHAMIM MENDES DA SILVA**  - *Back-end* - [GitHub](https://github.com/Jhamim-py)
* **KAMILA CAVALCANTE MARINHO** - *Front-end* - [GitHub](https://github.com/kamimarinn)
* **LUCAS MACIEL VALADÃO** - *Front-end* - [GitHub](https://github.com/lucasmvaladao)
* **NICOLAS GABRIEL BUSTAMANTE LOPES** - *Back-end* - [GitHub](https://github.com/NicolasLopes29)
* **PEDRO VINÍCIUS DOS SANTOS** - *Banco de dados* - [GitHub](https://github.com/Pedro-V7)
* **VINICIUS GOMES LINS** - *Banco de dados* - [GitHub](https://github.com/VGLink)

## 🛠️ Construído com

Aqui estão as ferramentas que utilizei para criar este projeto:

**Frontend**
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Linguagem de marcação para estruturação de páginas web.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Linguagem de estilo para estilizar elementos HTML.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Linguagem de programação para interatividade e dinamismo.
* [ReactJs](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
* [Vite](https://vitejs.dev/) - Build tool para aplicações web modernas.
* [Figma](https://www.figma.com/) - Ferramenta de design colaborativo para criar interfaces de usuário.

**Library**
* [ANT Design](https://ant.design/) - Uma biblioteca de UI para React.

**Backend**
* [Express.js](https://expressjs.com/) - Framework web para Node.js.
* [cors](https://www.npmjs.com/package/cors) - Middleware para habilitar o controle de acesso a recursos de um servidor.
* [bcrypt](https://www.npmjs.com/package/bcrypt) - Biblioteca para hashing de senhas.
* [dotenv](https://www.npmjs.com/package/dotenv) - Carregar variáveis de ambiente de um arquivo `.env`.
* [email-validator](https://www.npmjs.com/package/email-validator) - Validação de endereços de e-mail.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Implementação de JSON Web Tokens (JWT).
* [mongoose](https://mongoosejs.com/) - ODM (Object-Document Mapping) para MongoDB.
* [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript server-side.
* [axios](https://axios-http.com/) - Cliente HTTP baseado em promessas para o navegador e Node.js.

**Banco de Dados**
* [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL orientado a documentos.

**Controle de Versão**
* [Git](https://git-scm.com/) - Sistema de controle de versão distribuído.
* [GitHub](https://github.com/) - Plataforma de hospedagem de código-fonte e colaboração.

## ⚙️ Funcionalidades do Projeto

Nossa plataforma possui as seguintes funcionalidades principais:

*  **Catálogo de Livros:** Visualização de uma lista de livros disponíveis, categorizados por gênero.
*  **Detalhes do Livro:** Visualização de informações detalhadas sobre cada livro.
*  **Gerenciamento de Livros:** Ferramentas para adicionar, editar e remover livros do catálogo (disponível para administradores).
*  **Autenticação e Autorização:** Implementação de sistema de login e controle de acesso utilizando JWT.
*  **Pesquisa:** Função de pesquisa para encontrar livros específicos ou por categoria.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

eu preciso de uma imagem da estrutura do projeto 
 
## Como Executar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/editora-de-livros.git
2. **Instale as dependências do backend:**
   ```bash
   cd editora-de-livros/backend
   npm install


3. **Instale as dependências do frontend:**
   ```bash
    cd ../frontend
    npm install


4. **Configure as variáveis de ambiente:**
Crie um arquivo .env na raiz do diretório backend com as seguintes informações:

   ```bash
   DB_USER=login
   DB_PASS=8ToI3JVCCxxyIrHN
   SECRET=iqwdg873t19dqhq9uh752615@$$%AAAFGY%$YIHUFYTD
   
5. **Inicie o servidor backend:**

    ```bash
    cd ../backend
    npm start

6. **Inicie o servidor frontend:**

    ```bash
   cd ../frontend
   npm run dev
    
7. **Acesse a aplicação no seu navegador:**

Clique no link gerado pelo vite ele abrira o site no seu navegador padrão (exemplo http://localhost:3000.)

<br>

**Contribuição**
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. Para grandes mudanças, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

**Licença**
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Agradecemos por conferir nosso projeto! Esperamos que nossa plataforma de Editora de Livros seja útil e agradável de usar. Se tiver qualquer dúvida ou sugestão, não hesite em nos contatar.
