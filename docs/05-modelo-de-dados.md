# 05 - Modelo De Dados

## Objetivo

Este documento define o modelo inicial de dados para o MVP mobile do NotaTop. A base sera PostgreSQL no Supabase.

## Tabelas Principais

### users

Representa o utilizador autenticado.

Campos principais:

- `id`
- `email`
- `full_name`
- `role`
- `created_at`
- `updated_at`

Valores de `role`:

- `student`
- `faculty_staff`
- `admin`

No MVP mobile, o foco sera `student`.

### faculties

Representa uma faculdade.

Campos:

- `id`
- `name`
- `country`
- `city`
- `status`
- `created_at`

### courses

Representa cursos dentro de uma faculdade.

Campos:

- `id`
- `faculty_id`
- `name`
- `status`
- `created_at`

### subjects

Representa disciplinas.

Campos:

- `id`
- `course_id`
- `name`
- `semester`
- `minimum_grade`
- `status`
- `created_at`

### student_profiles

Guarda dados academicos do estudante.

Campos:

- `id`
- `user_id`
- `faculty_id`
- `course_id`
- `student_number`
- `institutional_email`
- `semester`
- `verification_status`
- `verified_at`
- `created_at`
- `updated_at`

Valores de `verification_status`:

- `not_submitted`
- `pending`
- `approved`
- `rejected`

### verification_requests

Pedido de verificacao enviado pelo estudante.

Campos:

- `id`
- `user_id`
- `faculty_id`
- `course_id`
- `student_number`
- `institutional_email`
- `document_file_path`
- `status`
- `rejection_reason`
- `reviewed_by`
- `reviewed_at`
- `created_at`

Valores de `status`:

- `pending`
- `approved`
- `rejected`

### submissions

Conteudos enviados por alunos verificados para validacao.

Campos:

- `id`
- `author_id`
- `faculty_id`
- `course_id`
- `subject_id`
- `title`
- `description`
- `content_type`
- `grade`
- `content_file_path`
- `grade_proof_file_path`
- `status`
- `rejection_reason`
- `reviewed_by`
- `reviewed_at`
- `created_at`
- `updated_at`

Valores de `content_type`:

- `assignment`
- `report`
- `project`
- `presentation`
- `summary`
- `other`

Valores de `status`:

- `draft`
- `pending_review`
- `approved`
- `rejected`

### posts

Conteudos aprovados que aparecem no marketplace.

Campos:

- `id`
- `submission_id`
- `author_id`
- `faculty_id`
- `course_id`
- `subject_id`
- `title`
- `description`
- `grade`
- `content_type`
- `preview_text`
- `status`
- `views_count`
- `unlocks_count`
- `created_at`

Valores de `status`:

- `published`
- `hidden`
- `removed`

### content_unlocks

Regista conteudos desbloqueados pelo estudante. No MVP, sera usado em modo demo, sem pagamento.

Campos:

- `id`
- `user_id`
- `post_id`
- `unlock_type`
- `created_at`

Valores de `unlock_type`:

- `demo`
- `paid_future`

### favorites

Conteudos guardados pelo estudante.

Campos:

- `id`
- `user_id`
- `post_id`
- `created_at`

### notifications

Notificacoes internas do app.

Campos:

- `id`
- `user_id`
- `title`
- `body`
- `type`
- `read_at`
- `created_at`

### reports

Denuncias futuras de conteudo.

Campos:

- `id`
- `reporter_id`
- `post_id`
- `reason`
- `description`
- `status`
- `created_at`

## Buckets De Storage

### verification-documents

Documentos enviados para comprovar que o estudante pertence a faculdade.

### submission-files

Ficheiros principais dos conteudos submetidos.

### grade-proofs

Comprovativos de nota enviados junto com a submissao.

## Regras De Acesso

- Estudante pode ler e atualizar apenas o proprio perfil.
- Estudante pode criar pedido de verificacao para si mesmo.
- Estudante pode ler apenas os proprios pedidos de verificacao.
- Estudante verificado pode criar submissao.
- Estudante pode ler apenas as proprias submissoes antes de aprovadas.
- Qualquer estudante autenticado pode ler posts publicados.
- Apenas o dono do desbloqueio pode ler o seu registo de desbloqueio.
- Ficheiros completos devem exigir permissao antes de acesso.

## Observacoes Para A Primeira Fase

Como o painel web ainda nao sera implementado, a aprovacao de:

- `verification_requests`;
- `student_profiles.verification_status`;
- `submissions`;
- `posts`;

pode ser feita manualmente pelo Supabase Studio durante demonstracoes e testes.
