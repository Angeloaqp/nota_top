# 08 - Decisoes Em Falta Resolvidas

## Objetivo

Este documento fecha pontos que ainda estavam abertos para que agentes de IA consigam implementar o projeto sem tomar decisoes importantes por conta propria.

## Decisoes De Produto

### Idioma

O app sera em portugues.

Padrao de texto:

- usar linguagem simples;
- usar "aluno", "faculdade", "curso", "disciplina" e "nota";
- evitar termos demasiado tecnicos na interface.

### Faculdade Piloto

O MVP deve assumir uma unica faculdade piloto.

Nome para dados de demonstracao:

- `Faculdade Piloto NotaTop`

Depois o sistema podera crescer para multi-faculdade.

### Escala De Notas

A escala padrao de nota sera 0 a 20.

Regras:

- `grade` deve aceitar decimal.
- nota minima padrao para publicacao: 16/20.
- `subjects.minimum_grade` permite mudar a nota minima por disciplina.

### Tipos De Conteudo

Tipos aceites no MVP:

- trabalho;
- relatorio;
- projeto;
- apresentacao;
- resumo;
- outro.

Valores tecnicos:

- `assignment`
- `report`
- `project`
- `presentation`
- `summary`
- `other`

### Pagamentos

Pagamentos nao fazem parte do MVP.

Para demonstracao, usar:

- botao "Desbloquear demo";
- registo em `content_unlocks`;
- `unlock_type = demo`.

### Validacao No MVP

Como o painel web ainda nao sera construido, as aprovacoes serao feitas manualmente no Supabase Studio.

Fluxos manuais:

- aprovar/rejeitar aluno em `verification_requests` e `student_profiles`;
- aprovar/rejeitar submissao em `submissions`;
- criar/ativar post em `posts`.

### Visualizador

O visualizador do MVP sera um visualizador demo dentro do app.

Ele deve:

- mostrar `viewer_text` ou conteudo textual associado ao post;
- mostrar marca d'agua com nome ou email do utilizador;
- bloquear acesso quando nao houver desbloqueio.

O suporte completo para PDF protegido fica para versao futura.

### Upload De Ficheiros

Tipos permitidos:

- PDF;
- DOC/DOCX;
- PPT/PPTX;
- PNG/JPG.

Limite inicial:

- maximo 20 MB por ficheiro.

### Preview

O preview do MVP sera controlado por texto.

Campos:

- `preview_text`: amostra publica.
- `viewer_text`: conteudo demo para visualizacao apos desbloqueio.

Extracao automatica de PDF nao faz parte do MVP.

### Estado De Verificacao

Estados:

- `not_submitted`
- `pending`
- `approved`
- `rejected`

So `approved` permite publicar.

### Estado De Submissao

Estados:

- `draft`
- `pending_review`
- `approved`
- `rejected`

So `approved` pode gerar post publicado.

### Estado De Post

Estados:

- `published`
- `hidden`
- `removed`

So `published` aparece no marketplace.

## Decisoes Tecnicas

### Nome Tecnico Do App

Usar:

- nome publico: `NotaTop`;
- slug Expo: `notatop`;
- package Android inicial: `com.notatop.app`;
- bundle identifier iOS inicial: `com.notatop.app`.

Se ja existir uma empresa ou dominio oficial, esses identificadores podem ser ajustados antes da publicacao nas lojas.

### Gestor De Pacotes

Usar `npm` no MVP.

Motivo:

- reduz decisao para agentes;
- funciona bem com Expo;
- evita configurar workspace package manager antes da primeira entrega.

Se o projeto crescer, pode migrar para `pnpm` depois.

### Versoes

Nao fixar manualmente uma versao antiga do Expo.

Ao criar o app, usar a versao recomendada pelo comando oficial do Expo no momento da criacao.

### Alvo De Teste Inicial

Como o desenvolvimento esta em Windows, testar primeiro em:

- Android Emulator, ou
- dispositivo Android com Expo Go.

iOS deve ser validado depois com:

- iPhone fisico usando Expo Go, ou
- EAS Build/TestFlight quando a fase de publicacao comecar.

### Monorepo

Usar monorepo desde o inicio:

```txt
apps/mobile
apps/admin-web
packages/shared
supabase
docs
```

Mesmo que o admin web nao seja implementado ja, a pasta pode existir ou ser criada depois.

### App Mobile

Tecnologia:

- React Native;
- Expo;
- TypeScript;
- Expo Router.

### Gestao De Dados Remotos

Usar TanStack Query para:

- perfil;
- verificacao;
- submissoes;
- posts;
- favoritos;
- biblioteca.

### Formularios

Usar React Hook Form + Zod.

### Backend

Usar Supabase:

- Auth;
- PostgreSQL;
- Storage;
- RLS;
- Edge Functions apenas quando necessario.

### UI

Usar componentes proprios no MVP, sem depender de biblioteca visual pesada.

Componentes base:

- Button;
- TextField;
- SelectField;
- Card;
- Badge;
- EmptyState;
- LoadingState;
- ErrorState;
- Screen;
- SectionHeader.

## O Que Nao Deve Ser Decidido Pelo Agente

O agente nao deve alterar sem aprovacao:

- stack tecnica;
- regra de que so aluno verificado pode postar;
- decisao de nao implementar pagamento no MVP;
- separacao app mobile/web;
- escala de nota padrao;
- uso de Supabase;
- idioma principal do app.
