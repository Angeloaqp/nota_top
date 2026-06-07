// src/types/database.ts
// Tipos TypeScript espelhando os enums e tabelas do contrato Supabase (docs/10)

// ──────────────────────────────────────────────
// Enums
// ──────────────────────────────────────────────

export type UserRole = 'student' | 'faculty_staff' | 'admin';

export type RecordStatus = 'active' | 'inactive';

export type VerificationStatus =
  | 'not_submitted'
  | 'pending'
  | 'approved'
  | 'rejected';

export type VerificationRequestStatus = 'pending' | 'approved' | 'rejected';

export type ContentType =
  | 'assignment'
  | 'report'
  | 'project'
  | 'presentation'
  | 'summary'
  | 'other';

export type SubmissionStatus =
  | 'draft'
  | 'pending_review'
  | 'approved'
  | 'rejected';

export type PostStatus = 'published' | 'hidden' | 'removed';

export type UnlockType = 'demo' | 'paid_future';

// ──────────────────────────────────────────────
// Tabelas
// ──────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface Faculty {
  id: string;
  name: string;
  country: string;
  city: string | null;
  status: RecordStatus;
  created_at: string;
}

export interface Course {
  id: string;
  faculty_id: string;
  name: string;
  status: RecordStatus;
  created_at: string;
}

export interface Subject {
  id: string;
  course_id: string;
  name: string;
  semester: number | null;
  minimum_grade: number;
  grade_scale_max: number;
  status: RecordStatus;
  created_at: string;
}

export interface StudentProfile {
  id: string;
  user_id: string;
  faculty_id: string | null;
  course_id: string | null;
  student_number: string | null;
  institutional_email: string | null;
  semester: number | null;
  verification_status: VerificationStatus;
  verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface VerificationRequest {
  id: string;
  user_id: string;
  faculty_id: string;
  course_id: string;
  student_number: string;
  institutional_email: string | null;
  document_file_path: string | null;
  status: VerificationRequestStatus;
  rejection_reason: string | null;
  reviewed_by: string | null;
  reviewed_at: string | null;
  created_at: string;
}

export interface Submission {
  id: string;
  author_id: string;
  faculty_id: string;
  course_id: string;
  subject_id: string;
  title: string;
  description: string;
  content_type: ContentType;
  grade: number;
  content_file_path: string;
  grade_proof_file_path: string;
  status: SubmissionStatus;
  rejection_reason: string | null;
  reviewed_by: string | null;
  reviewed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: string;
  submission_id: string | null;
  author_id: string;
  faculty_id: string;
  course_id: string;
  subject_id: string;
  title: string;
  description: string;
  grade: number;
  content_type: ContentType;
  preview_text: string;
  viewer_text: string;
  status: PostStatus;
  views_count: number;
  unlocks_count: number;
  created_at: string;
}

export interface ContentUnlock {
  id: string;
  user_id: string;
  post_id: string;
  unlock_type: UnlockType;
  created_at: string;
}

export interface Favorite {
  id: string;
  user_id: string;
  post_id: string;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  body: string;
  type: string;
  read_at: string | null;
  created_at: string;
}

export interface Report {
  id: string;
  reporter_id: string;
  post_id: string;
  reason: string;
  description: string | null;
  status: string;
  created_at: string;
}
