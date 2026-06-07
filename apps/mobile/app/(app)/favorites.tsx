// app/(app)/favorites.tsx
// Tela de favoritos — placeholder para Épico 6

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/styles/theme';
import { EmptyState } from '@/components/ui';

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.container}>
        <EmptyState
          icon="⭐"
          title="Sem favoritos ainda"
          description="Os seus conteúdos favoritos aparecerão aqui. Esta funcionalidade será implementada no Épico 6."
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
