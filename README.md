<h1  align="center"> Projeto LabFashion</h1>
<div align="center">

<img src="https://github.com/danitavareslobo/lab-fashion/assets/107322230/7a43a195-e4ca-4f7d-b05c-2566e1aad548" width= 300>
 
</div>
<br>
 
 
## Descrição do Projeto

Projeto desenvolvido para o Módulo de Front-End do curso DEVinHouse - Audaces do SENAI-SC. O Lab Clothing Collection é um software audacioso para gestão de coleções de moda no setor de vestuário desenvolvido para a LABFashion LTDA.

<br> 


## Status do Projeto

 Projeto entregue  :heavy_check_mark:
 <br>Aguardando correção para aplicar melhorias

<br>
 
 
## :hammer: Funcionalidades da Aplicação

- `Tela de Login` - Página contendo um formulário com campos de email e senha. Os campos de email e senha são obrigatórios, ao clicar no botão de Entrar e passa pela validação, verifica se é email e se a senha possui 8 caracteres, redireciona para tela de Dashboard, a tela contém ainda um redirecionamento para "Redefinir Senha" e "Cadastro".
- `Tela Redefinir Senha` - Página contendo um formulário com o campo de e-mail, esta tela possui um botão de voltar que redireciona o usuário para tela de login.
- `Tela de Cadastro` - Página contendo um formulário com os campos de nome, nome da empresa, cnpj, e-mail. Esta tela possui um botão de voltar que redireciona o usuário para tela de login.
- `Menu Lateral` - Componente contendo as opções Dashboard, Coleções, Modelos, Obter Ajuda, Enviar Comentários. 
- `Header` - Componente contendo ícone de notificações (sem ação), Botão Avatar sendo um dropdown sub-menu.
- `Sub-menu` - Sub-menu do Navbar com Botão de Logout redireciona para tela de Login (Conta e Configurações sem ação).
- `Dashboard` - Página contendo o Componente Cards e uma tabela contendo os 5 maiores orçamentos dentre as coleções, a tabela é formada pelas colunas de Nome da Coleção, Orçamento, Quantidade de Modelos e Responsável, ela é ordenada do maior para o menor valor em orçamento.
- `Cards` - Componente Card 1 e 2 contendo uma Propriedade para mostrar o valor. Componente Card 3 contendo uma Propriedade para trazer a informação de valor com a média em moeda BR
- `Página de Coleções` - Página contendo uma tabela com as colunas nome da coleção, estação + lançamento (deve ser um dado combinado entre as propriedades), responsável e orçamento, além do botão Criar Coleção que redireciona o usuário para tela de cadastro de coleção. Além disso, as linhas da tabela são clicáveis e o clique na linha redireciona o usuário para Editar Coleção.
- `Página Criar Coleção` - Página contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento. 
- `Página Editar Coleção` - Página contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento. Essa tela precisa recebe um parâmetro na rota para identificar que coleção o usuário deseja editar, e ainda mostra no formulário os dados da coleção ao carregar as informações sobre ela.
- `Página de Modelos` - Página contendo uma tabela com as colunas modeloID, nome do modelo, coleção relacionada e responsável, além do botão Criar Modelo que redireciona o usuário para tela de cadastro de modelo. Além disso, as linhas da tabela são clicáveis e o clique na linha redireciona o usuário para Editar Modelo.
- `Página Criar Modelo` - Página contendo um formulário com os campos nome, responsável, tipo (tag select do HTML com as opções: bermuda, biquíni, bolsa, boné, calça, calçados, camisa, chapéu, saia.), coleção relacionada (lista todas as coleções cadastradas no json-server) e dois “radio group” para verificar se o modelo possui bordado e se possui estampa.
- `Página Editar Modelo` - Página contendo um formulário com os mesmos campos presentes no Cadastro de Modelos. Essa tela recebe um parâmetro na rota para identificar que modelo o usuário deseja editar, e ainda mostra no formulário os dados do modelo ao carregar as informações sobre ele. Possui o botão Exluir.
- `API Fake` - Esse projeto precisou de uma API Fake, e para isso utilizamos o plugin json-server.

<br>


## Demonstração da Aplicação

<br>


https://user-images.githubusercontent.com/107322230/230229724-2785f6aa-e40a-402a-b23c-f17cea381715.mp4

<br>
<br>


https://user-images.githubusercontent.com/107322230/230229753-ada4c409-af43-4569-b268-241a34f8dac8.mp4


<br>

## Projeto Publicado

Vc pode acessar a Landing Page clicando aqui: :point_right: www.lab-clothing.danitavares.dev

<br>


## Acesso ao Projeto

Você pode acessar os arquivos do projeto clicando aqui: :point_right:  https://github.com/danitavareslobo/lab-fashion . 

Após baixar o projeto, você pode abrir o mesmo com Visual Code. 

Com o projeto aberto, execute o seguinte comando no terminal:

```sh
npm install
```

Execute o seguinte comando na pasta Data:

```sh
json-server --watch db.json
```

Abra o terminal na Pasta do Projeto e execute o comando abaixo para visualizar o projeto rodando:

```sh
ng serve --o
```

<br>


## Tecnologias Utilizadas
- `HTML`
- `CSS`
- `TypeScript`
- `Angular`
- `Bootstrap`

<br>


## Autoria do Projeto

| [<img src="https://user-images.githubusercontent.com/107322230/230226213-2a6c2774-cace-453a-b78c-9bd57fe045a5.jpg" width= 150><br><sub>Daniele Tavares Lobo</sub>](https://github.com/danitavareslobo) |
| :----: |
