// src/components/ui/TextField.tsx
// Campo de texto com estados: normal, focado, erro, desativado
// Suporte a label visível e mensagem de erro

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';
import { colors, fontSizes, fontWeights, spacing, borderRadius } from '@/styles/theme';

interface TextFieldProps extends TextInputProps {
  label: string;
  error?: string;
  containerStyle?: ViewStyle;
}

export function TextField({
  label,
  error,
  editable = true,
  containerStyle,
  ...props
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = error
    ? colors.danger
    : isFocused
      ? colors.primary
      : colors.border;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, !editable && styles.labelDisabled]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          { borderColor },
          !editable && styles.inputDisabled,
        ]}
        placeholderTextColor={colors.textMuted}
        editable={editable}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        {...props}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: fontSizes.secondary,
    fontWeight: fontWeights.medium,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  labelDisabled: {
    color: colors.textMuted,
  },
  input: {
    borderWidth: 1.5,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    fontSize: fontSizes.body,
    color: colors.text,
    backgroundColor: colors.surface,
    minHeight: 48,
  },
  inputDisabled: {
    backgroundColor: colors.surfaceAlt,
    color: colors.textMuted,
  },
  error: {
    fontSize: fontSizes.caption,
    color: colors.danger,
    marginTop: spacing.xs,
  },
});
