# 06 - Plano De Implementacao Mobile

## Objetivo

Implementar primeiro o app mobile do NotaTop, com backend real, sem pagamentos, para apresentar a faculdade e validar a experiencia com estudantes.

## Resultado Esperado Do MVP

Ao final do MVP, deve ser possivel demonstrar:

- cadastro e login de estudante;
- perfil academico;
- pedido de verificacao;
- bloqueio de publicacao para aluno nao verificado;
- submissao de conteudo por aluno verificado;
- marketplace com conteudos aprovados;
- detalhe e previa;
- desbloqueio demo;
- biblioteca;
- visualizador com marca d'agua.

## Fase 0 - Preparacao

Tarefas:

- Criar projeto Expo com TypeScript.
- Configurar Expo Router.
- Configurar tema visual base.
- Configurar Supabase no projeto.
- Criar variaveis de ambiente.
- Criar estrutura de pastas por features.

Entrega:

- App abre no emulador ou dispositivo.
- Navegacao inicial funciona.
- Supabase esta configurado.

## Fase 1 - Autenticacao E Perfil

Tarefas:

- Criar telas de login e cadastro.
- Implementar Supabase Auth.
- Criar tela de completar perfil.
- Guardar perfil academico.
- Criar estado de sessao.
- Implementar logout.

Entrega:

- Estudante cria conta.
- Estudante entra no app.
- Estudante completa dados academicos.

## Fase 2 - Verificacao De Aluno

Tarefas:

- Criar formulario de verificacao.
- Permitir envio de numero de estudante e email institucional.
- Permitir upload opcional de documento escolar.
- Criar pedido em `verification_requests`.
- Mostrar estado da verificacao.
- Mostrar selo quando aprovado.

Entrega:

- Aluno envia pedido de verificacao.
- App mostra pendente, aprovado ou rejeitado.
- Publicacao fica bloqueada sem selo.

## Fase 3 - Submissao De Conteudo

Tarefas:

- Criar entrada "Publicar".
- Validar se aluno esta verificado.
- Criar upload de ficheiro.
- Criar formulario de dados do conteudo.
- Criar upload de comprovativo da nota.
- Criar revisao da submissao.
- Guardar submissao como `pending_review`.
- Criar tela Minhas Submissoes.

Entrega:

- Aluno verificado envia conteudo.
- Aluno acompanha estado da submissao.
- Aluno nao verificado recebe aviso e nao consegue publicar.

## Fase 4 - Marketplace

Tarefas:

- Criar Home.
- Criar Explorar.
- Listar posts publicados.
- Criar filtros por curso, disciplina, tipo e nota.
- Criar detalhe do conteudo.
- Criar previa limitada.
- Criar favoritos.

Entrega:

- Estudante encontra conteudos aprovados.
- Estudante abre detalhe e previa.
- Estudante guarda favoritos.

## Fase 5 - Desbloqueio Demo E Biblioteca

Tarefas:

- Criar botao de desbloqueio demo.
- Criar registo em `content_unlocks`.
- Criar biblioteca.
- Criar visualizador.
- Aplicar marca d'agua no visualizador.
- Bloquear visualizador sem desbloqueio.

Entrega:

- Estudante desbloqueia conteudo sem pagamento.
- Conteudo aparece na biblioteca.
- Visualizador abre conteudo com marca d'agua.

## Fase 6 - Polimento Para Apresentacao

Tarefas:

- Melhorar visual das telas principais.
- Criar dados seed para demonstracao.
- Adicionar empty states.
- Adicionar loading states.
- Adicionar mensagens de erro.
- Testar em Android e iOS.
- Preparar roteiro de demonstracao.

Entrega:

- App pronto para apresentar a faculdade.
- Fluxo principal funciona de ponta a ponta.

## Ordem De Prioridade

1. Autenticacao.
2. Perfil academico.
3. Verificacao de aluno.
4. Bloqueio de publicacao.
5. Submissao de conteudo.
6. Marketplace.
7. Desbloqueio demo.
8. Biblioteca e visualizador.
9. Polimento.

## Fora Do Escopo Da Primeira Versao

- Pagamentos reais.
- Reparticao de receita.
- Painel web completo.
- Denuncias completas.
- Chat.
- Ranking avancado.
- Notificacoes push reais.
- Download livre de conteudo.
- Integracao com sistemas internos da faculdade.

## Testes Necessarios

- Cadastro com dados validos.
- Login com credenciais validas.
- Perfil academico salvo corretamente.
- Pedido de verificacao criado.
- Estado de verificacao exibido corretamente.
- Aluno nao verificado nao consegue postar.
- Aluno verificado consegue postar.
- Submissao aparece em Minhas Submissoes.
- Apenas posts aprovados aparecem no marketplace.
- Favorito pode ser adicionado e removido.
- Desbloqueio demo cria acesso.
- Visualizador bloqueia conteudo nao desbloqueado.

## Roteiro De Demo Para Faculdade

1. Abrir app e fazer login como estudante.
2. Mostrar perfil academico.
3. Mostrar pedido de verificacao pendente.
4. Mostrar aluno aprovado com selo verificado.
5. Entrar no fluxo de publicacao.
6. Enviar conteudo com nota e comprovativo.
7. Mostrar submissao em analise.
8. Mostrar marketplace com conteudos aprovados.
9. Abrir detalhe de conteudo.
10. Mostrar previa.
11. Desbloquear em modo demo.
12. Abrir biblioteca e visualizador.
