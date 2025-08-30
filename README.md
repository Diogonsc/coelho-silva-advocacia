# Coelho & Silva Advocacia Criminal

Site institucional do escritório de advocacia criminal Coelho & Silva, desenvolvido com React, TypeScript e Vite.

## 🚀 Deploy na Vercel

### Pré-requisitos
- Conta na [Vercel](https://vercel.com)
- Repositório no GitHub/GitLab/Bitbucket

### Passos para Deploy

1. **Conecte seu repositório à Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe seu repositório

2. **Configurações do Projeto:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build:prod`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

3. **Variáveis de Ambiente (se necessário):**
   - Não são necessárias para este projeto

4. **Deploy:**
   - Clique em "Deploy"
   - Aguarde o build ser concluído

### Configurações Específicas

O projeto já está configurado com:
- ✅ `vercel.json` para roteamento SPA
- ✅ Otimização de imagens
- ✅ Componentes com fallback de imagens
- ✅ Build otimizado para produção
- ✅ Redirecionamentos configurados

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build:prod

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI (shadcn/ui)
│   └── *.tsx           # Componentes específicos
├── assets/             # Imagens e recursos estáticos
├── lib/                # Utilitários e configurações
├── hooks/              # Custom hooks
└── pages/              # Páginas da aplicação
```

## 🎨 Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes de UI
- **Radix UI** - Componentes acessíveis
- **React Router** - Roteamento

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🚀 Performance

- ✅ Lazy loading de imagens
- ✅ Code splitting automático
- ✅ Otimização de assets
- ✅ Pré-carregamento de imagens críticas
- ✅ Compressão de imagens

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build padrão
- `npm run build:prod` - Build otimizado para produção
- `npm run preview` - Preview do build
- `npm run lint` - Verificação de código
- `npm run type-check` - Verificação de tipos TypeScript

## 📞 Contato

Para suporte técnico ou dúvidas sobre o deploy, entre em contato com a equipe de desenvolvimento.
