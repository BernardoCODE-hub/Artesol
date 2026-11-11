# Artesol — loja virtual

Prévia visual responsiva da loja Artesol, construída sobre a base existente de React, TypeScript e Vite.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Executar localmente

```powershell
npm install
npm run dev
```

Para validar ou gerar a versão estática:

```powershell
npm run lint
npm run build
npm run preview
```

## Configuração opcional do WhatsApp

Copie `.env.example` para `.env` e preencha `VITE_WHATSAPP_NUMBER` com o número comercial no formato internacional, somente dígitos, incluindo o código do país. Por exemplo, use `55` seguido do DDD e do número. Variáveis com prefixo `VITE_` são públicas e ficam disponíveis no navegador; não coloque senhas ou segredos nelas.

Sem esse número, o site não exibe um link de contato não configurado.

## Escopo desta etapa

Esta entrega é somente a interface visual: não há API, banco de dados, autenticação ou persistência de produtos e perfil. O catálogo começa vazio para não apresentar produtos, imagens, categorias ou preços inventados. O perfil é uma prévia; os dados não são salvos e a alteração de senha permanece desabilitada até existir autenticação real no backend.

Para transformar a prévia em loja operacional, conectar um backend seguro e o banco escolhido pelo responsável, cadastrar o catálogo oficial e configurar os contatos reais da Artesol. O domínio personalizado também dependerá do domínio registrado e da configuração de DNS/hospedagem.

## Estrutura principal

- `src/App.tsx`: interface da loja, prévia administrativa e estados visuais do carrinho.
- `src/App.css` e `src/index.css`: identidade visual e estilos responsivos.
- `public/artesol-logo.png`: logo oficial fornecida para a interface e o favicon.
- `vite.config.ts`: configuração existente do Vite.
