# 09 - Contrato Do App Mobile

## Objetivo

Definir rotas, estrutura, estados, servicos e regras para implementar o app mobile do NotaTop.

## Stack Obrigatoria

- React Native.
- Expo.
- TypeScript.
- Expo Router.
- TanStack Query.
- React Hook Form.
- Zod.
- Supabase JS SDK.

## Estrutura De Pastas

```txt
apps/mobile/
  app/
    _layout.tsx
    index.tsx
    (auth)/
      login.tsx
      register.tsx
      forgot-password.tsx
    (app)/
      _layout.tsx
      home.tsx
      explore.tsx
      favorites.tsx
      library.tsx
      profile.tsx
      settings.tsx
      notifications.tsx
      verification/
        index.tsx
        submit.tsx
        status.tsx
      content/
        [postId].tsx
        preview.tsx
        viewer.tsx
      publish/
        index.tsx
        upload.tsx
        details.tsx
        grade-proof.tsx
        review.tsx
      submissions/
        index.tsx
        [submissionId].tsx
  src/
    components/
      ui/
      content/
      forms/
      layout/
    features/
      auth/
      profile/
      verification/
      marketplace/
      publish/
      library/
      favorites/
      notifications/
    lib/
      supabase.ts
      query-client.ts
      env.ts
    services/
      auth.service.ts
      profile.service.ts
      verification.service.ts
      posts.service.ts
      submissions.service.ts
      storage.service.ts
      unlocks.service.ts
      favorites.service.ts
    types/
      database.ts
      app.ts
    styles/
      theme.ts
```

## Variaveis De Ambiente

```txt
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
```

Nao guardar service role key no app mobile.

## Navegacao

### Regras

- Utilizador sem sessao vai para `(auth)`.
- Utilizador autenticado sem perfil completo vai para completar perfil.
- Utilizador autenticado com perfil completo vai para `(app)/home`.
- Publicacao exige `verification_status = approved`.

### Rotas Minimas Do MVP

| Rota | Objetivo |
| --- | --- |
| `/` | decidir destino inicial |
| `/(auth)/login` | login |
| `/(auth)/register` | cadastro |
| `/(app)/home` | pagina inicial |
| `/(app)/explore` | pesquisa e filtros |
| `/(app)/verification` | estado geral da verificacao |
| `/(app)/verification/submit` | enviar dados escolares |
| `/(app)/publish` | entrada do fluxo de publicacao |
| `/(app)/publish/upload` | upload de ficheiro |
| `/(app)/publish/details` | dados academicos do conteudo |
| `/(app)/publish/grade-proof` | comprovativo da nota |
| `/(app)/publish/review` | rever e enviar |
| `/(app)/submissions` | minhas submissoes |
| `/(app)/content/[postId]` | detalhe do conteudo |
| `/(app)/content/viewer` | visualizador demo |
| `/(app)/library` | biblioteca |
| `/(app)/favorites` | favoritos |
| `/(app)/profile` | perfil |

## Servicos

### auth.service.ts

Responsabilidades:

- signUp;
- signIn;
- signOut;
- getSession;
- resetPassword.

### profile.service.ts

Responsabilidades:

- getMyProfile;
- upsertMyProfile;
- getVerificationStatus.

### verification.service.ts

Responsabilidades:

- createVerificationRequest;
- getMyVerificationRequests;
- getLatestVerificationRequest.

### submissions.service.ts

Responsabilidades:

- createSubmission;
- getMySubmissions;
- getSubmissionById.

### posts.service.ts

Responsabilidades:

- listPublishedPosts;
- getPostById;
- searchPosts;
- listPostsBySubject.

### unlocks.service.ts

Responsabilidades:

- createDemoUnlock;
- listMyUnlockedPosts;
- hasAccessToPost.

### favorites.service.ts

Responsabilidades:

- addFavorite;
- removeFavorite;
- listFavorites;
- isFavorite.

### storage.service.ts

Responsabilidades:

- uploadVerificationDocument;
- uploadSubmissionFile;
- uploadGradeProof;
- getSignedUrlForAllowedFile.

## Tipos Principais

```ts
export type VerificationStatus =
  | 'not_submitted'
  | 'pending'
  | 'approved'
  | 'rejected';

export type SubmissionStatus =
  | 'draft'
  | 'pending_review'
  | 'approved'
  | 'rejected';

export type ContentType =
  | 'assignment'
  | 'report'
  | 'project'
  | 'presentation'
  | 'summary'
  | 'other';

export type PostStatus = 'published' | 'hidden' | 'removed';
```

## Validacoes De Formulario

### Cadastro

- email valido;
- senha minima de 8 caracteres;
- nome obrigatorio.

### Perfil Academico

- faculdade obrigatoria;
- curso obrigatorio;
- numero de estudante obrigatorio;
- semestre obrigatorio;
- email institucional opcional, mas se existir deve ser email valido.

### Verificacao

- numero de estudante obrigatorio;
- curso obrigatorio;
- documento opcional;
- confirmacao de dados verdadeiros obrigatoria.

### Submissao

- titulo obrigatorio;
- descricao obrigatoria;
- disciplina obrigatoria;
- tipo obrigatorio;
- nota obrigatoria entre 0 e 20;
- ficheiro obrigatorio;
- comprovativo de nota obrigatorio.

## Regras De Tela

### Publicar

Se `verification_status !== approved`:

- nao mostrar formulario de upload;
- mostrar mensagem explicando que so alunos verificados podem postar;
- mostrar botao para pagina de verificacao.

### Marketplace

Listar apenas posts com:

- `status = published`.

### Detalhe

Mostrar:

- titulo;
- descricao;
- nota;
- disciplina;
- tipo;
- autor;
- selo verificado;
- preview;
- botao de favorito;
- botao de desbloqueio demo.

### Visualizador

Antes de abrir:

- verificar se existe `content_unlocks` para `user_id + post_id`.

Se existir:

- mostrar `viewer_text`;
- aplicar marca d'agua visual com nome/email do utilizador.

Se nao existir:

- redirecionar para detalhe do conteudo.

## Estados De UI Obrigatorios

Toda tela com dados remotos deve tratar:

- loading;
- erro;
- vazio;
- sucesso.

## Criterios De Aceitacao Do App

- O app nao deixa utilizador sem sessao acessar area principal.
- O app nao deixa aluno nao verificado postar.
- O app mostra selo para aluno verificado.
- O app lista somente posts publicados.
- O app cria desbloqueio demo sem pagamento.
- O app bloqueia visualizador sem desbloqueio.
- O app nao usa service role key.
