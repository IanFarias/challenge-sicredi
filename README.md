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
Ao abrir o projeto no IntelliJ, automaticamente a ferramenta Maven, deve buscar e atualizar todas as dependências, 
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
