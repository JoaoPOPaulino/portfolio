# Portfólio — João Pedro

Portfólio em Angular com apresentação pessoal, projetos, filtros por categoria, versões em português e inglês e formulário de contato com EmailJS.

## Desenvolvimento

```bash
npm ci
npm start
```

## Validação

```bash
npm test -- --watch=false
npm run build:pages
```

O build para GitHub Pages usa a base `/portfolio/` e gera os arquivos em `dist/portfolio/browser`. Para hospedagem na raiz de outro domínio, use `npm run build`. Publicar o build é uma etapa separada.

## Atualizar conteúdo

- Projetos e links: `src/app/components/projects/projects.ts`.
- Textos em português e inglês: `src/app/service/translation.service.ts`.
- Foto, currículos e imagens: `public/`.
- Paleta e estilos globais: `src/styles.css`.
- Contato: `src/app/components/contact/`. O EmailJS mantém o destinatário no template do serviço; não coloque senhas ou chaves privadas no frontend. A configuração pública existente foi preservada.

O destaque do gerador de orçamentos inclui uma captura com dados fictícios. Atualize a imagem quando houver mudanças relevantes na aplicação. Cadastre apenas links reais; projetos sem demonstração podem exibir somente o código.
