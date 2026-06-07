# packages/shared

Pacote futuro para tipos, constantes e validacoes compartilhadas entre app mobile e painel web.

## Conteudo Esperado

- tipos TypeScript;
- schemas Zod;
- constantes de status;
- labels de content type;
- validacoes comuns.

## Prioridade

Pode ser criado desde o inicio se o monorepo estiver configurado. Caso contrario, os tipos podem ficar temporariamente em `apps/mobile/src/types` e migrar para este pacote depois.

## Fonte De Verdade

Consultar:

- `../../docs/09-contrato-app-mobile.md`
- `../../docs/10-contrato-supabase.md`
