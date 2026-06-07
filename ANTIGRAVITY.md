# NotaTop - Guia Rapido Para Antigravity

## Missao

Implementar o MVP mobile do NotaTop com React Native, Expo, TypeScript e Supabase.

## Antes De Codar

Leia nesta ordem:

1. `AGENTS.md`
2. `docs/08-decisoes-em-falta-resolvidas.md`
3. `docs/09-contrato-app-mobile.md`
4. `docs/10-contrato-supabase.md`
5. `docs/11-backlog-implementacao.md`
6. `docs/12-guia-visual-e-ux.md`
7. `specs/mobile-mvp.spec.md`

## Escopo Atual

Implementar apenas o app mobile MVP.

Incluido:

- bootstrap Expo;
- autenticacao;
- perfil academico;
- verificacao de aluno;
- publicacao bloqueada para nao verificados;
- submissao de conteudo;
- marketplace;
- favoritos;
- desbloqueio demo;
- biblioteca;
- visualizador com marca d'agua.

Fora do escopo:

- pagamentos;
- painel web;
- chat;
- ranking avancado;
- download livre;
- publicacao nas lojas.

## Primeira Tarefa Recomendada

Comece pelo Epico 0 em `docs/11-backlog-implementacao.md`.

Nao avance para autenticacao antes de:

- criar app Expo;
- configurar Expo Router;
- configurar tema;
- criar componentes UI base;
- configurar Supabase client;
- configurar TanStack Query.

## Regras Criticas

- Aluno nao verificado nao pode publicar.
- O app nao pode usar service role key.
- Ficheiros devem ser privados.
- Pagamentos nao entram no MVP.
- A interface deve estar em portugues.
