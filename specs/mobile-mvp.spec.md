# Especificacao - MVP Mobile NotaTop

## Overview

O MVP mobile do NotaTop deve demonstrar o fluxo central do produto: estudante cria conta, envia dados escolares, recebe verificacao, submete conteudo com boa nota, e outros estudantes conseguem encontrar e desbloquear esse conteudo em modo demo.

O MVP nao inclui pagamentos reais nem painel web. A validacao da faculdade sera simulada operacionalmente por alteracoes manuais no Supabase Studio.

## User Value

### Estudante Comprador

Consegue encontrar exemplos academicos validados por disciplina e usar esses exemplos para melhorar os seus proprios trabalhos.

### Estudante Autor

Consegue publicar conteudos depois de ser verificado e ganhar reputacao academica.

### Faculdade

Consegue entender como a plataforma controlara identidade, notas e conteudos antes de investir num painel administrativo completo.

## Actors

- `student_unverified`: estudante autenticado ainda nao aprovado.
- `student_pending`: estudante com pedido de verificacao pendente.
- `student_verified`: estudante aprovado pela faculdade.
- `student_buyer`: estudante que consulta e desbloqueia conteudos.
- `manual_admin`: pessoa que usa Supabase Studio no MVP para simular validacao.

## Functional Requirements

### Authentication

**FR-AUTH-001**  
When a visitor submits valid registration data, the system shall create an authenticated student account.

**FR-AUTH-002**  
When a student submits valid login credentials, the system shall start an authenticated session.

**FR-AUTH-003**  
When an authenticated student logs out, the system shall end the active session and redirect to login.

### Academic Profile

**FR-PROFILE-001**  
While a student is authenticated, when they submit academic profile data, the system shall save the profile linked to the authenticated user.

**FR-PROFILE-002**  
While a student profile is incomplete, the system shall guide the student to complete the academic profile before verification.

### Student Verification

**FR-VERIFY-001**  
While a student has a complete academic profile, when they submit verification data, the system shall create a verification request with status `pending`.

**FR-VERIFY-002**  
While a verification request is pending, the system shall display the pending state and prevent duplicate confusing submissions.

**FR-VERIFY-003**  
While a student profile has `verification_status = approved`, the system shall display the verified student badge.

**FR-VERIFY-004**  
While a student profile has `verification_status != approved`, the system shall prevent access to the content submission form.

**FR-VERIFY-005**  
While a verification request is rejected, the system shall show the rejection reason and allow resubmission.

### Content Submission

**FR-SUBMISSION-001**  
While a student is verified, when they upload content, grade proof and valid metadata, the system shall create a submission with status `pending_review`.

**FR-SUBMISSION-002**  
While a submission belongs to the authenticated student, the system shall show it in "Minhas Submissoes".

**FR-SUBMISSION-003**  
While a submission has status `pending_review`, the system shall not show it in the marketplace.

**FR-SUBMISSION-004**  
When a submission is rejected manually, the system shall show the rejection reason to the author.

### Marketplace

**FR-MARKET-001**  
When an authenticated student opens Home or Explore, the system shall list only posts with status `published`.

**FR-MARKET-002**  
When a student applies filters, the system shall update the post list according to course, subject, content type and minimum grade.

**FR-MARKET-003**  
When a student opens a published post, the system shall show title, author, verified badge, subject, grade, description and preview.

### Demo Unlock

**FR-UNLOCK-001**  
When a student clicks "Desbloquear demo" on a published post, the system shall create a `content_unlocks` record with `unlock_type = demo`.

**FR-UNLOCK-002**  
While a student has unlocked a post, the system shall list it in their library.

**FR-UNLOCK-003**  
While a student has not unlocked a post, the system shall prevent opening the full viewer.

### Viewer

**FR-VIEWER-001**  
While a student has access to a post, when they open the viewer, the system shall show the full demo text with a visible watermark.

**FR-VIEWER-002**  
The watermark shall include the student's name or email.

### Favorites

**FR-FAVORITE-001**  
When a student favorites a post, the system shall create a favorite linked to the user and post.

**FR-FAVORITE-002**  
When a student removes a favorite, the system shall remove only their own favorite record.

## Non-Functional Requirements

- The app shall run on Android and iOS through Expo.
- The app shall use TypeScript.
- The app shall not store Supabase service role keys.
- Remote data screens shall include loading, error and empty states.
- Lists of posts shall use FlatList or equivalent optimized list rendering.
- Files shall be stored in private Supabase Storage buckets.
- The app shall use Portuguese interface copy.
- The app shall not implement real payment in the MVP.

## Acceptance Criteria

### Scenario 1 - Student Verification

Given a student has completed their academic profile,  
When they submit verification data,  
Then a pending verification request is created and shown in the app.

### Scenario 2 - Publishing Blocked

Given a student is not verified,  
When they open the publish flow,  
Then the app shows that verification is required and does not show the upload form.

### Scenario 3 - Verified Student Publishes

Given a student has `verification_status = approved`,  
When they submit valid content data and files,  
Then a pending submission is created.

### Scenario 4 - Marketplace Only Shows Approved Posts

Given there are pending submissions and published posts,  
When a student opens the marketplace,  
Then only published posts are visible.

### Scenario 5 - Demo Unlock

Given a student is viewing a published post detail,  
When they click "Desbloquear demo",  
Then the post is added to their library.

### Scenario 6 - Viewer Access

Given a student has not unlocked a post,  
When they try to open the viewer,  
Then the app blocks access.

Given a student has unlocked a post,  
When they open the viewer,  
Then the app shows the content with watermark.

## Error Handling

| Area | Error | Expected Behavior |
| --- | --- | --- |
| Auth | invalid credentials | show clear login error |
| Profile | missing required field | show field-level error |
| Verification | upload failed | keep form data and allow retry |
| Submission | student not verified | block submission and link to verification |
| Marketplace | no posts | show empty state |
| Unlock | duplicate unlock | treat as success and navigate to library/viewer |
| Viewer | no access | redirect to detail with message |

## Implementation Checklist

- Create Supabase schema and seed data.
- Create Expo app foundation.
- Implement auth.
- Implement academic profile.
- Implement verification request.
- Implement publish guard.
- Implement content submission.
- Implement marketplace.
- Implement favorites.
- Implement demo unlock.
- Implement library.
- Implement viewer with watermark.
- Run end-to-end demo manually.
