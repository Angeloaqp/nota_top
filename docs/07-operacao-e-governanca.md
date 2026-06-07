# 07 - Operacao E Governanca

## Objetivo

Definir como o NotaTop sera gerido operacionalmente, separando responsabilidades entre estudantes, faculdade e equipa da plataforma.

## Responsabilidades

### Estudante

- Criar conta.
- Enviar dados verdadeiros.
- Pedir verificacao.
- Publicar apenas conteudos proprios.
- Enviar comprovativo de nota.
- Usar conteudos comprados ou desbloqueados apenas para estudo.

### Faculdade

- Confirmar se o estudante pertence a instituicao.
- Aprovar ou rejeitar pedidos de verificacao.
- Validar notas.
- Definir nota minima por disciplina.
- Rejeitar conteudos que violem regras academicas.
- Acompanhar relatorios.

### Equipa NotaTop

- Manter o app e backend.
- Gerir suporte.
- Gerir regras gerais da plataforma.
- Moderar abusos.
- Preparar pagamentos futuros.
- Garantir seguranca e privacidade.

## Processo De Verificacao De Aluno

1. Aluno envia dados escolares no app.
2. Pedido fica pendente.
3. Secretaria verifica se os dados correspondem a um aluno real.
4. Se aprovado, o aluno recebe selo.
5. Se rejeitado, o aluno recebe motivo.
6. Aluno pode corrigir e reenviar.

## Processo De Validacao De Conteudo

1. Aluno verificado envia conteudo.
2. Submissao fica em analise.
3. Faculdade verifica a nota.
4. Faculdade avalia se o conteudo pode ser publicado.
5. Se aprovado, o conteudo vira post.
6. Se rejeitado, o autor recebe motivo.

## Politicas Importantes

### Uso Etico

O app deve informar que os conteudos sao exemplos para estudo. O estudante nao deve copiar e entregar como se fosse seu.

### Propriedade Do Conteudo

O autor deve confirmar que o conteudo foi produzido por ele ou pelo grupo autorizado.

### Privacidade

Dados pessoais, numero de estudante e comprovativos nao devem ser publicos.

### Remocao De Conteudo

Conteudos podem ser removidos se:

- forem fraudulentos;
- tiverem plagio;
- violarem regras da faculdade;
- expuserem dados sensiveis;
- forem denunciados e confirmados como inadequados.

## Estados Operacionais

### Verificacao De Aluno

- `not_submitted`: ainda nao enviou dados.
- `pending`: enviado e aguardando analise.
- `approved`: aluno verificado.
- `rejected`: dados recusados.

### Submissao

- `draft`: ainda nao enviada.
- `pending_review`: aguardando validacao.
- `approved`: validada.
- `rejected`: recusada.

### Post

- `published`: visivel no marketplace.
- `hidden`: oculto temporariamente.
- `removed`: removido por decisao administrativa.

## Riscos Operacionais

| Risco | Impacto | Mitigacao |
| --- | --- | --- |
| Aluno tenta usar dados falsos | Quebra de confianca | Verificacao pela faculdade |
| Conteudo copiado | Problema academico | Validacao, denuncia e remocao |
| Faculdade demora a aprovar | Experiencia lenta | Dashboard de pendencias no painel web futuro |
| Uso do app para fraude | Risco reputacional | Termos claros, marca d'agua e moderacao |
| Dados sensiveis expostos | Risco legal | Storage privado e permissao por perfil |

## Plano De Evolucao

### MVP

- App mobile.
- Backend real.
- Validacao manual pelo Supabase Studio.
- Sem pagamentos.

### Versao 2

- Painel web da faculdade.
- Validacao de alunos pela web.
- Validacao de conteudos pela web.
- Logs de auditoria.
- Relatorios basicos.

### Versao 3

- Pagamentos.
- Reparticao de receita.
- Painel financeiro.
- Denuncias completas.
- Notificacoes push.

### Versao 4

- Rankings.
- Pedidos de conteudo.
- Colecoes avancadas.
- Reputacao de autores.
- Multi-faculdade.

## Preparacao Para Reuniao Com Faculdade

Pontos que devem ser apresentados:

- problema que o app resolve;
- papel da faculdade na verificacao;
- diferenca entre exemplo academico e copia;
- beneficios para estudantes;
- beneficios para a faculdade;
- seguranca dos dados;
- plano de MVP sem pagamentos;
- evolucao futura com painel web e pagamentos.
