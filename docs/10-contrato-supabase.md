# 10 - Contrato Supabase

## Objetivo

Definir o contrato de backend para o MVP mobile. Este documento deve orientar a criacao das migrations, policies, buckets e seed data.

## Extensoes Recomendadas

```sql
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";
```

## Enums

```sql
create type user_role as enum ('student', 'faculty_staff', 'admin');
create type record_status as enum ('active', 'inactive');
create type verification_status as enum ('not_submitted', 'pending', 'approved', 'rejected');
create type verification_request_status as enum ('pending', 'approved', 'rejected');
create type content_type as enum ('assignment', 'report', 'project', 'presentation', 'summary', 'other');
create type submission_status as enum ('draft', 'pending_review', 'approved', 'rejected');
create type post_status as enum ('published', 'hidden', 'removed');
create type unlock_type as enum ('demo', 'paid_future');
```

## Tabelas

### users

Usar `auth.users.id` como referencia.

Campos:

- `id uuid primary key references auth.users(id) on delete cascade`
- `email text not null`
- `full_name text not null`
- `role user_role not null default 'student'`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

### faculties

- `id uuid primary key default gen_random_uuid()`
- `name text not null`
- `country text not null`
- `city text`
- `status record_status not null default 'active'`
- `created_at timestamptz not null default now()`

### courses

- `id uuid primary key default gen_random_uuid()`
- `faculty_id uuid not null references faculties(id)`
- `name text not null`
- `status record_status not null default 'active'`
- `created_at timestamptz not null default now()`

### subjects

- `id uuid primary key default gen_random_uuid()`
- `course_id uuid not null references courses(id)`
- `name text not null`
- `semester int`
- `minimum_grade numeric(5,2) not null default 16`
- `grade_scale_max numeric(5,2) not null default 20`
- `status record_status not null default 'active'`
- `created_at timestamptz not null default now()`

### student_profiles

- `id uuid primary key default gen_random_uuid()`
- `user_id uuid not null unique references users(id) on delete cascade`
- `faculty_id uuid references faculties(id)`
- `course_id uuid references courses(id)`
- `student_number text`
- `institutional_email text`
- `semester int`
- `verification_status verification_status not null default 'not_submitted'`
- `verified_at timestamptz`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

### verification_requests

- `id uuid primary key default gen_random_uuid()`
- `user_id uuid not null references users(id) on delete cascade`
- `faculty_id uuid not null references faculties(id)`
- `course_id uuid not null references courses(id)`
- `student_number text not null`
- `institutional_email text`
- `document_file_path text`
- `status verification_request_status not null default 'pending'`
- `rejection_reason text`
- `reviewed_by uuid references users(id)`
- `reviewed_at timestamptz`
- `created_at timestamptz not null default now()`

### submissions

- `id uuid primary key default gen_random_uuid()`
- `author_id uuid not null references users(id) on delete cascade`
- `faculty_id uuid not null references faculties(id)`
- `course_id uuid not null references courses(id)`
- `subject_id uuid not null references subjects(id)`
- `title text not null`
- `description text not null`
- `content_type content_type not null`
- `grade numeric(5,2) not null`
- `content_file_path text not null`
- `grade_proof_file_path text not null`
- `status submission_status not null default 'pending_review'`
- `rejection_reason text`
- `reviewed_by uuid references users(id)`
- `reviewed_at timestamptz`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

Regra:

- `grade >= 0`
- `grade <= 20`

### posts

- `id uuid primary key default gen_random_uuid()`
- `submission_id uuid references submissions(id)`
- `author_id uuid not null references users(id)`
- `faculty_id uuid not null references faculties(id)`
- `course_id uuid not null references courses(id)`
- `subject_id uuid not null references subjects(id)`
- `title text not null`
- `description text not null`
- `grade numeric(5,2) not null`
- `content_type content_type not null`
- `preview_text text not null`
- `viewer_text text not null`
- `status post_status not null default 'published'`
- `views_count int not null default 0`
- `unlocks_count int not null default 0`
- `created_at timestamptz not null default now()`

### content_unlocks

- `id uuid primary key default gen_random_uuid()`
- `user_id uuid not null references users(id) on delete cascade`
- `post_id uuid not null references posts(id) on delete cascade`
- `unlock_type unlock_type not null default 'demo'`
- `created_at timestamptz not null default now()`

Constraint:

- unique `user_id, post_id`

### favorites

- `id uuid primary key default gen_random_uuid()`
- `user_id uuid not null references users(id) on delete cascade`
- `post_id uuid not null references posts(id) on delete cascade`
- `created_at timestamptz not null default now()`

Constraint:

- unique `user_id, post_id`

### notifications

- `id uuid primary key default gen_random_uuid()`
- `user_id uuid not null references users(id) on delete cascade`
- `title text not null`
- `body text not null`
- `type text not null`
- `read_at timestamptz`
- `created_at timestamptz not null default now()`

### reports

Fica preparado para versao futura.

- `id uuid primary key default gen_random_uuid()`
- `reporter_id uuid not null references users(id)`
- `post_id uuid not null references posts(id)`
- `reason text not null`
- `description text`
- `status text not null default 'pending'`
- `created_at timestamptz not null default now()`

## Funcoes Auxiliares

### is_verified_student

```sql
create or replace function public.is_verified_student(user_uuid uuid)
returns boolean
language sql
security definer
as $$
  select exists (
    select 1
    from public.student_profiles
    where user_id = user_uuid
      and verification_status = 'approved'
  );
$$;
```

## Politicas RLS Obrigatorias

Ativar RLS em todas as tabelas publicas.

### users

- utilizador pode ler o proprio registo;
- utilizador pode atualizar nome do proprio registo;
- admins futuros podem ler todos.

### student_profiles

- utilizador pode ler o proprio perfil;
- utilizador pode criar/atualizar o proprio perfil;
- utilizador nao pode auto-aprovar `verification_status`.

Nota: no MVP, atualizacao manual no Supabase Studio pode mudar estados.

### verification_requests

- utilizador pode criar pedido para si mesmo;
- utilizador pode ler os proprios pedidos;
- utilizador nao pode aprovar/rejeitar pedido via app.

### submissions

- utilizador verificado pode criar submissao propria;
- utilizador pode ler as proprias submissoes;
- utilizador nao pode aprovar a propria submissao.

### posts

- qualquer utilizador autenticado pode ler posts `published`;
- posts `hidden` e `removed` nao aparecem no app.

### content_unlocks

- utilizador pode criar desbloqueio demo para si mesmo;
- utilizador pode ler os proprios desbloqueios.

### favorites

- utilizador pode criar/remover/listar os proprios favoritos.

### notifications

- utilizador pode ler as proprias notificacoes.

## Buckets

### verification-documents

- privado;
- upload apenas pelo dono;
- leitura pelo dono e admins futuros.

### submission-files

- privado;
- upload apenas por aluno verificado;
- leitura completa apenas por autor, validador futuro ou utilizador desbloqueado.

### grade-proofs

- privado;
- upload apenas por aluno verificado;
- leitura apenas por autor e validador futuro.

## Seed Data Para Demo

Criar:

- Faculdade Piloto NotaTop.
- Curso de Gestao.
- Curso de Engenharia Informatica.
- Curso de Contabilidade.
- Disciplinas:
  - Metodologia de Investigacao;
  - Programacao I;
  - Contabilidade Geral;
  - Marketing;
  - Estatistica.
- Pelo menos 6 posts publicados.
- Pelo menos 1 aluno verificado.
- Pelo menos 1 aluno pendente.
- Pelo menos 1 submissao pendente.

## Regra De Ouro

Nenhuma policy deve permitir que um aluno altere manualmente o seu proprio estado para `approved`.
