// src/components/ui/Button.tsx
// Botão base com variantes: primary, secondary, ghost, danger
// Estados: normal, loading, disabled

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  type ViewStyle,
  type TextStyle,
  type TouchableOpacityProps,
} from 'react-native';
import { colors, fontSizes, fontWeights, spacing, borderRadius } from '@/styles/theme';
import type { ButtonVariant } from '@/types/app';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, { container: ViewStyle; text: TextStyle }> = {
  primary: {
    container: {
      backgroundColor: colors.primary,
    },
    text: {
      color: colors.white,
    },
  },
  secondary: {
    container: {
      backgroundColor: colors.transparent,
      borderWidth: 1.5,
      borderColor: colors.primary,
    },
    text: {
      color: colors.primary,
    },
  },
  ghost: {
    container: {
      backgroundColor: colors.transparent,
    },
    text: {
      color: colors.primary,
    },
  },
  danger: {
    container: {
      backgroundColor: colors.danger,
    },
    text: {
      color: colors.white,
    },
  },
};

export function Button({
  title,
  variant = 'primary',
  loading = false,
  disabled = false,
  fullWidth = false,
  style,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const vs = variantStyles[variant];

  return (
    <TouchableOpacity
      style={[
        styles.base,
        vs.container,
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style as ViewStyle,
      ]}
      disabled={isDisabled}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={vs.text.color as string}
        />
      ) : (
        <Text style={[styles.text, vs.text]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: fontSizes.body,
    fontWeight: fontWeights.semibold,
  },
});
