// src/components/ui/Card.tsx
// Container reutilizável para itens repetidos (posts, disciplinas, submissões)
// Raio máximo de 8px conforme docs/12

import React from 'react';
import {
  View,
  StyleSheet,
  type ViewStyle,
  type ViewProps,
} from 'react-native';
import { colors, spacing, borderRadius, shadows } from '@/styles/theme';

interface CardProps extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  noPadding?: boolean;
}

export function Card({ children, style, noPadding = false, ...props }: CardProps) {
  return (
    <View
      style={[
        styles.container,
        !noPadding && styles.padding,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  padding: {
    padding: spacing.lg,
  },
});
