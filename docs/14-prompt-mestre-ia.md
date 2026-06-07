# 14 - Prompt Mestre Para IA

Use este prompt no Antigravity ou em outro agente de IA antes de pedir implementacao.

```txt
Voce vai trabalhar no projeto NotaTop.

NotaTop e uma plataforma academica com app mobile separado da web. A primeira fase e implementar apenas o app mobile MVP, com backend real em Supabase, sem pagamentos e sem painel web.

Leia obrigatoriamente, nesta ordem:

1. README.md
2. docs/08-decisoes-em-falta-resolvidas.md
3. docs/09-contrato-app-mobile.md
4. docs/10-contrato-supabase.md
5. docs/11-backlog-implementacao.md
6. docs/12-guia-visual-e-ux.md
7. docs/13-guia-agentes-antigravity.md

Regras obrigatorias:

- O app mobile deve ser React Native + Expo + TypeScript.
- A navegacao deve usar Expo Router.
- O backend deve usar Supabase.
- Formularios devem usar React Hook Form + Zod.
- Dados remotos devem usar TanStack Query.
- O idioma da interface deve ser portugues.
- Pagamentos nao devem ser implementados nesta fase.
- Painel web nao deve ser implementado nesta fase.
- Aluno nao verificado nao pode publicar.
- Aluno verificado pode submeter conteudo.
- Submissoes pendentes nao aparecem no marketplace.
- Apenas posts publicados aparecem no marketplace.
- O desbloqueio deve ser demo, sem pagamento.
- Nao usar service role key no app mobile.
- Nao tornar ficheiros privados publicos.

Objetivo da primeira entrega:

Criar a base do app mobile e backend para demonstrar o fluxo:

1. aluno cria conta;
2. aluno completa perfil academico;
3. aluno envia dados para verificacao;
4. aluno aprovado recebe selo verificado;
5. aluno verificado submete conteudo;
6. conteudo aprovado aparece no marketplace;
7. outro aluno abre previa;
8. outro aluno desbloqueia demo;
9. conteudo aparece na biblioteca;
10. visualizador mostra marca d'agua.

Antes de codar, diga qual epico do backlog vai implementar. Depois implemente apenas esse epico e no final informe:

- ficheiros criados;
- ficheiros alterados;
- comandos executados;
- como testar;
- pendencias.
```

## Prompt Para Agente Backend Supabase

```txt
Implemente apenas o backend Supabase do MVP NotaTop.

Leia docs/10-contrato-supabase.md e crie:

- migrations;
- enums;
- tabelas;
- constraints;
- RLS;
- policies;
- buckets privados;
- seed data.

Nao implemente app mobile.
Nao implemente pagamentos.
Nao implemente painel web.

No final, explique como aplicar as migrations e como aprovar manualmente verificacoes/submissoes pelo Supabase Studio.
```

## Prompt Para Agente Mobile Foundation

```txt
Implemente apenas a fundacao do app mobile NotaTop.

Leia:

- docs/09-contrato-app-mobile.md
- docs/12-guia-visual-e-ux.md
- docs/11-backlog-implementacao.md

Crie:

- app Expo + TypeScript;
- Expo Router;
- estrutura de pastas;
- Supabase client;
- TanStack Query;
- tema visual;
- componentes UI base.

Nao implemente ainda todos os fluxos.
Nao implemente pagamentos.
Nao implemente painel web.
```

## Prompt Para Agente Auth/Profile

```txt
Implemente apenas autenticacao e perfil academico do NotaTop.

Leia:

- docs/09-contrato-app-mobile.md
- docs/10-contrato-supabase.md
- docs/11-backlog-implementacao.md

Implemente Epicos 1 e 2:

- login;
- cadastro;
- recuperacao de senha;
- sessao;
- completar perfil academico;
- leitura e atualizacao do perfil.

Nao implemente verificacao, publicacao ou marketplace ainda.
```

## Prompt Para Agente Verificacao/Publicacao

```txt
Implemente verificacao de aluno e publicacao de conteudo.

Leia:

- docs/09-contrato-app-mobile.md
- docs/10-contrato-supabase.md
- docs/11-backlog-implementacao.md

Implemente Epicos 3 e 4:

- enviar pedido de verificacao;
- mostrar status;
- mostrar selo aprovado;
- bloquear publicacao para nao verificados;
- upload de conteudo;
- dados do conteudo;
- upload de comprovativo;
- criar submissao pending_review;
- listar minhas submissoes.

Nao implemente pagamentos.
Nao permita publicar sem verificacao aprovada.
```

## Prompt Para Agente Marketplace/Biblioteca

```txt
Implemente marketplace, favoritos, desbloqueio demo, biblioteca e visualizador.

Leia:

- docs/09-contrato-app-mobile.md
- docs/10-contrato-supabase.md
- docs/11-backlog-implementacao.md
- docs/12-guia-visual-e-ux.md

Implemente Epicos 5, 6, 7 e 8:

- home;
- explorar;
- filtros;
- detalhe do conteudo;
- preview;
- favoritos;
- desbloqueio demo;
- biblioteca;
- visualizador com marca d'agua.

Nao implemente pagamentos reais.
```
