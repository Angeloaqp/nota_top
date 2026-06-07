# NotaTop - Documentacao do Projeto

NotaTop e uma plataforma academica onde estudantes podem encontrar exemplos reais de trabalhos, projetos, relatorios e materiais que tiveram boas notas. O conteudo so pode ser publicado por alunos verificados pela faculdade, e cada publicacao precisa ter a nota validada antes de aparecer no marketplace.

O projeto sera dividido em dois produtos separados:

- App mobile para estudantes, em Android e iOS.
- Painel web para faculdade e administradores, usado para verificacao, validacao e gestao.

Ambos usam o mesmo backend, a mesma base de dados e as mesmas regras de seguranca.

## Decisoes Ja Definidas

- O app mobile sera separado da web.
- A primeira implementacao comeca pelo app mobile.
- O MVP tera backend real com Supabase.
- Pagamentos nao entram na primeira fase.
- Apenas alunos verificados podem postar.
- A faculdade verifica se o utilizador e realmente aluno.
- A faculdade valida se a nota e real antes da publicacao.
- O painel web sera para gestao, nao para estudantes no MVP.
- O conteudo comprado sera visto dentro do app com marca d'agua, quando pagamentos forem implementados.

## Documentos

- [00 - Plano Profissional NotaTop](docs/00-plano-profissional-notatop.md)
- [01 - Visao do Produto](docs/01-visao-do-produto.md)
- [02 - Funcionalidades e Requisitos](docs/02-funcionalidades-e-requisitos.md)
- [03 - Paginas e Fluxos](docs/03-paginas-e-fluxos.md)
- [04 - Arquitetura Tecnica](docs/04-arquitetura-tecnica.md)
- [05 - Modelo de Dados](docs/05-modelo-de-dados.md)
- [06 - Plano de Implementacao Mobile](docs/06-plano-de-implementacao-mobile.md)
- [07 - Operacao e Governanca](docs/07-operacao-e-governanca.md)
- [08 - Decisoes em Falta Resolvidas](docs/08-decisoes-em-falta-resolvidas.md)
- [09 - Contrato do App Mobile](docs/09-contrato-app-mobile.md)
- [10 - Contrato Supabase](docs/10-contrato-supabase.md)
- [11 - Backlog de Implementacao](docs/11-backlog-implementacao.md)
- [12 - Guia Visual e UX](docs/12-guia-visual-e-ux.md)
- [13 - Guia Para Agentes Antigravity](docs/13-guia-agentes-antigravity.md)
- [14 - Prompt Mestre Para IA](docs/14-prompt-mestre-ia.md)
- [15 - Checklist Pronto Para Codar](docs/15-checklist-pronto-para-codar.md)
- [16 - Ambiente e Comandos](docs/16-ambiente-e-comandos.md)
- [17 - QA e Roteiro de Demo](docs/17-qa-e-roteiro-demo.md)
- [Especificacao MVP Mobile](specs/mobile-mvp.spec.md)

## Para Agentes De IA

Antes de implementar, leia:

1. [AGENTS.md](AGENTS.md)
2. [ANTIGRAVITY.md](ANTIGRAVITY.md)
3. [13 - Guia Para Agentes Antigravity](docs/13-guia-agentes-antigravity.md)
4. [09 - Contrato do App Mobile](docs/09-contrato-app-mobile.md)
5. [10 - Contrato Supabase](docs/10-contrato-supabase.md)
6. [11 - Backlog de Implementacao](docs/11-backlog-implementacao.md)
7. [14 - Prompt Mestre Para IA](docs/14-prompt-mestre-ia.md)

## Primeira Meta

Construir um app mobile onde um estudante consegue:

1. Criar conta.
2. Completar perfil academico.
3. Enviar dados escolares para verificacao.
4. Acompanhar o estado da verificacao.
5. Publicar conteudo apenas se estiver verificado.
6. Enviar conteudo, nota, disciplina e comprovativo.
7. Ver marketplace com conteudos aprovados.

Na primeira fase, as aprovacoes podem ser feitas manualmente pelo Supabase Studio. Depois sera criado o painel web para a faculdade fazer isso de forma propria.
