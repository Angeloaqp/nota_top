# 11 - Backlog De Implementacao

## Como Usar

Este backlog deve guiar os agentes de implementacao. Cada epico so deve comecar quando o anterior estiver funcional.

## Epico 0 - Bootstrap Do Projeto

Objetivo: criar a base tecnica do app mobile.

Tarefas:

- Criar monorepo.
- Criar `apps/mobile` com Expo + TypeScript.
- Configurar Expo Router.
- Criar `src/lib/env.ts`.
- Criar `src/lib/supabase.ts`.
- Criar `src/lib/query-client.ts`.
- Criar tema visual em `src/styles/theme.ts`.
- Criar componentes UI base.

Aceitacao:

- App abre sem erro.
- Navegacao inicial funciona.
- TypeScript compila.
- Variaveis do Supabase sao lidas.

## Epico 1 - Autenticacao

Objetivo: permitir que estudantes criem conta e entrem no app.

Tarefas:

- Tela de login.
- Tela de cadastro.
- Tela de recuperacao de senha.
- Servico `auth.service.ts`.
- Guard de rotas autenticadas.
- Logout.

Aceitacao:

- Utilizador cadastra com email/senha.
- Utilizador faz login.
- Utilizador autenticado entra na area principal.
- Utilizador sem sessao volta para login.

## Epico 2 - Perfil Academico

Objetivo: guardar dados academicos do estudante.

Tarefas:

- Tela de completar perfil.
- Formulario com faculdade, curso, semestre, numero de estudante e email institucional.
- Servico `profile.service.ts`.
- Query `getMyProfile`.
- Mutacao `upsertMyProfile`.

Aceitacao:

- Utilizador preenche perfil.
- Dados aparecem ao reabrir app.
- Perfil incompleto bloqueia fluxo principal quando necessario.

## Epico 3 - Verificacao De Aluno

Objetivo: permitir que o estudante envie dados para ser verificado.

Tarefas:

- Tela de estado de verificacao.
- Tela de envio de dados escolares.
- Upload opcional de documento.
- Servico `verification.service.ts`.
- Exibir estados: nao enviado, pendente, aprovado, rejeitado.
- Exibir selo de aluno verificado.

Aceitacao:

- Pedido e criado com `pending`.
- App mostra o pedido pendente.
- Quando Supabase Studio alterar para aprovado, app mostra selo.
- Quando rejeitado, app mostra motivo.

## Epico 4 - Publicacao De Conteudo

Objetivo: permitir submissao apenas por aluno verificado.

Tarefas:

- Tela inicial de publicar.
- Bloqueio para aluno nao verificado.
- Upload de ficheiro.
- Formulario de dados do conteudo.
- Upload de comprovativo.
- Tela de revisao.
- Criar submissao `pending_review`.
- Tela Minhas Submissoes.

Aceitacao:

- Aluno nao verificado nao consegue enviar conteudo.
- Aluno aprovado consegue enviar submissao.
- Submissao aparece na lista do autor.
- Submissao nao aparece no marketplace antes de aprovada.

## Epico 5 - Marketplace

Objetivo: mostrar conteudos aprovados para estudantes.

Tarefas:

- Home.
- Explorar.
- Lista de posts publicados.
- Pesquisa.
- Filtros por curso, disciplina, tipo e nota.
- Detalhe do conteudo.
- Preview.

Aceitacao:

- Apenas posts `published` aparecem.
- Filtros alteram a lista.
- Detalhe mostra nota, autor, disciplina e preview.

## Epico 6 - Favoritos

Objetivo: permitir guardar conteudos.

Tarefas:

- Botao favoritar no detalhe.
- Tela de favoritos.
- Servico `favorites.service.ts`.

Aceitacao:

- Favorito e criado.
- Favorito pode ser removido.
- Tela lista favoritos do utilizador.

## Epico 7 - Desbloqueio Demo E Biblioteca

Objetivo: simular acesso a conteudo sem pagamento.

Tarefas:

- Botao "Desbloquear demo".
- Criar registo em `content_unlocks`.
- Tela Biblioteca.
- Servico `unlocks.service.ts`.

Aceitacao:

- Desbloqueio demo cria acesso.
- Conteudo desbloqueado aparece na biblioteca.
- Desbloqueio duplicado nao cria erro visual.

## Epico 8 - Visualizador Demo

Objetivo: abrir conteudo desbloqueado dentro do app.

Tarefas:

- Tela do visualizador.
- Verificar acesso antes de abrir.
- Mostrar `viewer_text`.
- Aplicar marca d'agua visual.

Aceitacao:

- Sem desbloqueio, utilizador volta ao detalhe.
- Com desbloqueio, conteudo abre.
- Marca d'agua aparece com nome ou email do utilizador.

## Epico 9 - Polimento E Demo

Objetivo: deixar app pronto para apresentacao.

Tarefas:

- Empty states.
- Loading states.
- Error states.
- Dados seed.
- Revisao visual.
- Teste Android.
- Teste iOS, se disponivel.
- Roteiro de demo.

Aceitacao:

- Fluxo principal funciona de ponta a ponta.
- App tem aparencia profissional.
- Nao ha telas quebradas nos estados basicos.

## Ordem Obrigatoria

1. Epico 0.
2. Epico 1.
3. Epico 2.
4. Epico 3.
5. Epico 4.
6. Epico 5.
7. Epico 6.
8. Epico 7.
9. Epico 8.
10. Epico 9.

## Definition Of Done Geral

Uma tarefa so esta concluida quando:

- TypeScript nao tem erro conhecido;
- navegacao da tela funciona;
- loading, erro e vazio foram tratados;
- regra de verificacao foi respeitada;
- nao ha dados sensiveis expostos;
- documentacao afetada foi atualizada.
