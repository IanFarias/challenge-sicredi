# Desafio Sicredi
![image](https://user-images.githubusercontent.com/64112672/214974347-4c55c96a-2ed9-4305-b123-7feb4736a5f3.png)


## 💻 Tecnologias/ferramentas:

### No Backend:
- [Java](https://java.com/pt-BR/) 
- [Spring boot](https://spring.io/projects/spring-boot) 
- [JobRunr](https://www.jobrunr.io/en/)
- [MySQL](https://www.mysql.com/)
- [FlyWay](https://flywaydb.org/documentation/usage/plugins/springboot)

<br/>

### No Frontend:
- [ReactJS](https://pt-br.reactjs.org/) 
- [Vite](https://vitejs.dev/) 
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [React-Hook-Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [React Modal](http://reactcommunity.org/react-modal/)

### :electric_plug: Pré-Requisitos:
- NodeJS v16.10.0
- Java 17

**Clone este repositório**
```
https://github.com/IanFarias/challenge-sicredi.git
```
<br/>

### DB da aplicação (MySQL):
> Configure um banco de dados MySQL
<br/>

### - No back-end da aplicação (IntelliJ - Java): 
> Java 17
 -Instale em sua máquina o ambiente de desenvolvimento - [IntelliJ Idea](https://www.jetbrains.com/pt-br/idea/download/)

<p>
Entre no diretório 'challenge-api' e abra o projeto no IntelliJ, automaticamente a ferramenta Maven, deve buscar e atualizar todas as dependências, 
mas caso isso não ocorra, vá na aba **View -> Tool Windows -> Maven -> LifeCycle -> Install**, para caso, fique faltando algo, seja instalado.
  
> Configure as variáveis de ambiente do projeto no IntelliJ:
    username: ${DB_USER}
    password: ${DB_PASSWORD}
    url: ${DB_URL}
  
Com as variáveis de ambiente configuradas, a aplicação poderá ser iniciado. Ao iniciar, o FlyWay automaticamente rodará as migrations das tabelas no banco configurado.
  
Para rodar a aplicação, encontre o arquivo: ChallengeapiApplication.java e clique em Run (➥ / ▷)
Por padrão, a aplicação ira rodar nessa URL: http://localhost:8080/challenge-api
<p/>
<br/>

### - No front-end da aplicação (Visual Studio Code - ReactJS): 
> Baixe o editor de código fonte [Visual Studio Code](https://code.visualstudio.com/) e instale em sua máquina um dos gerenciadores de pacote a seguir [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable) ou [NodeJs(NPM)](https://nodejs.org/en/download/)

<p>
Entre no diretório challenge-app e abra o projeto no VSCode, abra o terminal (Ctrl+ ' ) e digite: yarn install ou npm install (dependendo do gerenciador acima escolhido)
 
> Crie e Configure o arquivo na '.env' na raíz no projeto da forma como está no arquivo '.env.example'. E coloque a URL que está rodando a API.
 ```
 VITE_API_URL=
 ```
 
Para rodar a aplicação, digite yarn dev ou npm run dev e aguarde iniciar a rota: http://127.0.0.1:5173/
</p>
