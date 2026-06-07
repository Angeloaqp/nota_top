// app/(app)/home.tsx
// Tela inicial — placeholder para Épico 5

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fontSizes, fontWeights, spacing } from '@/styles/theme';
import { Card, Button, Badge } from '@/components/ui';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.greeting}>Bem-vindo ao NotaTop 👋</Text>
        <Text style={styles.subtitle}>
          Encontre trabalhos com boas notas da sua faculdade
        </Text>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Componentes UI</Text>
          <Text style={styles.cardDescription}>
            Os componentes base estão prontos para uso.
          </Text>

          <View style={styles.badges}>
            <Badge label="Verificado" variant="verified" />
            <Badge label="Pendente" variant="pending" />
            <Badge label="Aprovado" variant="approved" />
            <Badge label="Rejeitado" variant="rejected" />
          </View>

          <View style={styles.buttons}>
            <Button title="Primary" variant="primary" />
            <Button title="Secondary" variant="secondary" />
            <Button title="Ghost" variant="ghost" />
            <Button title="Danger" variant="danger" />
            <Button title="Loading..." variant="primary" loading />
            <Button title="Disabled" variant="primary" disabled />
          </View>
        </Card>
      </ScrollView>
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
  },
  content: {
    padding: spacing.xl,
  },
  greeting: {
    fontSize: fontSizes.titleLarge,
    fontWeight: fontWeights.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fontSizes.body,
    color: colors.textMuted,
    marginBottom: spacing.xl,
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
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  buttons: {
    gap: spacing.sm,
  },
});
