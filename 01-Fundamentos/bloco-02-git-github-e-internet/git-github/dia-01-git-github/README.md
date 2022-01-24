# Exercícios

## Parte 1 - Instalação e configuração

Vamos começar realizando a instalação e configuração do Git.

## Parte 2 - Criar conta no GitHub

* Crie sua conta no GitHub usando seu e-mail pessoal 🐙

## Parte 3 - Adicionando uma chave SSH na sua conta do GitHub

Neste passo, vamos aprender como adicionar uma chave SSH à sua conta do **GitHub** , o que vai te permitir fazer pushes e pulls sem ter que ficar digitando usuário e senha, como já explicamos.

## Parte 4 - O seu repositório no GitHub

Pronto! Agora que você já é capaz de gerenciar localmente seus códigos e também enviá-los para o **GitHub** , é hora de colocar a casa em ordem!

Antes de começar, siga as instruções da página sobre _[Portfólio de Exercícios](https://app.betrybe.com/course/real-life-engineer/exercise-portfolio/#o-que-e)_ para criar a estrutura de diretórios que usará ao longo de todo o curso para guardar seus exercícios.

Durante seu curso na Trybe , seus projetos serão entregues através de `pushes` nos repositórios do **GitHub** . Para podermos simular um exercício feito, você criará um arquivo `.txt` com um nome de sua escolha (Exemplo: `trybe-skills.txt` ) e utilizará o conteúdo abaixo.

```
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
```
No final, ao executar o comando `ls -l` na pasta de arquivos deste dia, você deverá receber um retorno parecido com:

```
ls -l

total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt
```
Agora vamos transformar essa pasta em um repositório **Git** :
* Retorne para a raiz da pasta de exercícios;
* Inicialize o repositório com `git init` ;
* Crie um arquivo de `README` utilizando o comando `touch README.md` ;
* Crie um `commit` inicial utilizando:

```
git add .
git commit -m "Initial commit"
```
* Vá até o seu GitHub e crie um repositório público , onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;
* >Dê ao repositório um nome descritivo, como por exemplo trybe-exercicios ;
* >⚠️ Lembre-se de não inicializar o repositório com um arquivo README.md , pois você já criou um nos passos anteriores! 😉
* Clique no botão SSH e então copie a URL do repositório;
* >Execute o comando para adicionar a URL ao repositório local git remote add origin "URL_DO_REPOSITÓRIO" ;
* Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v . Seu terminal deve conter algo similar a isso:

```
origin  git@github.com:john-snow/know-nothing.git (fetch)
origin  git@github.com:john-snow/know-nothing.git (push)
```
* Em que john-snow corresponde ao seu username e know-nothing ao nome que você deu ao seu repositório;
* Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro commit para o GitHub ! 🤩
* Execute o comando git push origin master no terminal;
* Vá até o seu GitHub e verifique as novas alterações.

## Parte 5 - Habilitando Two Factor Authentication no seu GitHub

Há um guia do próprio github ensinando como fazer esse processo _(neste link)[https://docs.github.com/pt/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication]_
