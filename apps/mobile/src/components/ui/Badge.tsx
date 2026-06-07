// src/components/ui/Badge.tsx
// Badge para estados: verified, validated, pending, rejected, approved

import React from 'react';
import { View, Text, StyleSheet, type ViewStyle } from 'react-native';
import { colors, fontSizes, fontWeights, spacing, borderRadius } from '@/styles/theme';
import type { BadgeVariant } from '@/types/app';

interface BadgeProps {
  label: string;
  variant: BadgeVariant;
  style?: ViewStyle;
}

const variantColors: Record<BadgeVariant, { bg: string; text: string }> = {
  verified: { bg: '#DBEAFE', text: colors.primary },
  validated: { bg: '#D1FAE5', text: colors.success },
  pending: { bg: '#FEF3C7', text: colors.warning },
  rejected: { bg: '#FEE2E2', text: colors.danger },
  approved: { bg: '#D1FAE5', text: colors.success },
};

export function Badge({ label, variant, style }: BadgeProps) {
  const vc = variantColors[variant];

  return (
    <View style={[styles.container, { backgroundColor: vc.bg }, style]}>
      <Text style={[styles.label, { color: vc.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: fontSizes.caption,
    fontWeight: fontWeights.semibold,
  },
});
