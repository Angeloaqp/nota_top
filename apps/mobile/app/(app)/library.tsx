// app/(app)/library.tsx
// Tela de biblioteca — placeholder para Épico 7

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/styles/theme';
import { EmptyState } from '@/components/ui';

export default function LibraryScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.container}>
        <EmptyState
          icon="📚"
          title="Biblioteca vazia"
          description="Os conteúdos desbloqueados aparecerão aqui. Esta funcionalidade será implementada no Épico 7."
        />
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
  },
});
