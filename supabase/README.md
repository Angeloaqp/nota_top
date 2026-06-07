# supabase

Backend Supabase do NotaTop.

## Escopo Atual

Criar o backend do MVP mobile:

- enums;
- tabelas;
- constraints;
- Row Level Security;
- policies;
- buckets privados;
- seed data.

## Documento Principal

Leia:

- `../docs/10-contrato-supabase.md`

## Pastas

- `migrations/`: migrations SQL.
- `functions/`: Edge Functions futuras.

## Regras

- Ativar RLS em tabelas publicas.
- Nao permitir auto-aprovacao de aluno.
- Nao tornar buckets publicos.
- Nao implementar pagamento nesta fase.

## Validacao Manual No MVP

Enquanto o painel web nao existir, o Supabase Studio pode ser usado para:

- aprovar pedido de verificacao;
- atualizar `student_profiles.verification_status`;
- aprovar submissao;
- criar ou publicar post.
