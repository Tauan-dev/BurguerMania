[![Logo do ApiBurguerMania](https://cdn.discordapp.com/attachments/1125892268138713201/1312970064168878131/logo-nav.png?ex=674e6e29&is=674d1ca9&hm=d206061aaf6aca7bdd7b6d67e98644695eebe09d7a696445498d85dc921d3591&)](https://www.api-burguer-mania.com)

# **BurguerMania**

## **Descrição**

O **BurguerMania** é uma aplicação desenvolvida com Angular para gerenciar pedidos e exibir cardápios de um restaurante de hambúrgueres. O projeto foi projetado para ser totalmente responsivo, utilizando uma estrutura componentizada que facilita a reutilização de componentes em diferentes telas.

---

## **Índice**

1. [Visão Geral](#visão-geral)
2. [Instalação](#instalação)
3. [Uso](#uso)
4. [Funcionalidades](#funcionalidades)
5. [Contribuição](#contribuição)
6. [Licença](#licença)
7. [Contato](#contato)

---

## **Visão Geral**

O projeto foi criado como parte de uma atividade prática de estudo em Angular, com as seguintes características principais:

- **Totalmente responsivo**
- **Interface baseada em design fornecido via Figma**
- **Navegação dinâmica entre páginas usando roteamento Angular**
- **Estilo e tipografia consistentes definidos por variáveis globais em CSS**

---

## **Instalação**

Siga os passos abaixo para rodar o projeto localmente:

```bash
# Clone este repositório
git clone https://github.com/Tauan-dev/BurguerMania.git

# Acesse a pasta do projeto
cd BurguerMania

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
```

Após iniciar o servidor, acesse o projeto no navegador através do endereço:
http://localhost:4200/

## **Uso**

O **BurguerMania** possui as seguintes rotas principais:

1. **Home (`/`)**: Página inicial com botões para redirecionamento ao cardápio ou pedido.
2. **Cardápio (`/cardapio`)**: Exibe as categorias disponíveis no cardápio.
3. **Cardápio Completo (`/cardapio-completo`)**: Lista os hambúrgueres disponíveis.
4. **Cardápio Completo (`/cardapio-completo/:categoryId`)**: Lista os hambúrgueres disponíveis em uma categoria.
5. **Detalhes (`/detalhes/:id`)**: Mostra os detalhes de um hambúrguer específico.
6. **Pedido (`/pedido`)**: Permite ao usuário preencher e enviar um pedido.

### **Exemplo de Uso**

- Clique em **"Acessar Cardápio"** na Home para visualizar as categorias do cardápio.
- Na página de **Cardápio**, selecione uma categoria para ver os hambúrgueres disponíveis.
- Clique em um hambúrguer para visualizar seus detalhes ou preencher o formulário de pedido.

---

## **Funcionalidades**

- **Componentes Reutilizáveis**  
  Componentes como `Header`, `Button`, `Card`, e `Input` foram criados para garantir consistência visual e reutilização.

- **Roteamento Dinâmico**  
  Navegação entre as páginas do aplicativo implementada com o `RouterModule` do Angular.

- **Estilização Personalizada**  
  Uso de variáveis CSS para cores e tipografia, mantendo a consistência visual.

- **Formulário Interativo**  
  Formulário para enviar pedidos, validado com `ngModel`.

---

## **Contribuição**

Se você deseja contribuir para o projeto, siga as etapas abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-feature
   ```
