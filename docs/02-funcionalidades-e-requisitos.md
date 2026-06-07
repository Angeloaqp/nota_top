# 02 - Funcionalidades e Requisitos

## Escopo Do MVP Mobile

O MVP mobile deve provar o fluxo principal do NotaTop sem pagamentos reais:

1. estudante cria conta;
2. estudante completa perfil academico;
3. estudante envia dados escolares para verificacao;
4. faculdade aprova ou rejeita a verificacao manualmente;
5. apenas estudante verificado pode submeter conteudo;
6. estudante envia conteudo, disciplina, nota e comprovativo;
7. conteudo aprovado aparece no marketplace;
8. outros estudantes pesquisam, veem previa e desbloqueiam em modo demo.

## Funcionalidades Do App Mobile

### Conta E Autenticacao

- Cadastro por email e senha.
- Login.
- Recuperacao de senha.
- Sessao persistente.
- Logout.

### Perfil Academico

- Nome completo.
- Faculdade.
- Curso.
- Semestre ou ano.
- Numero de estudante ou matricula.
- Email institucional, quando existir.
- Estado de verificacao.

### Verificacao De Aluno

- Envio dos dados escolares.
- Envio opcional de documento academico.
- Estado: nao enviado, pendente, aprovado, rejeitado.
- Selo de Aluno Verificado.
- Motivo da rejeicao, quando houver.
- Possibilidade de reenviar dados.

### Publicacao De Conteudo

- Apenas alunos verificados podem postar.
- Upload de ficheiro.
- Escolha de curso e disciplina.
- Tipo de conteudo: trabalho, relatorio, projeto, apresentacao, resumo ou outro.
- Nota recebida.
- Comprovativo da nota.
- Descricao do conteudo.
- Estado da submissao: rascunho, em analise, aprovado, rejeitado.

### Marketplace

- Lista de conteudos aprovados.
- Filtro por faculdade, curso, disciplina, tipo, nota e popularidade.
- Pesquisa por palavra-chave.
- Destaques por disciplina.
- Conteudos recentes.
- Conteudos mais vistos.

### Detalhe Do Conteudo

- Titulo.
- Descricao.
- Autor.
- Selo de autor verificado.
- Nota validada.
- Curso e disciplina.
- Tipo de conteudo.
- Previa limitada.
- Botao de desbloqueio demo.

### Biblioteca

- Lista de conteudos desbloqueados.
- Acesso ao visualizador.
- Historico de desbloqueios.

### Favoritos

- Guardar conteudos.
- Remover favoritos.
- Listar favoritos.

### Visualizador

- Abrir conteudo dentro do app.
- Mostrar marca d'agua com nome ou identificador do utilizador.
- Bloquear acesso a utilizadores sem desbloqueio.

### Notificacoes Internas

- Verificacao aprovada.
- Verificacao rejeitada.
- Submissao aprovada.
- Submissao rejeitada.
- Conteudo desbloqueado.

## Funcionalidades Do Painel Web Futuro

O painel web nao sera implementado primeiro, mas precisa estar previsto.

- Login administrativo.
- Verificacao de alunos.
- Validacao de conteudos.
- Gestao de cursos.
- Gestao de disciplinas.
- Definicao de nota minima.
- Moderacao de denuncias.
- Relatorios.
- Gestao financeira futura.
- Logs de auditoria.
- Permissoes por cargo.

## Requisitos Funcionais Em EARS

**FR-AUTH-001: Cadastro**  
Quando um estudante submeter dados validos de cadastro, o sistema deve criar uma conta de utilizador.

**FR-AUTH-002: Login**  
Quando um estudante informar credenciais validas, o sistema deve iniciar uma sessao autenticada.

**FR-PROFILE-001: Perfil Academico**  
Enquanto o estudante estiver autenticado, quando preencher os dados academicos, o sistema deve guardar o perfil do estudante.

**FR-VERIFY-001: Pedido De Verificacao**  
Enquanto o estudante tiver perfil academico completo, quando enviar os dados escolares, o sistema deve criar um pedido de verificacao com estado pendente.

**FR-VERIFY-002: Bloqueio De Publicacao**  
Enquanto o estudante nao estiver verificado, o sistema deve impedir a submissao de conteudos.

**FR-VERIFY-003: Selo Verificado**  
Enquanto o estudante estiver aprovado pela faculdade, o sistema deve mostrar o selo de Aluno Verificado no perfil.

**FR-SUBMISSION-001: Criar Submissao**  
Enquanto o estudante estiver verificado, quando enviar conteudo, nota, disciplina e comprovativo, o sistema deve criar uma submissao em analise.

**FR-SUBMISSION-002: Publicacao Aprovada**  
Quando uma submissao for aprovada, o sistema deve criar ou ativar um post no marketplace.

**FR-MARKET-001: Listar Conteudos**  
Quando o estudante abrir o marketplace, o sistema deve listar apenas conteudos aprovados.

**FR-MARKET-002: Filtrar Conteudos**  
Quando o estudante aplicar filtros, o sistema deve mostrar conteudos que correspondem aos criterios selecionados.

**FR-CONTENT-001: Previa**  
Quando o estudante abrir um conteudo aprovado, o sistema deve mostrar uma previa limitada.

**FR-DEMO-001: Desbloqueio Demo**  
Quando o estudante desbloquear um conteudo em modo demo, o sistema deve criar um registo de acesso sem cobrar pagamento.

**FR-LIBRARY-001: Biblioteca**  
Enquanto o estudante tiver conteudos desbloqueados, o sistema deve listar esses conteudos na biblioteca.

**FR-SECURITY-001: Acesso A Ficheiros**  
Quando um utilizador tentar abrir um ficheiro, o sistema deve verificar se ele tem permissao para acessar o conteudo.

## Requisitos Nao Funcionais

- O app deve funcionar em Android e iOS.
- O app deve usar TypeScript.
- O backend deve proteger ficheiros privados.
- A base de dados deve ter regras de acesso por perfil.
- Listas grandes devem usar componentes otimizados.
- Operacoes criticas devem ter estado de carregamento e erro.
- O app deve manter uma identidade visual consistente.
- O MVP deve ser apresentavel para uma faculdade piloto.

## Criterios De Aceitacao

- Um aluno nao verificado nao consegue acessar o fluxo de publicacao.
- Um aluno verificado consegue criar uma submissao.
- Conteudos em analise nao aparecem no marketplace.
- Apenas conteudos aprovados aparecem no marketplace.
- O detalhe do conteudo mostra nota, disciplina, autor e selo.
- O desbloqueio demo adiciona o conteudo a biblioteca.
- O visualizador so abre conteudos desbloqueados.
- O app mostra mensagens claras em caso de erro.
