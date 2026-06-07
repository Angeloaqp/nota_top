// src/components/ui/EmptyState.tsx
// Componente para listas vazias com ícone, título e descrição

import React from 'react';
import { View, Text, StyleSheet, type ViewStyle } from 'react-native';
import { colors, fontSizes, fontWeights, spacing } from '@/styles/theme';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: string;
  style?: ViewStyle;
}

export function EmptyState({ title, description, icon, style }: EmptyStateProps) {
  return (
    <View style={[styles.container, style]}>
      {icon ? <Text style={styles.icon}>{icon}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.xxxl,
  },
  icon: {
    fontSize: 48,
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: fontSizes.subtitle,
    fontWeight: fontWeights.semibold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: fontSizes.secondary,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
});
