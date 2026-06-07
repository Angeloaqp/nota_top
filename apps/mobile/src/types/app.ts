// src/types/app.ts
// Tipos de aplicação, navegação e UI

import type { VerificationStatus, SubmissionStatus, ContentType, PostStatus } from './database';

// ──────────────────────────────────────────────
// Estado da aplicação
// ──────────────────────────────────────────────

export type AuthState = 'loading' | 'authenticated' | 'unauthenticated';

export type ProfileCompletionState = 'loading' | 'complete' | 'incomplete';

// ──────────────────────────────────────────────
// Labels em português para UI
// ──────────────────────────────────────────────

export const verificationStatusLabels: Record<VerificationStatus, string> = {
  not_submitted: 'Não enviado',
  pending: 'Pendente',
  approved: 'Aprovado',
  rejected: 'Rejeitado',
};

export const submissionStatusLabels: Record<SubmissionStatus, string> = {
  draft: 'Rascunho',
  pending_review: 'Em análise',
  approved: 'Aprovado',
  rejected: 'Rejeitado',
};

export const contentTypeLabels: Record<ContentType, string> = {
  assignment: 'Trabalho',
  report: 'Relatório',
  project: 'Projeto',
  presentation: 'Apresentação',
  summary: 'Resumo',
  other: 'Outro',
};

export const postStatusLabels: Record<PostStatus, string> = {
  published: 'Publicado',
  hidden: 'Oculto',
  removed: 'Removido',
};

// ──────────────────────────────────────────────
// Variantes de UI
// ──────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

export type BadgeVariant = 'verified' | 'validated' | 'pending' | 'rejected' | 'approved';
