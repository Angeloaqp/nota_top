// app/(app)/profile.tsx
// Tela de perfil — placeholder para Épico 2

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fontSizes, fontWeights, spacing } from '@/styles/theme';
import { Card, Badge, Button } from '@/components/ui';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <Text style={styles.name}>Estudante NotaTop</Text>
          <Badge label="Não verificado" variant="pending" />
        </View>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Perfil académico</Text>
          <Text style={styles.cardDescription}>
            O perfil académico será implementado no Épico 2.
          </Text>
          <Button
            title="Completar perfil"
            variant="primary"
            fullWidth
            disabled
          />
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  avatarText: {
    fontSize: 36,
  },
  name: {
    fontSize: fontSizes.titleScreen,
    fontWeight: fontWeights.bold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  card: {
    marginBottom: spacing.lg,
  },
  cardTitle: {
    fontSize: fontSizes.subtitle,
    fontWeight: fontWeights.semibold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  cardDescription: {
    fontSize: fontSizes.secondary,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },
});
