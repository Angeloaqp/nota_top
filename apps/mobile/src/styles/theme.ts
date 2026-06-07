// src/styles/theme.ts
// Tema visual do NotaTop conforme docs/12-guia-visual-e-ux.md

export const colors = {
  background: '#F7F8FA',
  surface: '#FFFFFF',
  surfaceAlt: '#EEF2F6',
  text: '#18202A',
  textMuted: '#64748B',
  primary: '#2563EB',
  primaryDark: '#1E40AF',
  accent: '#0F766E',
  warning: '#B45309',
  danger: '#B91C1C',
  success: '#15803D',
  border: '#D8DEE8',
  white: '#FFFFFF',
  transparent: 'transparent',
} as const;

export const fontSizes = {
  /** Título grande — 28 */
  titleLarge: 28,
  /** Título de tela — 22 */
  titleScreen: 22,
  /** Subtítulo — 18 */
  subtitle: 18,
  /** Corpo — 16 */
  body: 16,
  /** Texto secundário — 14 */
  secondary: 14,
  /** Legenda — 12 */
  caption: 12,
} as const;

export const fontWeights = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const spacing = {
  /** 4px */
  xs: 4,
  /** 8px */
  sm: 8,
  /** 12px */
  md: 12,
  /** 16px */
  lg: 16,
  /** 24px */
  xl: 24,
  /** 32px */
  xxl: 32,
  /** 48px */
  xxxl: 48,
} as const;

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
} as const;

export const theme = {
  colors,
  fontSizes,
  fontWeights,
  spacing,
  borderRadius,
  shadows,
} as const;

export type Theme = typeof theme;

export default theme;
