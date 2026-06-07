# 00 - Plano Profissional NotaTop

## 1. Resumo Executivo

NotaTop e uma plataforma academica criada para ajudar estudantes a encontrar exemplos reais de trabalhos, relatorios, projetos, apresentacoes e outros materiais que receberam boas notas na faculdade.

O objetivo e criar uma biblioteca de exemplos academicos validados, onde os estudantes possam aprender com materiais de qualidade, entender o nivel esperado pela faculdade e melhorar a forma como produzem os seus proprios trabalhos.

A plataforma tera dois sistemas separados:

- **App mobile:** usado pelos estudantes.
- **Painel web:** usado pela faculdade e pela equipa NotaTop.

Na primeira fase, o desenvolvimento comeca pelo app mobile, com backend real, sem pagamentos. O foco sera provar o fluxo principal: cadastro, verificacao de aluno, submissao de conteudo e consulta de materiais aprovados.

## 2. Problema Identificado

Estudantes muitas vezes nao sabem como estruturar bons trabalhos academicos. Eles procuram exemplos em grupos informais, mensagens privadas ou materiais sem garantia de qualidade.

Esse processo gera problemas:

- os alunos nao sabem se o exemplo e realmente bom;
- materiais sao partilhados sem organizacao;
- nao existe validacao da nota;
- bons alunos nao sao reconhecidos;
- existe risco de plagio;
- a faculdade nao tem controlo sobre a circulacao desses conteudos.

## 3. Solucao Proposta

O NotaTop resolve esse problema com uma plataforma onde:

- o estudante cria conta no app;
- envia dados escolares;
- a faculdade confirma se ele e realmente aluno;
- o aluno aprovado recebe o selo de Aluno Verificado;
- apenas alunos verificados podem postar;
- o aluno envia conteudo, nota e comprovativo;
- a faculdade valida a nota e aprova o conteudo;
- conteudos aprovados aparecem no marketplace do app;
- outros estudantes consultam os materiais como exemplos de estudo.

## 4. Regra Central Do Produto

A regra mais importante do NotaTop e:

> So alunos verificados pela faculdade podem publicar conteudos.

Isso protege a plataforma contra fraude e aumenta a confianca dos materiais publicados.

## 5. Publicos Do Sistema

### Estudante Comprador

Usa o app para procurar exemplos por curso, disciplina, tipo de trabalho e nota.

### Estudante Autor

Aluno verificado que teve boa nota e quer publicar conteudo para ganhar reputacao e, futuramente, receita.

### Faculdade

Verifica alunos, valida notas, aprova conteudos e define regras academicas.

### Equipa NotaTop

Gere a tecnologia, suporte, moderacao geral, regras da plataforma e modelo de negocio.

## 6. Funcionalidades Principais Do App Mobile

- Cadastro e login.
- Perfil academico.
- Envio de dados escolares.
- Estado da verificacao.
- Selo de Aluno Verificado.
- Bloqueio de publicacao para nao verificados.
- Upload de conteudo.
- Envio de nota e comprovativo.
- Estado da submissao.
- Marketplace de conteudos aprovados.
- Pesquisa e filtros.
- Detalhe do conteudo.
- Previa limitada.
- Desbloqueio demo sem pagamento.
- Biblioteca de conteudos desbloqueados.
- Favoritos.
- Visualizador com marca d'agua.
- Perfil publico do autor.

## 7. Funcionalidades Do Painel Web Futuro

O painel web sera separado do app mobile e usado apenas para gestao.

- Verificar alunos.
- Aprovar ou rejeitar pedidos de verificacao.
- Validar notas.
- Aprovar ou rejeitar conteudos.
- Gerir cursos.
- Gerir disciplinas.
- Definir nota minima.
- Acompanhar denuncias.
- Gerir posts publicados.
- Consultar relatorios.
- Gerir permissoes.
- Ver logs de auditoria.
- Gerir pagamentos futuros.

## 8. Tecnologia Recomendada

### App Mobile

- React Native.
- Expo.
- TypeScript.
- Expo Router.

### Painel Web

- Next.js.
- TypeScript.
- Tailwind CSS.
- Vercel.

### Backend

- Supabase.
- PostgreSQL.
- Supabase Auth.
- Supabase Storage.
- Supabase Edge Functions.

### Futuro Pagamento

- Stripe Connect, se estiver disponivel no pais.
- Gateway local, caso Stripe nao seja adequado.

## 9. Plano De Implementacao

### Fase 1 - App Mobile MVP

Construir o app mobile com backend real e sem pagamentos.

Entregas:

- login e cadastro;
- perfil academico;
- pedido de verificacao;
- bloqueio de publicacao para nao verificados;
- submissao de conteudo;
- marketplace basico;
- detalhe do conteudo;
- desbloqueio demo;
- biblioteca;
- visualizador.

### Fase 2 - Painel Web Da Faculdade

Criar painel para substituir a gestao manual feita no Supabase Studio.

Entregas:

- fila de verificacao de alunos;
- fila de validacao de conteudos;
- gestao de cursos e disciplinas;
- regras de nota minima;
- logs de auditoria;
- relatorios iniciais.

### Fase 3 - Pagamentos

Adicionar compra real de conteudos.

Entregas:

- checkout;
- divisao de receita;
- saldo do autor;
- taxa da faculdade;
- taxa da plataforma;
- historico financeiro.

### Fase 4 - Crescimento

Adicionar funcionalidades avancadas.

Entregas:

- rankings;
- denuncias completas;
- pedidos de conteudo;
- notificacoes push;
- multi-faculdade;
- reputacao de autores;
- relatorios avancados.

## 10. Diferencial Do NotaTop

O diferencial nao e apenas vender conteudo. O diferencial e a validacao.

O NotaTop combina:

- verificacao de aluno;
- validacao de nota;
- conteudos organizados por disciplina;
- separacao entre app e painel web;
- controle da faculdade;
- potencial de monetizacao futura;
- foco em estudo e inspiracao.

## 11. Riscos E Mitigacoes

| Risco | Mitigacao |
| --- | --- |
| Uso para copia | Termos claros, marca d'agua e moderacao |
| Aluno falso | Verificacao pela faculdade |
| Nota falsa | Validacao institucional |
| Conteudo com plagio | Denuncia, revisao e remocao |
| Pagamentos complexos | Deixar fora do MVP |
| Faculdade demorar a validar | Criar painel web com fila e alertas |

## 12. Primeira Versao Ideal Para Apresentacao

A primeira versao deve permitir demonstrar:

1. estudante cria conta;
2. estudante envia dados escolares;
3. estudante recebe selo verificado;
4. estudante verificado submete conteudo;
5. conteudo aprovado aparece no marketplace;
6. outro estudante abre a previa;
7. outro estudante desbloqueia em modo demo;
8. conteudo aparece na biblioteca;
9. visualizador mostra marca d'agua.

## 13. Conclusao

NotaTop tem potencial para se tornar uma plataforma academica confiavel, porque resolve um problema real dos estudantes e envolve a faculdade no processo de validacao.

O caminho mais seguro e comecar pequeno:

- app mobile primeiro;
- backend real;
- sem pagamentos;
- uma faculdade piloto;
- validacao manual no inicio;
- painel web depois;
- pagamentos apenas quando o fluxo academico estiver validado.
