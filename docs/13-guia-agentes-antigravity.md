# 13 - Guia Para Agentes Antigravity

## Objetivo

Este documento foi criado para agentes de IA que vao ajudar a implementar o NotaTop. Ele resume como entender o projeto, em que ordem trabalhar e quais decisoes nao devem ser alteradas.

## Como O Agente Deve Ler O Projeto

Ordem obrigatoria:

1. `README.md`
2. `docs/08-decisoes-em-falta-resolvidas.md`
3. `docs/09-contrato-app-mobile.md`
4. `docs/10-contrato-supabase.md`
5. `docs/11-backlog-implementacao.md`
6. `docs/12-guia-visual-e-ux.md`

Documentos complementares:

- `docs/01-visao-do-produto.md`
- `docs/02-funcionalidades-e-requisitos.md`
- `docs/03-paginas-e-fluxos.md`
- `docs/04-arquitetura-tecnica.md`
- `docs/05-modelo-de-dados.md`
- `docs/07-operacao-e-governanca.md`

## Resumo Para O Agente

NotaTop e um app academico para estudantes encontrarem exemplos de conteudos que tiveram boas notas.

Regra principal:

> So alunos verificados pela faculdade podem publicar conteudos.

Primeira versao:

- app mobile;
- backend real;
- sem pagamentos;
- sem painel web;
- validacao manual pelo Supabase Studio.

## Arquitetura Que Deve Ser Criada

```txt
nota-top/
  apps/
    mobile/
  packages/
    shared/
  supabase/
  docs/
```

O painel web (`apps/admin-web`) esta previsto, mas nao deve ser implementado na primeira fase.

## Agentes Recomendados

### Agente 1 - Backend Supabase

Responsavel por:

- migrations;
- enums;
- tabelas;
- policies RLS;
- buckets privados;
- seed data.

Deve seguir:

- `docs/10-contrato-supabase.md`

### Agente 2 - Mobile Foundation

Responsavel por:

- criar app Expo;
- Expo Router;
- tema;
- componentes base;
- Supabase client;
- Query Client.

Deve seguir:

- `docs/09-contrato-app-mobile.md`
- `docs/12-guia-visual-e-ux.md`

### Agente 3 - Auth E Perfil

Responsavel por:

- login;
- cadastro;
- sessao;
- perfil academico;
- guards de rota.

Deve seguir:

- Epicos 1 e 2 do backlog.

### Agente 4 - Verificacao E Publicacao

Responsavel por:

- pedido de verificacao;
- estados de verificacao;
- bloqueio de publicacao;
- fluxo de submissao.

Deve seguir:

- Epicos 3 e 4 do backlog.

### Agente 5 - Marketplace E Biblioteca

Responsavel por:

- home;
- explorar;
- filtros;
- detalhe;
- favoritos;
- desbloqueio demo;
- biblioteca;
- visualizador.

Deve seguir:

- Epicos 5 a 8 do backlog.

### Agente 6 - QA E Demo

Responsavel por:

- testar fluxo completo;
- dados de demonstracao;
- verificar erros de UI;
- preparar roteiro de apresentacao.

Deve seguir:

- Epico 9 do backlog.

## Regras Para Trabalho Em Paralelo

Pode trabalhar em paralelo:

- Backend Supabase e Mobile Foundation.
- UI base e schema compartilhado.
- Marketplace e favoritos depois que posts existirem.

Nao trabalhar em paralelo sem contrato:

- Auth e profile, se schema ainda nao existir.
- Publicacao, se verificacao ainda nao estiver implementada.
- Visualizador, se desbloqueio demo ainda nao existir.

## Sequencia Recomendada

1. Backend Supabase cria schema e seed.
2. Mobile Foundation cria app e navegacao.
3. Auth/Profile implementa entrada.
4. Verificacao implementa selo.
5. Publicacao implementa submissao.
6. Marketplace lista posts seed.
7. Desbloqueio demo cria biblioteca.
8. Visualizador mostra conteudo com marca d'agua.
9. QA testa o fluxo.

## Erros Que O Agente Deve Evitar

- Implementar pagamento agora.
- Implementar painel web agora.
- Permitir publicacao sem aluno verificado.
- Usar service role key no app mobile.
- Tornar ficheiros publicos.
- Usar webview como app inteiro.
- Criar dados falsos sem seed documentado.
- Mudar nomes de status sem atualizar docs.

## Formato De Resposta Esperado Dos Agentes

Cada agente deve responder com:

- o que implementou;
- ficheiros criados/alterados;
- como testar;
- riscos ou pendencias.

## Criterio De Pronto Para Entregar Ao Antigravity

O projeto esta pronto para ser entregue aos agentes quando:

- schema Supabase estiver definido;
- contrato do app mobile estiver definido;
- backlog estiver dividido por agente;
- prompts estiverem criados;
- as decisoes deste documento forem respeitadas.

## Criterio Para Avancar Depois Do Epico 0

Depois do Epico 0, deve existir:

- app Expo criado;
- Expo Router funcionando;
- Supabase client configurado;
- Query Client configurado;
- tema visual criado;
- componentes base criados.
