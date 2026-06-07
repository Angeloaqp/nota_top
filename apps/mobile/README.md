# apps/mobile

App mobile do NotaTop para Android e iOS.

## Stack

- React Native + Expo + TypeScript
- Expo Router (navegação)
- Supabase JS SDK (backend)
- TanStack Query (dados remotos)
- React Hook Form + Zod (formulários)

## Começar

```bash
# Instalar dependências
npm install

# Copiar variáveis de ambiente
cp .env.example .env
# Editar .env com as credenciais reais do Supabase

# Iniciar o app
npm start
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm start` | Iniciar Expo dev server |
| `npm run android` | Abrir no Android |
| `npm run ios` | Abrir no iOS |
| `npm run typecheck` | Verificar TypeScript |

## Estrutura

```
app/              → Telas (Expo Router file-based routing)
  (auth)/         → Telas de autenticação
  (app)/          → Telas da área principal (tabs)
src/
  components/ui/  → Componentes base (Button, Card, Badge, etc.)
  features/       → Lógica por feature
  lib/            → Configuração (Supabase, Query, env)
  services/       → Serviços de dados
  styles/         → Tema visual
  types/          → Tipos TypeScript
```

## Documentos Obrigatórios

Antes de implementar nesta pasta, leia:

- `../../docs/09-contrato-app-mobile.md`
- `../../docs/11-backlog-implementacao.md`
- `../../docs/12-guia-visual-e-ux.md`

## Regras

- Não implementar pagamentos
- Não implementar painel web
- Não usar service role key
- Não permitir publicação sem verificação
- Interface em português
