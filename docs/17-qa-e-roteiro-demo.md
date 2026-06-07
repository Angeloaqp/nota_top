# 17 - QA E Roteiro De Demo

## Objetivo

Definir como testar o MVP mobile e como apresentar o fluxo para a faculdade.

## Testes Manuais Por Epico

### Epico 0 - Bootstrap

- App abre sem erro.
- Navegacao inicial carrega.
- Tema base aparece.
- TypeScript executa sem erro conhecido.

### Epico 1 - Auth

- Cadastro com email valido cria utilizador.
- Login com senha correta entra no app.
- Login com senha errada mostra erro.
- Logout volta para login.

### Epico 2 - Perfil

- Estudante preenche perfil academico.
- Perfil fica salvo ao fechar e abrir app.
- Campos obrigatorios mostram erro quando vazios.

### Epico 3 - Verificacao

- Estudante envia pedido de verificacao.
- Estado aparece como pendente.
- Ao alterar manualmente para aprovado no Supabase, app mostra selo.
- Ao alterar manualmente para rejeitado, app mostra motivo.

### Epico 4 - Publicacao

- Aluno nao verificado nao consegue publicar.
- Aluno verificado acessa fluxo de publicacao.
- Upload de ficheiro funciona.
- Upload de comprovativo funciona.
- Submissao e criada como `pending_review`.
- Submissao aparece em Minhas Submissoes.

### Epico 5 - Marketplace

- Posts publicados aparecem na Home.
- Posts nao publicados nao aparecem.
- Filtros por disciplina funcionam.
- Detalhe mostra preview.

### Epico 6 - Favoritos

- Favoritar adiciona item.
- Remover favorito remove item.
- Tela de favoritos lista apenas favoritos do utilizador.

### Epico 7 - Desbloqueio Demo

- Botao desbloquear demo cria acesso.
- Conteudo aparece na biblioteca.
- Clicar novamente nao quebra o fluxo.

### Epico 8 - Visualizador

- Sem desbloqueio, visualizador bloqueia acesso.
- Com desbloqueio, visualizador mostra conteudo.
- Marca d'agua aparece com nome ou email.

## Dados De Demo Necessarios

Criar no Supabase:

- 1 faculdade piloto.
- 3 cursos.
- 5 disciplinas.
- 1 aluno aprovado.
- 1 aluno pendente.
- 1 aluno rejeitado.
- 6 posts publicados.
- 1 submissao pendente.
- 1 submissao rejeitada.

## Roteiro De Apresentacao Para Faculdade

### Parte 1 - Problema

Explicar:

- alunos procuram exemplos sem saber se sao bons;
- exemplos circulam sem validacao;
- faculdade nao tem controlo;
- bons alunos nao sao reconhecidos.

### Parte 2 - Solucao

Mostrar:

- app mobile para estudantes;
- verificacao feita pela faculdade;
- conteudos com nota validada;
- marketplace de exemplos academicos.

### Parte 3 - Fluxo Do Aluno

Demonstrar:

1. login;
2. perfil academico;
3. pedido de verificacao;
4. estado aprovado com selo;
5. tentativa de publicar como aluno verificado;
6. submissao de conteudo;
7. estado em analise.

### Parte 4 - Fluxo Do Comprador

Demonstrar:

1. Home;
2. Explorar;
3. filtros por disciplina;
4. detalhe do conteudo;
5. preview;
6. desbloqueio demo;
7. biblioteca;
8. visualizador com marca d'agua.

### Parte 5 - Evolucao

Explicar que a proxima fase sera:

- painel web da faculdade;
- validacao de alunos pela web;
- validacao de conteudos pela web;
- pagamentos apenas depois da validacao institucional.

## Sinais De Que O MVP Esta Pronto

- Fluxo principal pode ser demonstrado sem explicar bugs.
- Dados sensiveis nao aparecem publicamente.
- Aluno nao verificado e bloqueado corretamente.
- Conteudo pendente nao aparece no marketplace.
- App tem estados vazios e de erro.
- A apresentacao mostra valor para estudante e faculdade.
