// app/(auth)/login.tsx
// Tela de login — placeholder para Épico 1

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { colors, fontSizes, fontWeights, spacing } from '@/styles/theme';
import { Button } from '@/components/ui';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NotaTop</Text>
      <Text style={styles.subtitle}>Entrar na sua conta</Text>

      {/* TODO (Épico 1): formulário de login real */}
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>
          Formulário de login será implementado no Épico 1
        </Text>
      </View>

      <Link href="/(auth)/register" asChild>
        <Button title="Criar conta" variant="secondary" fullWidth />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: fontSizes.titleLarge,
    fontWeight: fontWeights.bold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fontSizes.subtitle,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.xxl,
  },
  placeholder: {
    backgroundColor: colors.surfaceAlt,
    padding: spacing.xl,
    borderRadius: 8,
    marginBottom: spacing.xl,
  },
  placeholderText: {
    fontSize: fontSizes.secondary,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
