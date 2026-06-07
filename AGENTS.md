# NotaTop - Instrucoes Para Agentes De IA

Este repositorio documenta e, futuramente, implementara o projeto NotaTop.

## Regra Principal

Antes de escrever codigo, leia estes ficheiros nesta ordem:

1. `README.md`
2. `docs/13-guia-agentes-antigravity.md`
3. `docs/09-contrato-app-mobile.md`
4. `docs/10-contrato-supabase.md`
5. `docs/11-backlog-implementacao.md`
6. `docs/12-guia-visual-e-ux.md`

## Escopo Atual

O foco atual e construir apenas o app mobile MVP.

Incluido:

- React Native + Expo + TypeScript.
- Backend real com Supabase.
- Login e cadastro.
- Perfil academico.
- Verificacao de aluno.
- Bloqueio de publicacao para aluno nao verificado.
- Submissao de conteudo.
- Marketplace basico.
- Desbloqueio demo sem pagamento.
- Biblioteca e visualizador demo com marca d'agua.

Fora do escopo atual:

- Pagamentos reais.
- Painel web completo.
- Chat.
- Ranking avancado.
- Multi-faculdade em producao.
- Download livre de ficheiros.

## Decisoes Fechadas

- O app mobile e separado da web.
- A web sera apenas painel administrativo no futuro.
- O MVP usa uma faculdade piloto.
- O idioma da interface e portugues.
- A escala de nota padrao e 0 a 20.
- A nota minima padrao para publicar e 16/20.
- Pagamentos ficam fora da primeira versao.
- Aprovacoes no MVP podem ser feitas manualmente pelo Supabase Studio.

## Regras De Implementacao

- Nao criar funcionalidades fora do backlog sem atualizar a documentacao.
- Nao implementar pagamento nesta fase.
- Nao transformar o app numa webview.
- Nao expor ficheiros privados publicamente.
- Nao permitir publicacao por aluno nao verificado.
- Usar TypeScript em todo o codigo.
- Usar validacao com Zod para formularios.
- Usar TanStack Query para dados remotos.
- Usar Expo Router para navegacao.

## Como Entregar Mudancas

Cada entrega deve ter:

- descricao do que foi implementado;
- ficheiros principais alterados;
- testes ou verificacoes executadas;
- pendencias conhecidas.
